import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import { Ingredients } from "./Ingredients";
import { RecipeInstructions } from "./Instructions";
import { Recipes } from "./Recipes";
import { User } from "./User";

@Entity()
export class Variants {

  @PrimaryGeneratedColumn()
  @OneToMany(() => Ingredients, ingredient => ingredient._vid)
  @OneToMany(() => RecipeInstructions, instruction => instruction._vid)
  _vid: number;

  @ManyToOne(() => Recipes, recipe => recipe._rid)
  _rid: string;

  @Column()
  variantName: string;

  @ManyToOne(() => User, user => user.username)
  author: string;

  @Column()
  servings: number;

  @Column()
  blurb: string;
}
