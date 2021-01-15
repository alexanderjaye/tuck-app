import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    _uid: number;

    @Column()
    name: string;

    @Column()
    email: number;

    @Column()
    password: string;

}
