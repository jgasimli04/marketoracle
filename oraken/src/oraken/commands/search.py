"""
Semantic search command.

Searches for similar products using vector similarity.
"""

import json
import logging
from typing import Optional

import typer
from rich.console import Console
from rich.panel import Panel
from rich.table import Table

from oraken.config import DBType, get_settings
from oraken.db.milvus import MilvusDB
from oraken.db.postgres import PostgresDB
from oraken.embedding import get_embedding_service

logger = logging.getLogger(__name__)
console = Console()


def search_cmd(
    text: str = typer.Option(
        ...,
        "--text",
        "-t",
        help="Query text to search for similar products.",
    ),
    top_k: int = typer.Option(
        10,
        "--top-k",
        "-k",
        help="Number of results to return.",
        min=1,
        max=100,
    ),
    collection: Optional[str] = typer.Option(
        None,
        "--collection",
        "-c",
        help="Collection/table to search in. Uses default if not specified.",
    ),
    db_type: Optional[DBType] = typer.Option(
        None,
        "--db-type",
        "-d",
        help="Database type (milvus or postgres). Overrides DB_TYPE env var.",
    ),
    output_json: bool = typer.Option(
        False,
        "--json",
        "-j",
        help="Output results as JSON instead of table.",
    ),
) -> None:
    """
    Search for products similar to the query text.

    Generates an embedding for the query and performs vector similarity search
    to find the most similar products in the database.
    """
    settings = get_settings()
    effective_db_type = db_type or settings.db_type
    collection_name = collection or settings.milvus_collection

    if not output_json:
        console.print(
            Panel(
                f"[bold blue]Semantic Search[/bold blue]\n"
                f"Query: {text[:50]}{'...' if len(text) > 50 else ''}\n"
                f"Collection: {collection_name}\n"
                f"Database: {effective_db_type.value}\n"
                f"Top-K: {top_k}",
                title="Oraken Search",
            )
        )

    # Initialize embedding service and generate query embedding
    embed_service = get_embedding_service()

    if not output_json:
        console.print("[blue]Generating query embedding...[/blue]")

    query_embedding = embed_service.embed_text(text)

    # Initialize database connection
    if effective_db_type == DBType.MILVUS:
        db = MilvusDB(collection_name)
    else:
        db = PostgresDB(collection_name)

    try:
        with db:
            # Check collection exists
            if not db.collection_exists():
                console.print(
                    f"[red]Error: Collection '{collection_name}' does not exist. "
                    f"Run 'oraken init-db' first.[/red]"
                )
                raise typer.Exit(code=1)

            # Perform search
            if not output_json:
                console.print("[blue]Searching...[/blue]")

            results = db.search(query_embedding, top_k=top_k)

            if not results:
                if output_json:
                    console.print(json.dumps({"results": [], "count": 0}))
                else:
                    console.print("[yellow]No results found.[/yellow]")
                return

            # Output results
            if output_json:
                output = {
                    "query": text,
                    "collection": collection_name,
                    "count": len(results),
                    "results": [r.to_dict() for r in results],
                }
                console.print(json.dumps(output, indent=2))
            else:
                # Create rich table
                table = Table(
                    title=f"Search Results ({len(results)} found)",
                    show_header=True,
                    header_style="bold magenta",
                )
                table.add_column("Rank", style="dim", width=4)
                table.add_column("Score", width=8)
                table.add_column("ID", width=12)
                table.add_column("Title", width=40)
                table.add_column("Price", width=10)
                table.add_column("Image URL", width=30)

                for i, result in enumerate(results, 1):
                    # Truncate long fields
                    title = result.title[:37] + "..." if len(result.title or "") > 40 else result.title or ""
                    image_url = (
                        result.image_url[:27] + "..." if len(result.image_url or "") > 30 else result.image_url or ""
                    )
                    price = f"${result.price:.2f}" if result.price else "-"

                    table.add_row(
                        str(i),
                        f"{result.score:.4f}",
                        str(result.id)[:12],
                        title,
                        price,
                        image_url,
                    )

                console.print()
                console.print(table)

    except Exception as e:
        logger.error(f"Search failed: {e}")
        if output_json:
            console.print(json.dumps({"error": str(e)}))
        else:
            console.print(f"[red]Error: {e}[/red]")
        raise typer.Exit(code=1)
