"""
Milvus vector database implementation.

Uses pymilvus for connection and operations.
"""

import logging
from typing import List, Optional

from pymilvus import (
    Collection,
    CollectionSchema,
    DataType,
    FieldSchema,
    MilvusClient,
    connections,
    utility,
)

from oraken.config import get_settings
from oraken.db.base import Product, SearchResult, VectorDB

logger = logging.getLogger(__name__)


class MilvusDB(VectorDB):
    """
    Milvus implementation of the VectorDB interface.

    Uses COSINE similarity metric for vector search.
    """

    def __init__(self, collection_name: Optional[str] = None):
        """
        Initialize Milvus database client.

        Args:
            collection_name: Optional collection name override.
        """
        super().__init__(collection_name)
        self._collection: Optional[Collection] = None
        self._alias = "default"

    def connect(self) -> None:
        """Establish connection to Milvus server."""
        if self._connected:
            return

        def _connect():
            connections.connect(
                alias=self._alias,
                host=self.settings.milvus_host,
                port=self.settings.milvus_port,
            )
            logger.info(
                f"Connected to Milvus at {self.settings.milvus_host}:{self.settings.milvus_port}"
            )

        self._retry_with_backoff("Milvus connection", _connect)
        self._connected = True

    def disconnect(self) -> None:
        """Close connection to Milvus server."""
        if self._connected:
            connections.disconnect(self._alias)
            self._connected = False
            self._collection = None
            logger.info("Disconnected from Milvus")

    def _get_schema(self) -> CollectionSchema:
        """Create collection schema for products."""
        fields = [
            FieldSchema(
                name="id",
                dtype=DataType.VARCHAR,
                is_primary=True,
                max_length=128,
            ),
            FieldSchema(
                name="embedding",
                dtype=DataType.FLOAT_VECTOR,
                dim=self.settings.embedding_dim,
            ),
            FieldSchema(
                name="title",
                dtype=DataType.VARCHAR,
                max_length=512,
            ),
            FieldSchema(
                name="description",
                dtype=DataType.VARCHAR,
                max_length=4096,
            ),
            FieldSchema(
                name="price",
                dtype=DataType.FLOAT,
            ),
            FieldSchema(
                name="image_url",
                dtype=DataType.VARCHAR,
                max_length=1024,
            ),
        ]
        return CollectionSchema(
            fields=fields,
            description="Product embeddings for semantic search",
        )

    def init_collection(self) -> None:
        """Create collection if it doesn't exist with index."""
        if not self._connected:
            self.connect()

        if utility.has_collection(self.collection_name, using=self._alias):
            logger.info(f"Collection '{self.collection_name}' already exists")
            self._collection = Collection(self.collection_name, using=self._alias)
            return

        logger.info(f"Creating collection '{self.collection_name}'")
        schema = self._get_schema()
        self._collection = Collection(
            name=self.collection_name,
            schema=schema,
            using=self._alias,
        )

        # Create index for vector field
        index_params = {
            "metric_type": "COSINE",
            "index_type": "IVF_FLAT",
            "params": {"nlist": 128},
        }
        self._collection.create_index(
            field_name="embedding",
            index_params=index_params,
        )
        logger.info(f"Created index on 'embedding' field with COSINE metric")

    def collection_exists(self) -> bool:
        """Check if collection exists."""
        if not self._connected:
            self.connect()
        return utility.has_collection(self.collection_name, using=self._alias)

    def _get_collection(self) -> Collection:
        """Get or load the collection."""
        if self._collection is None:
            if not self.collection_exists():
                raise ValueError(
                    f"Collection '{self.collection_name}' does not exist. "
                    "Run 'oraken init-db' first."
                )
            self._collection = Collection(self.collection_name, using=self._alias)
        return self._collection

    def insert_products(self, products: List[Product]) -> int:
        """
        Insert products into Milvus in batches.

        Args:
            products: List of products with embeddings.

        Returns:
            Number of products inserted.
        """
        if not products:
            return 0

        collection = self._get_collection()

        # Prepare data for insertion
        data = [
            {
                "id": p.id,
                "embedding": p.embedding,
                "title": p.title[:512] if p.title else "",
                "description": (p.description or "")[:4096],
                "price": p.price or 0.0,
                "image_url": (p.image_url or "")[:1024],
            }
            for p in products
        ]

        def _insert():
            result = collection.insert(data)
            collection.flush()
            return result

        result = self._retry_with_backoff("Milvus insert", _insert)
        return result.insert_count

    def search(self, query_embedding: List[float], top_k: int = 10) -> List[SearchResult]:
        """
        Search for similar products using COSINE similarity.

        Args:
            query_embedding: Query vector.
            top_k: Number of results to return.

        Returns:
            List of search results with similarity scores.
        """
        collection = self._get_collection()

        # Load collection into memory for search
        collection.load()

        search_params = {
            "metric_type": "COSINE",
            "params": {"nprobe": 16},
        }

        results = collection.search(
            data=[query_embedding],
            anns_field="embedding",
            param=search_params,
            limit=top_k,
            output_fields=["id", "title", "description", "price", "image_url"],
        )

        search_results = []
        for hits in results:
            for hit in hits:
                search_results.append(
                    SearchResult(
                        id=hit.entity.get("id"),
                        title=hit.entity.get("title"),
                        description=hit.entity.get("description"),
                        price=hit.entity.get("price", 0.0),
                        image_url=hit.entity.get("image_url"),
                        score=hit.score,
                    )
                )

        return search_results

    def get_collection_stats(self) -> dict:
        """Get collection statistics."""
        if not self.collection_exists():
            return {"exists": False, "count": 0}

        collection = self._get_collection()
        collection.flush()

        return {
            "exists": True,
            "name": self.collection_name,
            "count": collection.num_entities,
            "index": "IVF_FLAT",
            "metric": "COSINE",
        }
