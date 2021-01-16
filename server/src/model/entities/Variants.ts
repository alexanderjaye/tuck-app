import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import { Ingredients } from "./Ingredients";
import { RecipeInstructions } from "./Instructions";
import { Recipes } from "./Recipes";
import { Users } from "./User";

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

  @ManyToOne(() => Recipes, recipe => recipe.recipeName)
  recipeName: string;

  @ManyToOne(() => Users, user => user.username)
  author: string;

  @Column()
  servings: number;

  @Column()
  blurb: string;

  @Column()
  isVegetarian: boolean;

  @Column()
  isVegan: boolean;

  @Column()
  isGlutenFree: boolean;
}
