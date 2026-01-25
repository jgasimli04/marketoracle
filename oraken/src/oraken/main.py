"""
Main entry point for the Oraken CLI.

Registers all commands and configures the Typer application.
"""

import logging
import sys
from typing import Optional

import typer
from rich.console import Console

from oraken import __version__
from oraken.config import get_settings
from oraken.commands.config import config_cmd
from oraken.commands.ingest import ingest_cmd
from oraken.commands.init_db import init_db_cmd
from oraken.commands.search import search_cmd

# Configure logging
def setup_logging() -> None:
    """Configure logging based on settings."""
    settings = get_settings()
    logging.basicConfig(
        level=getattr(logging, settings.log_level),
        format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
    )


# Create the main Typer app
app = typer.Typer(
    name="oraken",
    help="CLI tool for product CSV ingestion with vector embeddings and semantic search.",
    add_completion=False,
    no_args_is_help=True,
    rich_markup_mode="rich",
)

console = Console()


def version_callback(value: bool) -> None:
    """Print version and exit."""
    if value:
        console.print(f"[bold blue]Oraken[/bold blue] version {__version__}")
        raise typer.Exit()


@app.callback()
def main(
    version: Optional[bool] = typer.Option(
        None,
        "--version",
        "-v",
        help="Show version and exit.",
        callback=version_callback,
        is_eager=True,
    ),
) -> None:
    """
    Oraken - Vector search CLI for product data.

    Ingest product CSV files, generate embeddings, and perform semantic search
    using Milvus or PostgreSQL+pgvector backends.
    """
    setup_logging()


# Register commands
app.command(name="init-db", help="Initialize database collection/table.")(init_db_cmd)
app.command(name="ingest", help="Ingest products from CSV file.")(ingest_cmd)
app.command(name="search", help="Search for similar products.")(search_cmd)
app.command(name="config", help="Display current configuration.")(config_cmd)


if __name__ == "__main__":
    app()
