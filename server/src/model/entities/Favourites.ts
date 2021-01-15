import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Favourites {

  user_id: number;

  recipe_id: number;

  variant_id: number;

}