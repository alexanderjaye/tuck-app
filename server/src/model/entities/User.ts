import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Favourites } from "./Favourites";
import { Recipes } from "./Recipes";
import { Variants } from "./Variants";

@Entity()
export class Users {
//TODO -> migrate to OAuth
    @PrimaryGeneratedColumn('uuid')
    _uid: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;
}
