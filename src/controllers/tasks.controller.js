import {TasksRepository} from '../repositories/tasks.repositoriy.js'

export class TasksController {
    constructor() {
        this.repository = new TasksRepository();
    }

     getAllTasks =  async (req, res) => {
        const allTasks = await this.repository.getTasks()
        return res.json(allTasks)
    }

    createTask =   async (req, res) => {
        const task = req.body;


        const createdTask = await this.repository.createTask(task)
       
        // this.lastId++;
        // task.id = this.lastId

        // this.tasks.push(task)

        return res.json(createdTask)
    }

   updateTask =   async (req, res) => {
        const id = Number(req.params.id)
        const task= req.body

        const taskUpdated = await this.repository.updateTask({id, ...task})
    //     const taskUpdated = this.tasks.find(task => task.id === id);
        
    // taskUpdated.name = taskReq.name ? taskReq.name : taskUpdated.name
    // taskUpdated.checked = typeof taskReq.checked === 'boolean' ? taskReq.checked : taskUpdated.checked
    
    return res.json(taskUpdated)

}

    deleteTask =  async (req, res) => {
        const id = Number(req.params.id)

        await this.repository.deleteTask(id)

        return res.json({ok: true})
    }
}
