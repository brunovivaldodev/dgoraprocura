import { Request, Response } from "express"
import { MessageBirdImplementation } from "../../../../shared/providers/messageProvider/implementations/messagebirdProvider"
import SendMessageToUserUseCase from "./sendMessageToUserUseCase"
import { schedule } from "node-cron"

export class sendMessageToUserController {



    static async handle(request: Request, response: Response) {

        const messageBird = new MessageBirdImplementation
        const sendMessageToUserUseCase = new SendMessageToUserUseCase(messageBird)

        const send = await sendMessageToUserUseCase.execute("sdds")



        response.json(send)
    }
}