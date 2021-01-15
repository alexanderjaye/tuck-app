import {Entity, Column, ManyToOne, PrimaryColumn} from "typeorm";
import { Variants } from "./Variants";

@Entity()
export class RecipeInstructions {

  @ManyToOne(() => Variants, variant => variant._vid)
  _vid: number;

  @Column()
  instruction_type: string;

  @Column()
  instruction_num: number;

  @PrimaryColumn()
  instruction: string
}