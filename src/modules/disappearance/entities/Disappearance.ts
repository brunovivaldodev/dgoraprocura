import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Users } from "../../users/entities/User"
import State from "./State"
import TypeDocument from "./TypeDocument"
import DisappearancePlace from "./DisappearencePlace"
import { Provinces } from "./Provinces"

@Entity()
class Disappearance {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({
        type: "enum",
        enum: TypeDocument,
        default: TypeDocument.BI
    })
    type: TypeDocument

    @ManyToOne(() => Users)
    @JoinColumn({ name: "user_id"})
    @Column()
    user_id: string;

    @Column()
    document_url: string

    @Column({
        type: "enum",
        enum: State,
        default: State.disappeared
    })
    state: State

    @Column({
        type: "enum",
        enum: DisappearancePlace,
        default: DisappearancePlace.taxi
    })
    disappearance_place: DisappearancePlace

    @Column("json")
    location: { district: string, province: Provinces }

    @Column()
    message_sent: boolean

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date


}


export default Disappearance