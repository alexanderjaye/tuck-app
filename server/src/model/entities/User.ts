import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Favourites } from "./Favourites";
import { Recipes } from "./Recipes";
import { Variants } from "./Variants";

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    @OneToMany(() => Favourites, fav => fav._uid)
    @OneToMany(() => Favourites, fav => fav._uid)
    _uid: number;

    @OneToMany(() => Recipes, recipes => recipes.author)
    @OneToMany(() => Variants, variant => variant.author)
    username: string;

    @Column()
    email: number;

    @Column()
    password: string;
}
