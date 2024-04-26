import {Router} from 'express'
import {TasksController} from '../controllers/tasks.controller.js'

export const tasksRouter = Router ()
const tasksController = new TasksController ()

tasksRouter.get('/', tasksController.getAllTasks)
tasksRouter.post('/', tasksController.createTask)
tasksRouter.patch('/:id', tasksController.updateTask)
tasksRouter.delete('/:id', tasksController.deleteTask)


