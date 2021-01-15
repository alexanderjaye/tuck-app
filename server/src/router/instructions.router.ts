import { RecipeInstructionsController } from "../controller/instructions.contoller";
import { Route } from "./Route.interface";

export const instructionRoutes: Route<RecipeInstructionsController>[] = [
  //TODO Edit all routes -> check against markup

  {
      method: "get",
      route: "/users",
      controller: RecipeInstructionsController,
      action: "all"
  }, 
  {
      method: "get",
      route: "/users/:id",
      controller: RecipeInstructionsController,
      action: "one"
  }, 
  {
      method: "post",
      route: "/users",
      controller: RecipeInstructionsController,
      action: "save"
  }, 
  {
      method: "delete",
      route: "/users/:id",
      controller: RecipeInstructionsController,
      action: "remove"
  }
];