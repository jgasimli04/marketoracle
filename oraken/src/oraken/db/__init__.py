"""
Database abstraction layer for vector storage backends.

Supports Milvus and PostgreSQL+pgvector.
"""

from oraken.db.base import VectorDB, Product, SearchResult
from oraken.db.milvus import MilvusDB
from oraken.db.postgres import PostgresDB

__all__ = ["VectorDB", "Product", "SearchResult", "MilvusDB", "PostgresDB"]
