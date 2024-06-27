import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Tag {

    @PrimaryColumn()
    id: string;

    @Column({nullable: true})
    description?: string;
}
