import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Variants {

  @PrimaryGeneratedColumn()
  _vid: number;

  @Column() // one to many
  _rid: string;

  @Column()
  variantName: string;

  @Column()
  author: string;

  @Column()
  servings: number;

  @Column()
  blurb: string;

}
