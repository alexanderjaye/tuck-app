import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, PrimaryColumn} from "typeorm";
import { Variants } from "./Variants";

@Entity()
export class Ingredients {

  @ManyToOne(() => Variants, variant => variant._vid)
  _vid: number;

  @PrimaryColumn()
  ingredient: string;

  @Column()
  ingredientType: string;

  @Column()
  ingredientNum: number;

  @Column()
  measurementType: string;

  @Column()
  measurementAmount: string;
}