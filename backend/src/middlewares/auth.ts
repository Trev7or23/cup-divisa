// middleware/auth.ts
import type { Request, Response, NextFunction } from 'express'

const VALID_API_KEY = process.env.API_KEY

export function requireApiKey(req: Request, res: Response, next: NextFunction) {
  const providedKey = req.header('x-api-key')

  if (!providedKey) {
    return res.status(401).json({ error: 'Missing API key' })
  }

  if (providedKey !== VALID_API_KEY) {
    return res.status(403).json({ error: 'Invalid API key ' })
  }

  next()
}
