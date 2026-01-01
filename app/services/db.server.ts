/**
 * Database Service
 * PostgreSQL connection pool with typed query support
 * Author: Javad Gasimli
 */

import { Pool, PoolClient, QueryResult, QueryResultRow } from "pg";

// ================================================
// CONNECTION POOL
// ================================================

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Handle pool errors
pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

// ================================================
// TYPED QUERY INTERFACE
// ================================================

export interface QueryOptions {
  name?: string; // For prepared statements
  rowMode?: "array";
}

export interface DatabaseClient {
  query<T extends QueryResultRow = QueryResultRow>(
    text: string,
    values?: unknown[]
  ): Promise<QueryResult<T>>;

  getClient(): Promise<PoolClient>;

  transaction<T>(
    callback: (client: PoolClient) => Promise<T>
  ): Promise<T>;
}

// ================================================
// DATABASE SERVICE IMPLEMENTATION
// ================================================

export const db: DatabaseClient = {
  /**
   * Execute a query with automatic connection management
   */
  async query<T extends QueryResultRow = QueryResultRow>(
    text: string,
    values?: unknown[]
  ): Promise<QueryResult<T>> {
    const start = Date.now();

    try {
      const result = await pool.query<T>(text, values);
      const duration = Date.now() - start;

      // Log slow queries (> 100ms)
      if (duration > 100) {
        console.warn(`Slow query (${duration}ms):`, text.substring(0, 100));
      }

      return result;
    } catch (error) {
      console.error("Database query error:", error);
      throw error;
    }
  },

  /**
   * Get a client for multiple queries in same connection
   */
  async getClient(): Promise<PoolClient> {
    return pool.connect();
  },

  /**
   * Execute multiple queries in a transaction
   */
  async transaction<T>(
    callback: (client: PoolClient) => Promise<T>
  ): Promise<T> {
    const client = await pool.connect();

    try {
      await client.query("BEGIN");
      const result = await callback(client);
      await client.query("COMMIT");
      return result;
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }
  },
};

// ================================================
// TYPED QUERY HELPERS
// ================================================

/**
 * Insert row and return inserted data
 */
export async function insertReturning<T extends QueryResultRow>(
  table: string,
  data: Record<string, unknown>,
  returning: string[] = ["*"]
): Promise<T | null> {
  const keys = Object.keys(data);
  const values = Object.values(data);
  const placeholders = keys.map((_, i) => `$${i + 1}`).join(", ");

  const query = `
    INSERT INTO ${table} (${keys.join(", ")})
    VALUES (${placeholders})
    RETURNING ${returning.join(", ")}
  `;

  const result = await db.query<T>(query, values);
  return result.rows[0] || null;
}

/**
 * Upsert (insert or update on conflict)
 */
export async function upsert<T extends QueryResultRow>(
  table: string,
  data: Record<string, unknown>,
  conflictColumns: string[],
  updateColumns: string[],
  returning: string[] = ["*"]
): Promise<T | null> {
  const keys = Object.keys(data);
  const values = Object.values(data);
  const placeholders = keys.map((_, i) => `$${i + 1}`).join(", ");

  const updateSet = updateColumns
    .map((col) => `${col} = EXCLUDED.${col}`)
    .join(", ");

  const query = `
    INSERT INTO ${table} (${keys.join(", ")})
    VALUES (${placeholders})
    ON CONFLICT (${conflictColumns.join(", ")})
    DO UPDATE SET ${updateSet}
    RETURNING ${returning.join(", ")}
  `;

  const result = await db.query<T>(query, values);
  return result.rows[0] || null;
}

// ================================================
// HEALTH CHECK
// ================================================

export async function checkDatabaseHealth(): Promise<{
  connected: boolean;
  latencyMs: number;
  poolSize: number;
  idleConnections: number;
}> {
  const start = Date.now();

  try {
    await db.query("SELECT 1");

    return {
      connected: true,
      latencyMs: Date.now() - start,
      poolSize: pool.totalCount,
      idleConnections: pool.idleCount,
    };
  } catch (error) {
    return {
      connected: false,
      latencyMs: -1,
      poolSize: pool.totalCount,
      idleConnections: pool.idleCount,
    };
  }
}

// ================================================
// GRACEFUL SHUTDOWN
// ================================================

export async function closePool(): Promise<void> {
  await pool.end();
}

// Handle process shutdown
process.on("SIGINT", async () => {
  console.log("Closing database pool...");
  await closePool();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  console.log("Closing database pool...");
  await closePool();
  process.exit(0);
});
