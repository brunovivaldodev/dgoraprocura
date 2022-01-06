require('dotenv').config()

import { MessageBirdImplementation } from "../../../../shared/providers/messageProvider/implementations/messagebirdProvider";
import { DisappearanceRepository } from "../../repositories/DisappearanceRepository";


export default class SendMessageToUserUseCase {

    constructor(
        private messageProvider: MessageBirdImplementation,
    ) { }

    async execute(body: string,) {

        const disappearanceRepository = new DisappearanceRepository

        const dissapearances = await disappearanceRepository.findAllDisppearanceWithDatePassedAndMessageSentFalse()

        console.log(dissapearances)

        dissapearances.forEach(async (dissapear: any) => {
            this.messageProvider.send({ to: ["+244" + dissapear.user_id.number], body })
            await disappearanceRepository.setMessageSentTrue(dissapear.id)

        })

        return dissapearances

    }


}

