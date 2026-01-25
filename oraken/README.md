# Oraken

CLI tool for product CSV ingestion with vector embeddings and semantic search. Supports Milvus and PostgreSQL+pgvector backends for agentic commerce / UCP compatibility.

## Project Structure

```
oraken/
├── pyproject.toml
├── .env.example
├── README.md
├── docker-compose.yml
├── init-pgvector.sql
└── src/
    └── oraken/
        ├── __init__.py
        ├── __main__.py
        ├── main.py
        ├── config.py
        ├── embedding.py
        ├── db/
        │   ├── __init__.py
        │   ├── base.py
        │   ├── milvus.py
        │   └── postgres.py
        └── commands/
            ├── __init__.py
            ├── init_db.py
            ├── ingest.py
            ├── search.py
            └── config.py
```

## Features

- **CSV Ingestion**: Read product data from CSV files with validation
- **Vector Embeddings**: Generate embeddings using sentence-transformers (all-MiniLM-L6-v2)
- **Dual Backend Support**: Store vectors in Milvus or PostgreSQL+pgvector
- **Semantic Search**: Find similar products using COSINE similarity
- **Batch Processing**: Efficient batch inserts with progress tracking
- **Connection Resilience**: Automatic retries with exponential backoff
- **Configuration**: Environment-based config with pydantic-settings validation

## Installation

### Prerequisites

- Python 3.10+
- Docker and Docker Compose (for database services)
- pip or uv package manager

### Install from source

```bash
# Clone or navigate to the oraken directory
cd oraken

# Create virtual environment (recommended)
python -m venv .venv
source .venv/bin/activate  # Linux/macOS
# or: .venv\Scripts\activate  # Windows

# Install in development mode
pip install -e .

# Or using uv
uv pip install -e .
```

### Verify installation

```bash
oraken --version
oraken --help
```

## Configuration

### Environment Variables

Copy `.env.example` to `.env` and adjust values:

```bash
cp .env.example .env
```

Key configuration options:

| Variable | Default | Description |
|----------|---------|-------------|
| `DB_TYPE` | `milvus` | Database backend: `milvus` or `postgres` |
| `EMBEDDING_MODEL` | `all-MiniLM-L6-v2` | Sentence-transformers model |
| `EMBEDDING_DIM` | `384` | Embedding vector dimension |
| `MILVUS_HOST` | `localhost` | Milvus server host |
| `MILVUS_PORT` | `19530` | Milvus server port |
| `POSTGRES_HOST` | `localhost` | PostgreSQL server host |
| `POSTGRES_PORT` | `5432` | PostgreSQL server port |
| `POSTGRES_USER` | `postgres` | PostgreSQL username |
| `POSTGRES_PASSWORD` | `postgres` | PostgreSQL password |
| `POSTGRES_DB` | `oraken` | PostgreSQL database name |
| `BATCH_SIZE` | `500` | Batch size for inserts |
| `LOG_LEVEL` | `INFO` | Logging level |

### View current configuration

```bash
oraken config
oraken config --show-secrets  # Show masked values
```

## Database Setup

### Start services with Docker Compose

The included `docker-compose.yml` provides Milvus and PostgreSQL services, both ARM-compatible for Apple Silicon:

```bash
# Start all services
docker-compose up -d

# Start only Milvus
docker-compose up -d milvus

# Start only PostgreSQL
docker-compose up -d postgres

# Check service status
docker-compose ps

# View logs
docker-compose logs -f milvus
docker-compose logs -f postgres

# Stop services
docker-compose down

# Stop and remove volumes (clean slate)
docker-compose down -v
```

### Initialize database

Create the collection/table before ingesting data:

```bash
# Initialize with default settings (uses DB_TYPE from .env)
oraken init-db

# Initialize Milvus collection
oraken init-db --db-type milvus --collection products

# Initialize PostgreSQL table
oraken init-db --db-type postgres --collection products
```

## Usage

### Ingest products from CSV

CSV file must have columns: `id`, `title` (required), and optionally: `description`, `price`, `image_url`

Example CSV:
```csv
id,title,description,price,image_url
prod-001,Wireless Headphones,Premium noise-canceling Bluetooth headphones,149.99,https://example.com/img/headphones.jpg
prod-002,USB-C Hub,7-in-1 USB-C adapter with HDMI and SD card reader,49.99,https://example.com/img/hub.jpg
```

```bash
# Ingest to default collection
oraken ingest --csv products.csv --collection products

# Ingest to Milvus
oraken ingest --csv products.csv --collection products --db-type milvus

# Ingest to PostgreSQL with custom batch size
oraken ingest --csv products.csv --collection products --db-type postgres --batch-size 100
```

### Search for products

```bash
# Basic search
oraken search --text "wireless audio device" --top-k 5

# Search specific collection
oraken search --text "laptop accessories" --collection electronics --top-k 10

# Search PostgreSQL backend
oraken search --text "bluetooth speaker" --db-type postgres --top-k 5

# Output as JSON (for piping to other tools)
oraken search --text "gaming keyboard" --json
```

### Example workflow

```bash
# 1. Start databases
docker-compose up -d

# 2. Initialize collection
oraken init-db --collection my_products

# 3. Ingest data
oraken ingest --csv data/products.csv --collection my_products

# 4. Search
oraken search --text "comfortable office chair" --collection my_products --top-k 5

# 5. Export results as JSON
oraken search --text "ergonomic desk" --collection my_products --json > results.json
```

## Running as module

You can also run Oraken as a Python module:

```bash
python -m oraken --help
python -m oraken ingest --csv products.csv --collection test
python -m oraken search --text "query" --top-k 5
```

## CSV Format

### Required columns
- `id`: Unique product identifier (string)
- `title`: Product title/name (string)

### Optional columns
- `description`: Product description (string) - used for embedding generation
- `price`: Product price (numeric)
- `image_url`: URL to product image (string)

### Embedding generation
Embeddings are generated from: `Title: {title}\nDescription: {description}`

Products without a description will be embedded with just: `Title: {title}`

Rows with missing or empty titles are skipped.

## Architecture

### Embedding Model
- Model: `sentence-transformers/all-MiniLM-L6-v2`
- Dimension: 384
- The model is loaded lazily on first use

### Milvus Backend
- Collection schema: id (VARCHAR, PK, max_length=128), embedding (FLOAT_VECTOR, dim=384), title (VARCHAR), description (VARCHAR), price (FLOAT), image_url (VARCHAR)
- Index: IVF_FLAT with 128 clusters (nlist=128)
- Metric: COSINE (returns cosine similarity directly; higher score = more similar)

### PostgreSQL Backend
- Table schema: id (TEXT, PK), title (TEXT), description (TEXT), price (NUMERIC), image_url (TEXT), embedding (VECTOR(384))
- Index: IVFFlat with 100 lists using `vector_cosine_ops`
- Metric: Cosine distance via `<=>` operator, converted to similarity as `1 - distance` for output

### Score Normalization
Both backends return a **similarity score** where higher values indicate greater similarity:
- Milvus returns cosine similarity natively (range: -1 to 1 for normalized vectors)
- PostgreSQL computes `1 - cosine_distance` to match Milvus semantics

This ensures consistent score interpretation across backends when switching via `--db-type`.

## Troubleshooting

### Connection refused to Milvus
```bash
# Check if Milvus is running
docker-compose ps
docker-compose logs milvus

# Ensure all dependencies are healthy
docker-compose up -d etcd minio
sleep 30
docker-compose up -d milvus
```

### PostgreSQL pgvector extension not found
```bash
# The init-pgvector.sql should run automatically, but if not:
docker-compose exec postgres psql -U postgres -d oraken -c "CREATE EXTENSION IF NOT EXISTS vector;"
```

### Embedding model download issues
The sentence-transformers model downloads on first use. Ensure internet connectivity or pre-download:
```python
from sentence_transformers import SentenceTransformer
model = SentenceTransformer('all-MiniLM-L6-v2')
```

### Apple Silicon compatibility
All Docker images in docker-compose.yml are ARM64 compatible. If you encounter issues:
```bash
# Force rebuild with platform specification
docker-compose build --no-cache
```

## Development

### Install dev dependencies
```bash
pip install -e ".[dev]"
```

### Run tests
```bash
pytest tests/
```

### Lint and format
```bash
ruff check src/
ruff format src/
mypy src/
```

## License

MIT License
