import {Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Variant } from "./Variants";


@Entity('favourites')
export class Favourite {

  @PrimaryGeneratedColumn()
  fav_id: number;

  @ManyToOne(() => Variant, variants => variants._vid, {
    onDelete: 'CASCADE'
  })
  variant: Variant;

  @ManyToOne(() => User, user => user.favourites, {
    onDelete: 'CASCADE'
  })
  user: User;
}