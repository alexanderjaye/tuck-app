import { IsEmail, IsString } from "class-validator";
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Favourite } from "./Favourites";
import { Variant } from "./Variants";


@Entity('users')
export class User {
//TODO -> migrate to OAuth

  @PrimaryGeneratedColumn('uuid')
  _uid: string;

  @Column()
  @IsString()
  username: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @IsString()
  password: string;

  @OneToMany(() => Favourite, fav => fav.user)
  favourites: Favourite[];

  @OneToMany(() => Variant, variant => variant.author)
  createdRecipes: Variant[];
}
