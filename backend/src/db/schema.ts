import type { Pool } from 'pg'

export async function initSchema(db: Pool): Promise<void> {
  await db.query(`
    CREATE TABLE IF NOT EXISTS tasas_snapshots (
      id         SERIAL PRIMARY KEY,
      date       TEXT        NOT NULL,
      hour       INTEGER     NOT NULL,
      minutes    INTEGER     NOT NULL,
      seconds    INTEGER     NOT NULL,
      tasas      JSONB       NOT NULL,
      fetched_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      UNIQUE(date, hour)
    );

    CREATE INDEX IF NOT EXISTS idx_tasas_snapshot_order
      ON tasas_snapshots(date DESC, hour DESC, minutes DESC, seconds DESC);
  `)
}
