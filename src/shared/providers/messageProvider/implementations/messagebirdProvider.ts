import messagebird, { MessageParameters } from "messagebird"
import { IMessage } from "../dtos/ISendMessage";



export class MessageBirdImplementation {

    send({ body, to }: IMessage) {
        const params = {
            recipients: to,
            body,
            originator: 'Bruno Dev',
        }

        messagebird(process.env.MESSAGE_BIRD_ACESS_KEY as string).messages.create(params, function (err, response) {
            if (err) {
                return console.log(err);
            }
        });
    }
}


