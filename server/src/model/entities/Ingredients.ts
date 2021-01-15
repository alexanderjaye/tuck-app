import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Ingredients {

  recipe_id: number;

  variant_id: number;

  ingredientType: string;

  ingredientNum: number;
  
  ingredient: string;

  measurementType: string;

  measurementAmount: string;
}