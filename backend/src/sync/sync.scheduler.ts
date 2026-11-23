import { env } from '../config/env.js'
import { syncOnce } from './sync.service.js'

let timer: NodeJS.Timeout | null = null

export function startSync(): void {
  const loop = async () => {
    await syncOnce()
    timer = setTimeout(loop, env.syncIntervalMs)
  }
  timer = setTimeout(loop, env.syncIntervalMs)
}

export function stopSync(): void {
  if (timer) clearTimeout(timer)
  timer = null
}
