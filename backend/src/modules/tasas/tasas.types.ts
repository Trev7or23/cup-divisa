export interface TasasResponse {
  date: string
  hour: number
  minutes: number
  seconds: number
  tasas: Record<string, number>
}

export interface SnapshotRow {
  id: number
  date: string
  hour: number
  minutes: number
  seconds: number
  tasas: string // JSON crudo tal cual en BD
  fetched_at: string
}

export interface Snapshot extends Omit<SnapshotRow, 'tasas'> {
  tasas: Record<string, number>
}
