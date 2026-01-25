"""
Configuration management using pydantic-settings.

Loads settings from environment variables and .env file with validation.
"""

from enum import Enum
from functools import lru_cache
from pathlib import Path
from typing import Optional

from pydantic import Field, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class DBType(str, Enum):
    """Supported database backends for vector storage."""
    MILVUS = "milvus"
    POSTGRES = "postgres"


class Settings(BaseSettings):
    """
    Application settings loaded from environment variables and .env file.

    All settings can be overridden via environment variables or .env file.
    """

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )

    # Database selection
    db_type: DBType = Field(
        default=DBType.MILVUS,
        description="Database backend: milvus or postgres"
    )

    # Embedding configuration
    embedding_model: str = Field(
        default="all-MiniLM-L6-v2",
        description="Sentence-transformers model name"
    )
    embedding_dim: int = Field(
        default=384,
        description="Embedding vector dimension"
    )

    # Milvus configuration
    milvus_host: str = Field(default="localhost", description="Milvus server host")
    milvus_port: int = Field(default=19530, description="Milvus server port")
    milvus_collection: str = Field(default="products", description="Default collection name")

    # PostgreSQL configuration
    postgres_host: str = Field(default="localhost", description="PostgreSQL server host")
    postgres_port: int = Field(default=5432, description="PostgreSQL server port")
    postgres_user: str = Field(default="postgres", description="PostgreSQL username")
    postgres_password: str = Field(default="postgres", description="PostgreSQL password")
    postgres_db: str = Field(default="oraken", description="PostgreSQL database name")

    # Processing settings
    batch_size: int = Field(default=500, description="Batch size for inserts")

    # Logging
    log_level: str = Field(default="INFO", description="Logging level")

    # Retry settings
    max_retries: int = Field(default=3, description="Maximum connection retries")
    retry_backoff: float = Field(default=2.0, description="Backoff multiplier for retries")

    @field_validator("log_level")
    @classmethod
    def validate_log_level(cls, v: str) -> str:
        """Validate log level is a valid Python logging level."""
        valid_levels = {"DEBUG", "INFO", "WARNING", "ERROR", "CRITICAL"}
        upper_v = v.upper()
        if upper_v not in valid_levels:
            raise ValueError(f"Invalid log level: {v}. Must be one of {valid_levels}")
        return upper_v

    @field_validator("embedding_dim")
    @classmethod
    def validate_embedding_dim(cls, v: int) -> int:
        """Validate embedding dimension is positive."""
        if v <= 0:
            raise ValueError("Embedding dimension must be positive")
        return v

    @property
    def milvus_uri(self) -> str:
        """Get Milvus connection URI."""
        return f"http://{self.milvus_host}:{self.milvus_port}"

    @property
    def postgres_dsn(self) -> str:
        """Get PostgreSQL connection DSN."""
        return (
            f"postgresql+psycopg://{self.postgres_user}:{self.postgres_password}"
            f"@{self.postgres_host}:{self.postgres_port}/{self.postgres_db}"
        )

    def get_collection_name(self, override: Optional[str] = None) -> str:
        """Get collection/table name with optional override."""
        return override or self.milvus_collection


@lru_cache
def get_settings() -> Settings:
    """
    Get cached settings instance.

    Settings are loaded once and cached for the lifetime of the application.
    """
    return Settings()


def reload_settings() -> Settings:
    """
    Reload settings, clearing the cache.

    Use this if .env file has been modified during runtime.
    """
    get_settings.cache_clear()
    return get_settings()
