import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";

import {Favourites} from "../model/entities/Favorites";

export class FavouritesController {

  private userRepository = getRepository(Favourites);

  /**GET**/

  /**POST**/

  /**PUT**/

  /**DELETE**/

}

// async all(): Promise<Favourites[]> {
//   return await this.userRepository.find();
// }