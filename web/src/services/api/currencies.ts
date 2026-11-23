import { env } from '@/config/env'
import type { TasasResponse } from '@/types'

export async function getCurrencies() {
  const url = `${env.apiUrl}/api/tasas/latest/`
  const apiKey = env.apiKey

  console.log(url)

  const result = await fetch(url, {
    method: 'GET',
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
    },
  })
  const json: TasasResponse = await result.json()

  return json
}
