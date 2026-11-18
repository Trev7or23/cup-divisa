import axios from 'axios'
import { env } from '../config/env.js'
import { tasasRepository } from '../modules/tasas/tasas.repository.js'
import type { TasasResponse } from '../modules/tasas/tasas.types.js'

export async function syncOnce(): Promise<void> {
  try {
    console.log(`[Sync] GET ${env.externalApiUrl}`)
    console.log(
      `[Sync] Authorization: Bearer ${env.externalApiToken.slice(0, 6)}...${env.externalApiToken.slice(-4)}`,
    )
    const { data } = await axios.get<TasasResponse>(env.externalApiUrl, {
      timeout: 8_000,
      headers: {
        Authorization: `Bearer ${env.externalApiToken}`,
        Accept: 'application/json',
      },
    })
    const changes = await tasasRepository.insertSnapshot(data)
    if (changes === 0) {
      console.log(
        `[Sync] Snapshot duplicado ignorado (${data.date} ${data.hour}:${data.minutes}:${data.seconds})`,
      )
    } else {
      console.log(
        `[Sync] Snapshot guardado (${data.date} ${data.hour}:${data.minutes}:${data.seconds})`,
      )
    }
  } catch (err) {
    console.error('[Sync] Error:', err instanceof Error ? err.message : err)
  }
}
