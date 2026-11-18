import 'dotenv/config'

export const env = {
  port: Number(process.env.PORT) || 3000,
  externalApiUrl:
    process.env.EXTERNAL_API_URL || 'https://tasas.eltoque.com/v1/trmi',
  syncIntervalMs: Number(process.env.SYNC_INTERVAL_MS) || 60_000,
  dbFile: process.env.DB_FILE || './data/database.sqlite',
  externalApiToken: process.env.EXTERNAL_API_TOKEN || '',
} as const
