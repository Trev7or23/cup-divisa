export interface TasasResponse {
  date: string
  hour: number
  minutes: number
  seconds: number
  tasas: Record<string, number>
}
