import express from 'express'
import bodyParser from 'body-parser'
import {imcsRouter} from './routes/imcs.route.js'

export class Server {
    constructor(port) {
        this.app = express()

        this.setMiddlewares()

        this.setRoutes()

        this.listen(port)
    }

    setMiddlewares() {
        this.app.use(bodyParser.urlencoded({extended:true}))
        this.app.use(bodyParser.json())
    }

    setRoutes() {
        this.app.use(express.static('public'))
        this.app.use('/api/imc', imcsRouter)
    }


    listen(port) {
        this.app.listen(port, ()=>{
            console.log("App started. Listen at port" + port)
        })
    }
}