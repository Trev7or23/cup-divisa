import { getDb } from '../../db/connection.js'
import type { SnapshotRow, TasasResponse } from './tasas.types.js'

export const tasasRepository = {
  async insertSnapshot(s: TasasResponse): Promise<number> {
    const db = await getDb()
    const result = await db.query(
      `INSERT INTO tasas_snapshots (date, hour, minutes, seconds, tasas)
       VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (date, hour) DO UPDATE SET
         minutes = EXCLUDED.minutes,
         seconds = EXCLUDED.seconds,
         tasas = EXCLUDED.tasas,
         fetched_at = now()`,
      [s.date, s.hour, s.minutes, s.seconds, s.tasas],
    )
    return result.rowCount ?? 0
  },

  async findLatest(): Promise<SnapshotRow | undefined> {
    const db = await getDb()
    const result = await db.query<SnapshotRow>(
      `SELECT * FROM tasas_snapshots
       ORDER BY date DESC, hour DESC, minutes DESC, seconds DESC
       LIMIT 1`,
    )
    return result.rows[0]
  },

  async findHistory(limit: number): Promise<SnapshotRow[]> {
    const db = await getDb()
    const result = await db.query<SnapshotRow>(
      `SELECT * FROM tasas_snapshots
       ORDER BY date DESC, hour DESC, minutes DESC, seconds DESC
       LIMIT $1`,
      [limit],
    )
    return result.rows
  },
}
