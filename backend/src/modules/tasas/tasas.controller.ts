import type { Request, Response, NextFunction } from 'express'
import { tasasService } from './tasas.service.js'

export const tasasController = {
  async latest(_req: Request, res: Response, next: NextFunction) {
    try {
      const snap = await tasasService.getLatest()
      if (!snap) return res.status(404).json({ error: 'Sin datos aún' })
      res.json(snap)
    } catch (err) {
      next(err)
    }
  },

  async history(req: Request, res: Response, next: NextFunction) {
    try {
      const limit = Math.min(Number(req.query.limit) || 50, 500)
      const rows = await tasasService.getHistory(limit)
      res.json({ count: rows.length, data: rows })
    } catch (err) {
      next(err)
    }
  },
}
