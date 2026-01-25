"""
Database initialization command.

Creates collection/table if it doesn't exist.
"""

import logging
from typing import Optional

import typer
from rich.console import Console
from rich.panel import Panel

from oraken.config import DBType, get_settings
from oraken.db.milvus import MilvusDB
from oraken.db.postgres import PostgresDB

logger = logging.getLogger(__name__)
console = Console()


def init_db_cmd(
    db_type: Optional[DBType] = typer.Option(
        None,
        "--db-type",
        "-d",
        help="Database type (milvus or postgres). Overrides DB_TYPE env var.",
    ),
    collection: Optional[str] = typer.Option(
        None,
        "--collection",
        "-c",
        help="Collection/table name to create.",
    ),
) -> None:
    """
    Initialize the database by creating the collection/table if it doesn't exist.

    This command sets up the necessary schema and indexes for vector storage.
    """
    settings = get_settings()
    effective_db_type = db_type or settings.db_type
    collection_name = collection or settings.milvus_collection

    console.print(
        Panel(
            f"[bold blue]Initializing {effective_db_type.value} database[/bold blue]\n"
            f"Collection: {collection_name}",
            title="Oraken Init",
        )
    )

    try:
        if effective_db_type == DBType.MILVUS:
            db = MilvusDB(collection_name)
        else:
            db = PostgresDB(collection_name)

        with db:
            if db.collection_exists():
                stats = db.get_collection_stats()
                console.print(
                    f"[yellow]Collection '{collection_name}' already exists "
                    f"with {stats.get('count', 0)} records.[/yellow]"
                )
            else:
                db.init_collection()
                console.print(
                    f"[green]Successfully created collection '{collection_name}'[/green]"
                )

            # Show collection info
            stats = db.get_collection_stats()
            console.print(f"\n[bold]Collection Stats:[/bold]")
            console.print(f"  Name: {stats.get('name')}")
            console.print(f"  Records: {stats.get('count', 0)}")
            console.print(f"  Index: {stats.get('index')}")
            console.print(f"  Metric: {stats.get('metric')}")

    except Exception as e:
        logger.error(f"Failed to initialize database: {e}")
        console.print(f"[red]Error: {e}[/red]")
        raise typer.Exit(code=1)
