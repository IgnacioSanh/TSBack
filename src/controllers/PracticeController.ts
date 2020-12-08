import ErrorHandler from '../models/ErrorHandler'

class PracticeController{
    defaultMethod(){
        throw new ErrorHandler(501, 'Not implemented method')
    }
}

export = new PracticeController()