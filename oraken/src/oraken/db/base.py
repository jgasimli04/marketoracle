"""
Abstract base class for vector database backends.

Defines the interface that all database implementations must follow.
"""

import logging
import time
from abc import ABC, abstractmethod
from dataclasses import dataclass, field
from typing import List, Optional

from oraken.config import get_settings

logger = logging.getLogger(__name__)


@dataclass
class Product:
    """Product data model for storage and retrieval."""

    id: str
    title: str
    description: Optional[str] = None
    price: float = 0.0
    image_url: Optional[str] = None
    embedding: List[float] = field(default_factory=list)

    def to_dict(self) -> dict:
        """Convert product to dictionary."""
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "price": self.price,
            "image_url": self.image_url,
        }


@dataclass
class SearchResult:
    """Search result with similarity score."""

    id: str
    title: str
    description: Optional[str]
    price: float
    image_url: Optional[str]
    score: float

    def to_dict(self) -> dict:
        """Convert search result to dictionary."""
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "price": self.price,
            "image_url": self.image_url,
            "score": round(self.score, 4),
        }


class VectorDB(ABC):
    """
    Abstract base class for vector database backends.

    Provides common retry logic and defines the interface for implementations.
    """

    def __init__(self, collection_name: Optional[str] = None):
        """
        Initialize the database client.

        Args:
            collection_name: Optional collection/table name override.
        """
        self.settings = get_settings()
        self.collection_name = collection_name or self.settings.milvus_collection
        self._connected = False

    def _retry_with_backoff(self, operation: str, func, *args, **kwargs):
        """
        Execute a function with retry logic and exponential backoff.

        Args:
            operation: Description of the operation for logging.
            func: Function to execute.
            *args: Positional arguments for the function.
            **kwargs: Keyword arguments for the function.

        Returns:
            Result of the function call.

        Raises:
            Exception: If all retries fail.
        """
        last_exception = None
        backoff = 1.0

        for attempt in range(1, self.settings.max_retries + 1):
            try:
                return func(*args, **kwargs)
            except Exception as e:
                last_exception = e
                if attempt < self.settings.max_retries:
                    logger.warning(
                        f"{operation} failed (attempt {attempt}/{self.settings.max_retries}): {e}. "
                        f"Retrying in {backoff:.1f}s..."
                    )
                    time.sleep(backoff)
                    backoff *= self.settings.retry_backoff
                else:
                    logger.error(f"{operation} failed after {self.settings.max_retries} attempts: {e}")

        raise last_exception  # type: ignore

    @abstractmethod
    def connect(self) -> None:
        """Establish connection to the database."""
        pass

    @abstractmethod
    def disconnect(self) -> None:
        """Close connection to the database."""
        pass

    @abstractmethod
    def init_collection(self) -> None:
        """Create collection/table if it doesn't exist."""
        pass

    @abstractmethod
    def insert_products(self, products: List[Product]) -> int:
        """
        Insert products into the database.

        Args:
            products: List of products with embeddings.

        Returns:
            Number of products inserted.
        """
        pass

    @abstractmethod
    def search(self, query_embedding: List[float], top_k: int = 10) -> List[SearchResult]:
        """
        Search for similar products.

        Args:
            query_embedding: Query vector.
            top_k: Number of results to return.

        Returns:
            List of search results with scores.
        """
        pass

    @abstractmethod
    def collection_exists(self) -> bool:
        """Check if the collection/table exists."""
        pass

    @abstractmethod
    def get_collection_stats(self) -> dict:
        """Get collection statistics (count, etc.)."""
        pass

    @property
    def is_connected(self) -> bool:
        """Check if connected to the database."""
        return self._connected

    def __enter__(self):
        """Context manager entry."""
        self.connect()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        """Context manager exit."""
        self.disconnect()
