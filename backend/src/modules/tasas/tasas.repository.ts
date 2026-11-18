import { getDb } from '../../db/connection.js'
import type { SnapshotRow, TasasResponse } from './tasas.types.js'

export const tasasRepository = {
  async insertSnapshot(s: TasasResponse): Promise<number> {
    const db = await getDb()
    const result = await db.run(
      `INSERT OR IGNORE INTO tasas_snapshots (date, hour, minutes, seconds, tasas)
       VALUES (?, ?, ?, ?, ?)
       ON CONFLICT(date,hour) DO UPDATE SET
         minutes = excluded.minutes,
         seconds = excluded.seconds,
         tasas = excluded.tasas,
         fetched_at = CURRENT_TIMESTAMP
      `,
      [s.date, s.hour, s.minutes, s.seconds, JSON.stringify(s.tasas)],
    )
    return result.changes ?? 0
  },

  async findLatest(): Promise<SnapshotRow | undefined> {
    const db = await getDb()
    return db.get<SnapshotRow>(
      `SELECT * FROM tasas_snapshots
       ORDER BY date DESC, hour DESC, minutes DESC, seconds DESC
       LIMIT 1`,
    )
  },

  async findHistory(limit: number): Promise<SnapshotRow[]> {
    const db = await getDb()
    return db.all<SnapshotRow[]>(
      `SELECT * FROM tasas_snapshots
       ORDER BY date DESC, hour DESC, minutes DESC, seconds DESC
       LIMIT ?`,
      [limit],
    )
  },
}
