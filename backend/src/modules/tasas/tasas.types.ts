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
  tasas: Record<string, number>
  fetched_at: Date | string
}

export interface Snapshot {
  id: number
  date: string
  hour: number
  minutes: number
  seconds: number
  tasas: Record<string, number>
  fetched_at: string
}
