import dotenv from 'dotenv'
import express from 'express'
import MasterRouter from './routers/MasterRoute'

dotenv.config({
    path: '.env'
})

class Server{
    public app = express()
    public router = MasterRouter
}

const server = new Server();

((port = process.env.APP_PORT || 5000) => {
    server.app.use('/api', server.router);
    server.app.listen(port, () => console.log(`> Listening on port ${port}`))
})();