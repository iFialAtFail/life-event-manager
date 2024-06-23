import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "timestamptz"})
    pointInTime: Date;

    @Column()
    description: string;

    @Column({nullable: true})
    details?: string;

    @Column()
    userId: string;
}
