import { CreateUserUseCase } from './createUser'
import { Request, Response } from 'express'

class CreateUserController {
    static async handle(request: Request, response: Response) {

        const { name, email, number, password } = request.body


        const createUserUseCase = new CreateUserUseCase

        const User = await createUserUseCase.execute({ name, email, number, password })

        return response.status(201).json(User)
    }
}

export default CreateUserController
