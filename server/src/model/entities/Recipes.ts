import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import { Users } from "./User";
import { Variants } from "./Variants";

@Entity()
export class Recipes {

  @PrimaryGeneratedColumn()
  @OneToMany(() => Variants, variant => variant._rid)
  _rid: number;

  @Column()
  recipeName: string;

  @Column()
  @ManyToOne(() => Users, user => user.username)
  author: string;

}
