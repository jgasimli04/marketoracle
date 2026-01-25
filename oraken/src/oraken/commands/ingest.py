"""
CSV ingestion command.

Reads product CSV files, generates embeddings, and stores them in the vector database.
"""

import logging
from pathlib import Path
from typing import List, Optional

import pandas as pd
import typer
from rich.console import Console
from rich.panel import Panel
from rich.progress import Progress, SpinnerColumn, TextColumn, BarColumn, TaskProgressColumn
from tqdm import tqdm

from oraken.config import DBType, get_settings
from oraken.db.base import Product
from oraken.db.milvus import MilvusDB
from oraken.db.postgres import PostgresDB
from oraken.embedding import get_embedding_service

logger = logging.getLogger(__name__)
console = Console()


def _load_csv(csv_path: Path) -> pd.DataFrame:
    """
    Load and validate CSV file.

    Args:
        csv_path: Path to the CSV file.

    Returns:
        DataFrame with product data.

    Raises:
        typer.Exit: If file is invalid or missing required columns.
    """
    if not csv_path.exists():
        console.print(f"[red]Error: File not found: {csv_path}[/red]")
        raise typer.Exit(code=1)

    try:
        df = pd.read_csv(csv_path)
    except Exception as e:
        console.print(f"[red]Error reading CSV: {e}[/red]")
        raise typer.Exit(code=1)

    # Check required columns
    required_cols = {"id", "title"}
    missing_cols = required_cols - set(df.columns)
    if missing_cols:
        console.print(
            f"[red]Error: Missing required columns: {missing_cols}[/red]\n"
            f"Found columns: {list(df.columns)}"
        )
        raise typer.Exit(code=1)

    return df


def _prepare_products(df: pd.DataFrame, embed_service) -> List[Product]:
    """
    Prepare products with embeddings.

    Args:
        df: DataFrame with product data.
        embed_service: Embedding service instance.

    Returns:
        List of Product objects with embeddings.
    """
    products = []
    texts_to_embed = []
    valid_indices = []

    console.print("[blue]Preparing products...[/blue]")

    for idx, row in df.iterrows():
        # Skip rows without title
        if pd.isna(row.get("title")) or not str(row.get("title")).strip():
            logger.warning(f"Skipping row {idx}: missing title")
            continue

        title = str(row["title"]).strip()
        description = str(row.get("description", "")).strip() if pd.notna(row.get("description")) else None

        # Format text for embedding
        text = embed_service.format_product_text(title, description)
        texts_to_embed.append(text)
        valid_indices.append(idx)

        products.append(
            Product(
                id=str(row["id"]),
                title=title,
                description=description,
                price=float(row.get("price", 0)) if pd.notna(row.get("price")) else 0.0,
                image_url=str(row.get("image_url", "")) if pd.notna(row.get("image_url")) else None,
            )
        )

    if not products:
        console.print("[yellow]No valid products found in CSV.[/yellow]")
        return []

    # Generate embeddings in batch
    console.print(f"[blue]Generating embeddings for {len(products)} products...[/blue]")
    embeddings = embed_service.embed_texts(texts_to_embed, show_progress=True)

    # Assign embeddings to products
    for product, embedding in zip(products, embeddings):
        product.embedding = embedding

    return products


def ingest_cmd(
    csv: Path = typer.Option(
        ...,
        "--csv",
        "-f",
        help="Path to the CSV file containing product data.",
        exists=True,
        readable=True,
    ),
    collection: str = typer.Option(
        ...,
        "--collection",
        "-c",
        help="Name of the collection/table to insert into.",
    ),
    db_type: Optional[DBType] = typer.Option(
        None,
        "--db-type",
        "-d",
        help="Database type (milvus or postgres). Overrides DB_TYPE env var.",
    ),
    batch_size: Optional[int] = typer.Option(
        None,
        "--batch-size",
        "-b",
        help="Batch size for inserts. Overrides BATCH_SIZE env var.",
    ),
) -> None:
    """
    Ingest products from a CSV file into the vector database.

    Reads the CSV, generates embeddings for each product (title + description),
    and inserts them into the specified collection in batches.

    Required CSV columns: id, title
    Optional CSV columns: description, price, image_url
    """
    settings = get_settings()
    effective_db_type = db_type or settings.db_type
    effective_batch_size = batch_size or settings.batch_size

    console.print(
        Panel(
            f"[bold blue]Ingesting products from CSV[/bold blue]\n"
            f"File: {csv}\n"
            f"Collection: {collection}\n"
            f"Database: {effective_db_type.value}\n"
            f"Batch size: {effective_batch_size}",
            title="Oraken Ingest",
        )
    )

    # Load CSV
    df = _load_csv(csv)
    console.print(f"[green]Loaded {len(df)} rows from CSV[/green]")

    # Initialize embedding service
    embed_service = get_embedding_service()
    console.print(f"[blue]Using embedding model: {embed_service.model_name}[/blue]")

    # Prepare products with embeddings
    products = _prepare_products(df, embed_service)

    if not products:
        console.print("[yellow]No products to insert.[/yellow]")
        raise typer.Exit(code=0)

    # Initialize database connection
    if effective_db_type == DBType.MILVUS:
        db = MilvusDB(collection)
    else:
        db = PostgresDB(collection)

    try:
        with db:
            # Ensure collection exists
            if not db.collection_exists():
                console.print(f"[yellow]Collection '{collection}' does not exist. Creating...[/yellow]")
                db.init_collection()

            # Insert in batches with progress bar
            total_inserted = 0
            num_batches = (len(products) + effective_batch_size - 1) // effective_batch_size

            console.print(f"[blue]Inserting {len(products)} products in {num_batches} batches...[/blue]")

            for i in tqdm(range(0, len(products), effective_batch_size), desc="Inserting batches"):
                batch = products[i : i + effective_batch_size]
                inserted = db.insert_products(batch)
                total_inserted += inserted

            console.print(
                f"\n[green]Successfully inserted {total_inserted} products "
                f"into '{collection}'[/green]"
            )

            # Show updated stats
            stats = db.get_collection_stats()
            console.print(f"[bold]Collection now has {stats.get('count', 0)} total records[/bold]")

    except Exception as e:
        logger.error(f"Failed to ingest products: {e}")
        console.print(f"[red]Error: {e}[/red]")
        raise typer.Exit(code=1)
