import 'dotenv/config'

if (!process.env.API_KEY) {
  console.error('FATAL ERROR: No Api Key Inserted')
  console.error('Set API_KEY Value on the .env File to start the server')
  process.exit(1)
}

if (process.env.NODE_ENV !== 'production') {
  console.info(`Actual External Token is: ${process.env.API_KEY}`)
}

export const env = {
  port: Number(process.env.PORT) || 3000,
  externalApiUrl:
    process.env.EXTERNAL_API_URL || 'https://tasas.eltoque.com/v1/trmi',
  syncIntervalMs: Number(process.env.SYNC_INTERVAL_MS) || 60_000,
  dbFile: process.env.DB_FILE || './data/database.sqlite',
  externalApiToken: process.env.EXTERNAL_API_TOKEN || '',
  API_KEY: process.env.API_KEY || '',
  ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS?.split(', ') || '',
} as const
