import { ICreateDisappearanceDTO } from "../../dtos/ICreateDisappearanceDTO";
import { DisappearanceRepository } from "../../repositories/DisappearanceRepository";

export class CreateDisappearance {
    async execute({ user_id, type, disappearance_place, document_url, location, state }: ICreateDisappearanceDTO) {

        const disappearanceRepository = new DisappearanceRepository

        const disappearance = disappearanceRepository.createDisappearance({ disappearance_place, user_id, document_url, location, state, type })

        return disappearance

    }
}