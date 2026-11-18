import { env } from '../config/env.js'
import { syncOnce } from './sync.service.js'

let timer: NodeJS.Timeout | null = null

export function startSync(): void {
  const loop = async () => {
    await syncOnce()
    timer = setTimeout(loop, env.syncIntervalMs)
  }
  loop() // primera ejecución inmediata
}

export function stopSync(): void {
  if (timer) clearTimeout(timer)
  timer = null
}
