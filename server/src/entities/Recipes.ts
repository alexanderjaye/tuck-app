import { IsString } from "class-validator";
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Variant } from "./Variants";


@Entity('recipes')
export class Recipe {

  @PrimaryGeneratedColumn()
  _rid: number;

  @Column()
  @IsString()
  recipeName: string;

  @OneToMany(() => Variant, variant => variant.recipeMain)
  variants: Variant[];
}
