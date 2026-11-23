import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import { env } from '../src/config/env.js'
import { closeDb, getDb } from '../src/db/connection.js'

interface LegacySnapshotRow {
  date: string
  hour: number
  minutes: number
  seconds: number
  tasas: string
  fetched_at: string
}

async function main() {
  const sqlite = await open({ filename: env.dbFile, driver: sqlite3.Database })
  const rows = await sqlite.all<LegacySnapshotRow[]>(
    `SELECT date, hour, minutes, seconds, tasas, fetched_at FROM tasas_snapshots`,
  )
  await sqlite.close()

  const db = await getDb()
  let migrated = 0

  for (const row of rows) {
    await db.query(
      `INSERT INTO tasas_snapshots (date, hour, minutes, seconds, tasas, fetched_at)
       VALUES ($1, $2, $3, $4, $5, $6)
       ON CONFLICT (date, hour) DO UPDATE SET
         minutes = EXCLUDED.minutes,
         seconds = EXCLUDED.seconds,
         tasas = EXCLUDED.tasas,
         fetched_at = EXCLUDED.fetched_at`,
      [
        row.date,
        row.hour,
        row.minutes,
        row.seconds,
        JSON.parse(row.tasas),
        row.fetched_at,
      ],
    )
    migrated += 1
  }

  await closeDb()
  console.log(`Migrated ${migrated} snapshot(s) from ${env.dbFile}`)
}

main().catch((err) => {
  console.error('Migration failed:', err)
  process.exit(1)
})
