import { Router } from 'express'
import { tasasRouter } from '../modules/tasas/tasas.routes.js'

export const apiRouter: Router = Router()

apiRouter.use('/tasas', tasasRouter)
