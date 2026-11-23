import { Pool } from 'pg'
import { env } from '../config/env.js'
import { initSchema } from './schema.js'

let pool: Pool | null = null

export async function getDb(): Promise<Pool> {
  if (pool) return pool

  pool = new Pool({
    connectionString: env.databaseUrl,
    ...(env.databaseSsl ? { ssl: { rejectUnauthorized: false } } : {}),
  })

  await initSchema(pool)
  return pool
}

export async function closeDb(): Promise<void> {
  if (!pool) return
  await pool.end()
  pool = null
}
