import {Entity, Column, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import { Variants } from "./Variants";

@Entity()
export class Ingredients {
  @PrimaryGeneratedColumn()
  ing_id: number;

  @ManyToOne(() => Variants, variant => variant._vid)
  _vid: number;

  @Column()
  ingredientName: string;

  @Column()
  ingredientType: string;

  @Column()
  ingredientNum: number;

  @Column()
  measurementType: string;

  @Column()
  measurementAmount: string;
}