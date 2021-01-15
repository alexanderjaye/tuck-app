import { RecipesController } from "../controller/recipes.controller";
import { Route } from "./Route.interface";

export const userRoutes: Route<RecipesController>[] = [
  //TODO Edit all routes -> check against markup

  {
      method: "get",
      route: "/users",
      controller: RecipesController,
      action: "all"
  }, 
  {
      method: "get",
      route: "/users/:id",
      controller: RecipesController,
      action: "one"
  }, 
  {
      method: "post",
      route: "/users",
      controller: RecipesController,
      action: "save"
  }, 
  {
      method: "delete",
      route: "/users/:id",
      controller: RecipesController,
      action: "remove"
  }
];