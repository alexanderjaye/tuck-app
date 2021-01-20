import { IsInt, IsString } from "class-validator";
import {Entity, Column, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Variant } from "./Variants";


@Entity('instructions')
export class RecipeInstructions {

  @PrimaryGeneratedColumn()
  instruction_id: number;

  @ManyToOne(() => Variant, variant => variant.instructions)
  variant: Variant;

  @Column()
  @IsString()
  instruction_type: string;

  @Column({ type: 'int' })
  @IsInt()
  instruction_num: number;

  @Column()
  @IsString()
  instruction: string;
}