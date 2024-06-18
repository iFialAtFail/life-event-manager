import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pointInTime: Date;

    @Column()
    description: string;

    @Column()
    userId: string;
}
