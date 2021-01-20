import { FavouritesRoutes } from "./Favourites.router";
import { RecipesRoutes } from "./Recipes.router";
import { UserRoutes } from "./User.router";
import { VariantsRoutes } from "./Variants.router";

const Routes = [
  ...UserRoutes,
  ...FavouritesRoutes,
  ...RecipesRoutes,
  ...VariantsRoutes
];



export { Routes };