import {Router} from 'express'
import {EcommerceController} from '../controllers/ecommerce.controller.js'

export const ecommerceRouter = Router ()
const ecommerceController = new ecommerceController ();

// ecommecerceRouter.get('/', ecommerceController.getAllEcommerces)
ecommerceRouter.post('/register', ecommerceController.createEcommerce)
// ecommecerceRouter.patch('/:id', ecommerceController.updateEcommerce)
// ecommecerceRouter.delete('/:id', ecommerceController.deleteEcommerce)


