import { FavouritesController } from "../controller/favourites.controller";
import { Route } from "./Route.interface";

export const favouritesRoutes: Route<FavouritesController>[] = [
  {
      method: "get",
      route: "/favourites/:_uid",
      controller: FavouritesController,
      action: "getFavouritesByUser"
  }, 
  {
      method: "post",
      route: "/favourites",
      controller: FavouritesController,
      action: "addToFavourites"
  },
  {
    method: "delete",
    route: "/favourites/:_rid",
    controller: FavouritesController,
    action: "deleteFavourite"
  }
];