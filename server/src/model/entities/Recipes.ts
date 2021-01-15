import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Recipes {

  @PrimaryGeneratedColumn()
  _rid: number;

  @Column()
  recipeName: string;

  @Column()
  author: string;

  @Column()
  views: number;

}
