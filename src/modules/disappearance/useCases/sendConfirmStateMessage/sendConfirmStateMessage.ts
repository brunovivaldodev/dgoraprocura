import { MessageBirdImplementation } from "../../../../shared/providers/messageProvider/implementations/messagebirdProvider";
import { DisappearanceRepository } from "../../repositories/DisappearanceRepository";

export class sendConfirmStateMessage {

    constructor(
        private messageProvider: MessageBirdImplementation,
    ) { }

    async execute() {

        const disappearanceRepository = new DisappearanceRepository

        const dissapearances = await disappearanceRepository.findAllDisappearanceWithMessageSentTrue()

        console.log(dissapearances)

        dissapearances.forEach(async (dissapear: any) => {
            this.messageProvider.send({ to: ["+244" + dissapear.user_id.number], body: "" })
            await disappearanceRepository.setMessageSentTrue(dissapear.id)

        })

        return dissapearances

    }

}