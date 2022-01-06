import { Provinces } from "../entities/Provinces"
import TypeDocument from "../entities/TypeDocument";
import State from "../entities/State";
import DisappearancePlace from "../entities/DisappearencePlace";


export interface ICreateDisappearanceDTO {
    type: TypeDocument
    user_id: string
    document_url: string
    disappearance_place: DisappearancePlace
    state: State
    location: {
        district: string,
        province: Provinces
    }
}