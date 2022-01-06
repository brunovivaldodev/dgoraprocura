import { getRepository, Repository } from "typeorm";
import { ICreateDisappearanceDTO } from "../dtos/ICreateDisappearanceDTO";
import Disappearance from "../entities/Disappearance";

export class DisappearanceRepository extends Repository<Disappearance>{
    repository: Repository<Disappearance>
    private limitDay: number = 6

    constructor() {
        super()
        this.repository = getRepository(Disappearance)
    }

    private filterPassedDate() {

        const TodayDateParsed = new Date()

        const dayOfDisapearance = TodayDateParsed.getDate()

        const limitDay = TodayDateParsed.setDate(dayOfDisapearance - this.limitDay)

        const [disappearanceDay,] = new Date(limitDay).toISOString().split("T")

        return disappearanceDay

    }


    public async createDisappearance({ type, state, document_url, location, disappearance_place, user_id }: ICreateDisappearanceDTO) {

        const disappearance = this.repository.create({ type, state, document_url, location, disappearance_place, user_id })

        await this.repository.save(disappearance)

        return disappearance

    }

    public async findAllDisppearanceWithDatePassedAndMessageSentFalse(): Promise<Disappearance[]> {

        const disappearance = this.repository.createQueryBuilder("disappearance")
            .innerJoinAndSelect("disappearance.user_id", "user")
            .select(["disappearance.id", "disappearance.type", "disappearance.state", "user.number"])
            .where("disappearance.state = \"disappeared\"")
            .andWhere("disappearance.message_sent = false")
            .andWhere("Date(disappearance.created_at) = :id", { id: this.filterPassedDate() })
            .getMany()

        return disappearance
    }

    public async setMessageSentTrue(id: string) {
        await this.repository.update(id, { message_sent: true })

    }

    public async findAllDisappearanceWithMessageSentTrue(): Promise<Disappearance[]> {

        const disappearance = this.repository.createQueryBuilder("disappearance")
            .innerJoinAndSelect("disappearance.user_id", "user")
            .select(["disappearance.id", "disappearance.type", "disappearance.state", "user.number"])
            .where("disappearance.state = \"disappeared\"")
            .andWhere("disappearance.message_sent = true")
            .getMany()

        return disappearance

    }

}