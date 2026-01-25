"""
Configuration display command.

Shows current configuration values loaded from environment and .env file.
"""

import logging
from typing import Optional

import typer
from rich.console import Console
from rich.panel import Panel
from rich.table import Table

from oraken.config import get_settings, DBType

logger = logging.getLogger(__name__)
console = Console()


def config_cmd(
    show_secrets: bool = typer.Option(
        False,
        "--show-secrets",
        "-s",
        help="Show sensitive values like passwords (masked by default).",
    ),
) -> None:
    """
    Display current configuration values.

    Shows all settings loaded from environment variables and .env file.
    Sensitive values are masked unless --show-secrets is specified.
    """
    settings = get_settings()

    console.print(
        Panel(
            "[bold blue]Oraken Configuration[/bold blue]\n"
            "Values loaded from environment and .env file",
            title="Config",
        )
    )

    # Create configuration table
    table = Table(show_header=True, header_style="bold cyan")
    table.add_column("Setting", style="dim", width=25)
    table.add_column("Value", width=50)
    table.add_column("Source", width=10)

    def mask_value(value: str) -> str:
        """Mask sensitive value if show_secrets is False."""
        if show_secrets:
            return value
        if len(value) <= 4:
            return "*" * len(value)
        return value[:2] + "*" * (len(value) - 4) + value[-2:]

    # Database settings
    table.add_section()
    table.add_row("[bold]Database[/bold]", "", "")
    table.add_row("DB_TYPE", settings.db_type.value, "env")

    # Embedding settings
    table.add_section()
    table.add_row("[bold]Embedding[/bold]", "", "")
    table.add_row("EMBEDDING_MODEL", settings.embedding_model, "env")
    table.add_row("EMBEDDING_DIM", str(settings.embedding_dim), "env")

    # Milvus settings
    table.add_section()
    table.add_row("[bold]Milvus[/bold]", "", "")
    table.add_row("MILVUS_HOST", settings.milvus_host, "env")
    table.add_row("MILVUS_PORT", str(settings.milvus_port), "env")
    table.add_row("MILVUS_COLLECTION", settings.milvus_collection, "env")
    table.add_row("MILVUS_URI", settings.milvus_uri, "computed")

    # PostgreSQL settings
    table.add_section()
    table.add_row("[bold]PostgreSQL[/bold]", "", "")
    table.add_row("POSTGRES_HOST", settings.postgres_host, "env")
    table.add_row("POSTGRES_PORT", str(settings.postgres_port), "env")
    table.add_row("POSTGRES_USER", settings.postgres_user, "env")
    table.add_row(
        "POSTGRES_PASSWORD",
        mask_value(settings.postgres_password),
        "env"
    )
    table.add_row("POSTGRES_DB", settings.postgres_db, "env")
    table.add_row(
        "POSTGRES_DSN",
        settings.postgres_dsn if show_secrets else mask_value(settings.postgres_dsn),
        "computed"
    )

    # Processing settings
    table.add_section()
    table.add_row("[bold]Processing[/bold]", "", "")
    table.add_row("BATCH_SIZE", str(settings.batch_size), "env")

    # Logging settings
    table.add_section()
    table.add_row("[bold]Logging[/bold]", "", "")
    table.add_row("LOG_LEVEL", settings.log_level, "env")

    # Retry settings
    table.add_section()
    table.add_row("[bold]Retry[/bold]", "", "")
    table.add_row("MAX_RETRIES", str(settings.max_retries), "env")
    table.add_row("RETRY_BACKOFF", str(settings.retry_backoff), "env")

    console.print()
    console.print(table)
    console.print()

    # Show active database info
    if settings.db_type == DBType.MILVUS:
        console.print(
            f"[green]Active database: Milvus at {settings.milvus_uri}[/green]"
        )
    else:
        console.print(
            f"[green]Active database: PostgreSQL at "
            f"{settings.postgres_host}:{settings.postgres_port}/{settings.postgres_db}[/green]"
        )

    console.print(
        "\n[dim]Tip: Use --show-secrets to reveal masked values[/dim]"
    )
