-- Initialize pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Grant usage permissions
GRANT ALL ON SCHEMA public TO postgres;
