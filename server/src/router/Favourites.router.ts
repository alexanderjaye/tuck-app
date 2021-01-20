import { FavouritesController } from "../controller/favourites.controller";

export const FavouritesRoutes = [
  {
    method: "post",
    route: "/favourites",
    controller: FavouritesController,
    action: "addToFavourites"
  }, 
  {
    method: "get",
    route: "/favourites/_uid",
    controller: FavouritesController,
    action: "registerUser"
  }, 
  {
    method: "delete",
    route: "/favourites",
    controller: FavouritesController,
    action: "removeFromFavourites"
  }
];