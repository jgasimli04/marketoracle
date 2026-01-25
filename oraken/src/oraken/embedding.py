"""
Embedding generation using sentence-transformers.

Provides a singleton embedding model for generating text embeddings.
"""

import logging
from functools import lru_cache
from typing import List, Optional

import numpy as np
from sentence_transformers import SentenceTransformer

from oraken.config import get_settings

logger = logging.getLogger(__name__)


class EmbeddingService:
    """
    Service for generating text embeddings using sentence-transformers.

    Uses the model specified in settings (default: all-MiniLM-L6-v2).
    """

    def __init__(self, model_name: Optional[str] = None):
        """
        Initialize the embedding service.

        Args:
            model_name: Optional model name override. Uses settings default if not provided.
        """
        settings = get_settings()
        self.model_name = model_name or settings.embedding_model
        self.expected_dim = settings.embedding_dim
        self._model: Optional[SentenceTransformer] = None

    @property
    def model(self) -> SentenceTransformer:
        """Lazy-load the embedding model."""
        if self._model is None:
            logger.info(f"Loading embedding model: {self.model_name}")
            self._model = SentenceTransformer(self.model_name)

            # Validate dimension matches expected
            actual_dim = self._model.get_sentence_embedding_dimension()
            if actual_dim != self.expected_dim:
                logger.warning(
                    f"Model dimension ({actual_dim}) differs from expected ({self.expected_dim}). "
                    f"Update EMBEDDING_DIM in config."
                )
        return self._model

    def embed_text(self, text: str) -> List[float]:
        """
        Generate embedding for a single text string.

        Args:
            text: Input text to embed.

        Returns:
            List of floats representing the embedding vector.
        """
        embedding = self.model.encode(text, convert_to_numpy=True)
        return embedding.tolist()

    def embed_texts(self, texts: List[str], show_progress: bool = False) -> List[List[float]]:
        """
        Generate embeddings for multiple texts in batch.

        Args:
            texts: List of input texts to embed.
            show_progress: Whether to show progress bar.

        Returns:
            List of embedding vectors.
        """
        if not texts:
            return []

        embeddings = self.model.encode(
            texts,
            convert_to_numpy=True,
            show_progress_bar=show_progress,
            batch_size=32,
        )
        return embeddings.tolist()

    def format_product_text(self, title: str, description: Optional[str] = None) -> str:
        """
        Format product title and description for embedding.

        Args:
            title: Product title.
            description: Optional product description.

        Returns:
            Formatted text string for embedding.
        """
        if description:
            return f"Title: {title}\nDescription: {description}"
        return f"Title: {title}"

    @property
    def dimension(self) -> int:
        """Get the embedding dimension."""
        return self.model.get_sentence_embedding_dimension()


@lru_cache
def get_embedding_service() -> EmbeddingService:
    """
    Get cached embedding service instance.

    The service and model are loaded once and reused.
    """
    return EmbeddingService()
