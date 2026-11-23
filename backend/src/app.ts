import express, { type Express } from 'express'
import cors from 'cors'
import { apiRouter } from './routes/index.js'
import { requireApiKey } from './middlewares/auth.js'
import { notFound } from './middlewares/notFound.js'
import { errorHandler } from './middlewares/errorHandler.js'
import swaggerFile from './swagger_output.json' with { type: 'json' }
import swaggerUi from 'swagger-ui-express'

export function createApp(): Express {
  const app = express()
  app.use(cors())
  app.use(express.json())

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
  app.use('/api', requireApiKey, apiRouter)

  app.use(notFound)
  app.use(errorHandler)
  return app
}
