import { IsBoolean, IsInt, IsString } from "class-validator";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import { Ingredient } from "./Ingredients";
import { RecipeInstructions } from "./Instructions";
import { Recipe } from "./Recipes";
import { User } from "./User";

@Entity('variants')
export class Variant {

  @PrimaryGeneratedColumn()
  _vid: number;

  @Column()
  @IsString()
  variantName: string;

  @ManyToOne(() => Recipe, recipe => recipe.variants)
  @IsString()
  recipeMain: Recipe;

  @ManyToOne(() => User, user => user.createdRecipes)
  @IsString()
  author: User;

  @Column({ type: 'int' })
  @IsInt()
  servings: number;

  @Column()
  @IsString()
  blurb: string;

  @Column()
  @IsBoolean()
  isVegetarian: boolean;

  @Column()
  @IsBoolean()
  isVegan: boolean;

  @Column()
  @IsBoolean()
  isGlutenFree: boolean;

  @Column({ type: 'int' })
  @IsInt()
  likes: number;

  @OneToMany(() => RecipeInstructions, instruct => instruct.variant, {
    cascade: true
  })
  instructions: RecipeInstructions[];

  @OneToMany(() => Ingredient, ingredient => ingredient.recipeVariant, {
    cascade: true
  })
  ingredients: Ingredient[];
}
