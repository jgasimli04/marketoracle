"""
PostgreSQL with pgvector database implementation.

Uses SQLAlchemy with psycopg for connection and pgvector for vector operations.
"""

import logging
from typing import List, Optional

from pgvector.sqlalchemy import Vector
from sqlalchemy import (
    Column,
    MetaData,
    Numeric,
    Table,
    Text,
    create_engine,
    func,
    inspect,
    text,
)
from sqlalchemy.orm import Session, sessionmaker

from oraken.config import get_settings
from oraken.db.base import Product, SearchResult, VectorDB

logger = logging.getLogger(__name__)


class PostgresDB(VectorDB):
    """
    PostgreSQL + pgvector implementation of the VectorDB interface.

    Uses COSINE distance for vector search.
    """

    def __init__(self, collection_name: Optional[str] = None):
        """
        Initialize PostgreSQL database client.

        Args:
            collection_name: Optional table name override (default: products).
        """
        super().__init__(collection_name or "products")
        self._engine = None
        self._session_factory = None
        self._metadata = MetaData()
        self._table: Optional[Table] = None

    def _get_table(self) -> Table:
        """Get or create the table definition."""
        if self._table is None:
            self._table = Table(
                self.collection_name,
                self._metadata,
                Column("id", Text, primary_key=True),
                Column("title", Text, nullable=False),
                Column("description", Text),
                Column("price", Numeric(10, 2), default=0.0),
                Column("image_url", Text),
                Column("embedding", Vector(self.settings.embedding_dim)),
            )
        return self._table

    def connect(self) -> None:
        """Establish connection to PostgreSQL server."""
        if self._connected:
            return

        def _connect():
            self._engine = create_engine(
                self.settings.postgres_dsn,
                pool_size=5,
                max_overflow=10,
                pool_pre_ping=True,
            )
            # Test connection
            with self._engine.connect() as conn:
                conn.execute(text("SELECT 1"))
            self._session_factory = sessionmaker(bind=self._engine)
            logger.info(
                f"Connected to PostgreSQL at {self.settings.postgres_host}:{self.settings.postgres_port}"
            )

        self._retry_with_backoff("PostgreSQL connection", _connect)
        self._connected = True

    def disconnect(self) -> None:
        """Close connection to PostgreSQL server."""
        if self._engine:
            self._engine.dispose()
            self._engine = None
            self._session_factory = None
            self._connected = False
            logger.info("Disconnected from PostgreSQL")

    def init_collection(self) -> None:
        """Create table and index if they don't exist."""
        if not self._connected:
            self.connect()

        with self._engine.connect() as conn:
            # Ensure pgvector extension is enabled
            conn.execute(text("CREATE EXTENSION IF NOT EXISTS vector"))
            conn.commit()

        # Create table
        table = self._get_table()
        table.create(self._engine, checkfirst=True)
        logger.info(f"Table '{self.collection_name}' created or already exists")

        # Create vector index for COSINE similarity
        index_name = f"idx_{self.collection_name}_embedding"
        with self._engine.connect() as conn:
            # Check if index exists
            result = conn.execute(
                text(
                    "SELECT 1 FROM pg_indexes WHERE indexname = :index_name"
                ),
                {"index_name": index_name},
            )
            if result.fetchone() is None:
                # Create IVFFlat index for cosine distance
                conn.execute(
                    text(
                        f"CREATE INDEX {index_name} ON {self.collection_name} "
                        f"USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100)"
                    )
                )
                conn.commit()
                logger.info(f"Created IVFFlat index '{index_name}' with cosine distance")
            else:
                logger.info(f"Index '{index_name}' already exists")

    def collection_exists(self) -> bool:
        """Check if table exists."""
        if not self._connected:
            self.connect()
        inspector = inspect(self._engine)
        return inspector.has_table(self.collection_name)

    def insert_products(self, products: List[Product]) -> int:
        """
        Insert products into PostgreSQL using upsert.

        Args:
            products: List of products with embeddings.

        Returns:
            Number of products inserted/updated.
        """
        if not products:
            return 0

        if not self._connected:
            self.connect()

        table = self._get_table()

        # Prepare data for insertion
        data = [
            {
                "id": p.id,
                "title": p.title,
                "description": p.description,
                "price": p.price or 0.0,
                "image_url": p.image_url,
                "embedding": p.embedding,
            }
            for p in products
        ]

        def _insert():
            with self._engine.connect() as conn:
                # Use PostgreSQL upsert (ON CONFLICT)
                for row in data:
                    conn.execute(
                        text(
                            f"""
                            INSERT INTO {self.collection_name}
                            (id, title, description, price, image_url, embedding)
                            VALUES (:id, :title, :description, :price, :image_url, :embedding)
                            ON CONFLICT (id) DO UPDATE SET
                                title = EXCLUDED.title,
                                description = EXCLUDED.description,
                                price = EXCLUDED.price,
                                image_url = EXCLUDED.image_url,
                                embedding = EXCLUDED.embedding
                            """
                        ),
                        row,
                    )
                conn.commit()
            return len(data)

        return self._retry_with_backoff("PostgreSQL insert", _insert)

    def search(self, query_embedding: List[float], top_k: int = 10) -> List[SearchResult]:
        """
        Search for similar products using COSINE distance.

        Args:
            query_embedding: Query vector.
            top_k: Number of results to return.

        Returns:
            List of search results with similarity scores.
        """
        if not self._connected:
            self.connect()

        # Convert embedding to string format for pgvector
        embedding_str = "[" + ",".join(str(x) for x in query_embedding) + "]"

        with self._engine.connect() as conn:
            # Use cosine distance (1 - cosine_similarity)
            # Lower distance = more similar
            result = conn.execute(
                text(
                    f"""
                    SELECT
                        id,
                        title,
                        description,
                        price,
                        image_url,
                        1 - (embedding <=> :embedding::vector) as score
                    FROM {self.collection_name}
                    ORDER BY embedding <=> :embedding::vector
                    LIMIT :top_k
                    """
                ),
                {"embedding": embedding_str, "top_k": top_k},
            )

            search_results = []
            for row in result:
                search_results.append(
                    SearchResult(
                        id=row.id,
                        title=row.title,
                        description=row.description,
                        price=float(row.price) if row.price else 0.0,
                        image_url=row.image_url,
                        score=float(row.score) if row.score else 0.0,
                    )
                )

        return search_results

    def get_collection_stats(self) -> dict:
        """Get table statistics."""
        if not self.collection_exists():
            return {"exists": False, "count": 0}

        with self._engine.connect() as conn:
            result = conn.execute(
                text(f"SELECT COUNT(*) FROM {self.collection_name}")
            )
            count = result.scalar()

        return {
            "exists": True,
            "name": self.collection_name,
            "count": count,
            "index": "IVFFlat",
            "metric": "COSINE",
        }
