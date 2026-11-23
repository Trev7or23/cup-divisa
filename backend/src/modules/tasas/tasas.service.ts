import { tasasRepository } from './tasas.repository.js'
import type { Snapshot, SnapshotRow } from './tasas.types.js'

function toSnapshot(row: SnapshotRow): Snapshot {
  return {
    ...row,
    fetched_at:
      row.fetched_at instanceof Date
        ? row.fetched_at.toISOString()
        : row.fetched_at,
  }
}

export const tasasService = {
  async getLatest(): Promise<Snapshot | null> {
    const row = await tasasRepository.findLatest()
    return row ? toSnapshot(row) : null
  },

  async getHistory(limit: number): Promise<Snapshot[]> {
    const rows = await tasasRepository.findHistory(limit)
    return rows.map(toSnapshot)
  },
}
