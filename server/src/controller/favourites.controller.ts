import {getRepository, getConnection} from "typeorm";
import {Request, Response} from "express";

import {Favourite} from "../model/Favourites";

export class FavouritesController {

  private favouritesRepository = getConnection().getRepository(Favourite);

  /**GET**/
  getFavouritesByUser(req: Request, res: Response): void {
    const findFavourites = async (_uid: string): Promise<Favourite[]> => {
      return await this.favouritesRepository.find({ user: {_uid: _uid}});
    }

    try {
      const { _uid } = req.params;
      const favs = findFavourites(_uid);
      res.status(200).send(favs);
    } catch (e) {
      res.status(400).send(e);
    }
  }

  /**POST**/
  addToFavourites(req: Request, res: Response): void {
    const saveFavourite = async (fav: Favourite): Promise<any> => {
      return await this.favouritesRepository.save(fav);
    };

    try {
      const savedFav = saveFavourite(req.body);
      res.status(201).send(savedFav);
    } catch (e) {
      console.log(e);
    }
  }

  /**DELETE**/
  async removeFromFavourites(req: Request, res: Response): Promise<any> {
    const deleteFavourite = async (favourite: Favourite): Promise<any> => {
      const { _vid } = favourite.variant;
      const { _uid } = favourite.user;
      return await this.favouritesRepository.delete({ user: { _uid }, variant: { _vid }});
    }

    try {
      const removedFav = deleteFavourite(req.body);
      res.status(204).send(removedFav);
    } catch (e) {
      res.status(401).send(e);
    }
  }

}
