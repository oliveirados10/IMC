import {Router} from 'express'
import {ImcsController} from '../controllers/imc.controller.js'

export const imcsRouter = Router ()
const imcsController = new ImcsController ()

imcsRouter.get('/', imcsController.getAllImcs)
imcsRouter.post('/', imcsController.createImc)
imcsRouter.patch('/:id', imcsController.updateImc)
imcsRouter.delete('/:id', imcsController.deleteImc)


