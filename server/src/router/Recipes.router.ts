import { RecipesController } from "../controller/recipes.controller";

export const RecipesRoutes = [
  {
    method: "post",
    route: "/recipes/:recipeName",
    controller: RecipesController,
    action: "getRecipeTitle"
  }, {
    method: "post",
    route: "/favourites",
    controller: RecipesController,
    action: "addNewRecipe"
  }
];

