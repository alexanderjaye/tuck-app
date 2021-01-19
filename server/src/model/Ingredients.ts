import { IsString } from "class-validator";
import {Entity, Column, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import { Variant } from "./Variants";

@Entity('ingredients')
export class Ingredient {

  @PrimaryGeneratedColumn()
  ingredientID: number;

  @ManyToOne(() => Variant, variant => variant.ingredients)
  recipeVariant: Variant;

  @Column()
  @IsString()
  ingredientName: string;

  @Column()
  @IsString()
  ingredientType: string;

  @Column({ type: 'float' })
  ingredientAmount: number;

  @Column()
  @IsString()
  measurementType: string;

  @Column()
  @IsString()
  measurementAmount: string;
}