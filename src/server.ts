import "reflect-metadata"

import "./database"
import { Routes } from "./shared/http"

import express from "express"
import { schedule } from "node-cron"
import SendMessageToUserUseCase from "./modules/disappearance/useCases/sendAMessageToUser/sendMessageToUserUseCase"
import { MessageBirdImplementation } from "./shared/providers/messageProvider/implementations/messagebirdProvider"
import { sendConfirmStateMessage } from "./modules/disappearance/useCases/sendConfirmStateMessage/sendConfirmStateMessage"


const app = express()

app.use(express.json())
app.use(Routes)


const messageBird = new MessageBirdImplementation
const sendMessage = new SendMessageToUserUseCase(messageBird)
const sendConfirm = new sendConfirmStateMessage(messageBird)


schedule('30 15 * * *', async () => {
    // Mensagem a ser enviada todos os dias
    // Às 15h:30min
    try {
        sendMessage.execute("fdf")
    } catch (error) {
        console.log(error)
    }
})


schedule('30 18 15 * 7', async () => {
    // Mensagem a ser enviada todos os domingos de todos os meses 
    // No Dia 15 as 18h:30min
    try {
        sendConfirm.execute()
    } catch (error) {
        console.log(error)
    }
})

app.listen(3000, () => {
    console.log("Server Running at port 3000")
})