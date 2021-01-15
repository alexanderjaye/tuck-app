import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class RecipeInstructions {

  recipe_id: number; // int

  variant_id: number; // int

  method_type: string;

  method_num: number; // int

  method: string
}