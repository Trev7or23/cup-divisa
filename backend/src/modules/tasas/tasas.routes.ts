import { Router } from 'express'
import { tasasController } from './tasas.controller.js'

export const tasasRouter: Router = Router()

tasasRouter.get('/latest', tasasController.latest)
tasasRouter.get('/history', tasasController.history)
