import { Request, Response } from "express";
import DisappearancePlace from "../../entities/DisappearencePlace";
import { Provinces } from "../../entities/Provinces";
import TypeDocument from "../../entities/TypeDocument";
import { CreateDisappearance } from "./CreateDisappearance";


export class CreateDisappearanceController {

    static async handle(request: Request, response: Response) {

        const { disappearance_place, user_id, document_url, location, state, type } = request.body

        const disappearance = new CreateDisappearance

        if (!(disappearance_place in DisappearancePlace)) {
            throw new Error("Invalid DisappearancePlace")
        }

        if (!(location.province in Provinces)) {
            throw new Error("Invalid Province")
        }
        
        if (!(type in TypeDocument)) {
            throw new Error("Invalid Type")
        }

        const b = await disappearance.execute({ disappearance_place, user_id, document_url, location, state, type })


        return response.json(b);

    }
}