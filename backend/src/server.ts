import { createApp } from './app.js'
import { env } from './config/env.js'
import { startSync } from './sync/sync.scheduler.js'
import { getDb } from './db/connection.js'

async function main() {
  await getDb() // crea la BD y el esquema
  startSync() // arranca el cron

  const app = createApp()
  app.listen(env.port, () => {
    console.log(`Servidor en http://localhost:${env.port}`)
  })
}

main().catch((err) => {
  console.error('Fallo al arrancar:', err)
  process.exit(1)
})
