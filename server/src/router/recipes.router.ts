import { RecipesController } from "../controller/recipes.controller";
import { Route } from "./Route.interface";

export const recipesRoutes: Route<RecipesController>[] = [
  //TODO Edit all routes -> check against markup

  {
      method: "get",
      route: "/recipes",
      controller: RecipesController,
      action: "getAll"
  }, 
  {
      method: "get",
      route: "/recipes/:_uid",
      controller: RecipesController,
      action: "getUserRecipes"
  },
  {
    method: "get",
    route: "/recipes/:_rid",
    controller: RecipesController,
    action: "getOneRecipe"
},  
  {
      method: "post",
      route: "/recipes",
      controller: RecipesController,
      action: "addOneRecipe"
  }, 
  {
      method: "delete",
      route: "/users/:id",
      controller: RecipesController,
      action: "deleteOneRecipe"
  }
];