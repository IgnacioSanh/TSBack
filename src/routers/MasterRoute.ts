import {Router} from 'express'
import LearningRouter from './learning/LearningRouter'
import PracticeRouter from './practice/PracticeRouter'

class MasterRouter {
    private _router = Router()
    private _learningRouter = LearningRouter
    private _practiceRouter = PracticeRouter

    get router(){
        return this._router
    }

    constructor(){
        this._configure()
    }

    private _configure(){
        this._router.use('/learning', this._learningRouter)
        this._router.use('/practice', this._practiceRouter)
    }
}

export = new MasterRouter().router