import cors from 'cors'
import { env } from '../config/env.js'

export function corsMiddleware() {
  const allowedOrigins = env.ALLOWED_ORIGINS
  const corsOptions = {
    origin: (origin: any, callback: any) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
  }
  return cors(corsOptions)
}
