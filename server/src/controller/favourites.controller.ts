import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";

import {Favourites} from "../model/entities/Favourites";

export class FavouritesController {

  private userRepository = getRepository(Favourites);

  /**GET**/
  async getFavouritesByUser(req: Request) {
    return req.body
  }

  /**POST**/
  async addToFavourites(req: Request) {
    return req.body
  }

  /**PUT**/

  /**DELETE**/
  async deleteFavourite(req: Request) {
    return req.body
  }

}

// async all(): Promise<Favourites[]> {
//   return await this.userRepository.find();
// }