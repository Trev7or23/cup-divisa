import sqlite3 from 'sqlite3'
import { open, Database } from 'sqlite'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { env } from '../config/env.js'
import { initSchema } from './schema.js'

let db: Database | null = null

export async function getDb(): Promise<Database> {
  if (db) return db

  await mkdir(path.dirname(env.dbFile), { recursive: true })

  db = await open({ filename: env.dbFile, driver: sqlite3.Database })
  await db.exec(`PRAGMA journal_mode = WAL;`)
  await initSchema(db)

  return db
}
