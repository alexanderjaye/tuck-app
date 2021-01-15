import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToOne} from "typeorm";
import { Recipes } from "./Recipes";
import { User } from "./User";
import { Variants } from "./Variants";

@Entity()
export class Favourites {

  @PrimaryColumn()
  @ManyToOne(() => User, user => user._uid)
  _uid: number;

  @ManyToOne(() => Recipes, recipe => recipe.recipeName)
  recipeName: string;

  @ManyToOne(() => Recipes, recipe => recipe._rid)
  _rid: number

  @ManyToOne(() => Variants, variant => variant.variantName)
  variantName: string;

  @ManyToOne(() => Variants, variant => variant._vid)
  _vid: number;
}