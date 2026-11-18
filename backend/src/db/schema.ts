import type { Database } from 'sqlite'

export async function initSchema(db: Database): Promise<void> {
  await db.exec(`
    CREATE TABLE IF NOT EXISTS tasas_snapshots (
      id         INTEGER PRIMARY KEY AUTOINCREMENT,
      date       TEXT    NOT NULL,
      hour       INTEGER NOT NULL,
      minutes    INTEGER NOT NULL,
      seconds    INTEGER NOT NULL,
      tasas      TEXT    NOT NULL,
      fetched_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(date, hour)
    );

    CREATE INDEX IF NOT EXISTS idx_tasas_snapshot_order
      ON tasas_snapshots(date DESC, hour DESC, minutes DESC, seconds DESC);
  `)
}
