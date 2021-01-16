import { RecipeInstructionsController } from "../controller/instructions.contoller";
import { Route } from "./Route.interface";

export const instructionsRoutes: Route<RecipeInstructionsController>[] = [
  {
    method: "get",
    route: "/instructions/:_vid",
    controller: RecipeInstructionsController,
    action: "getInstructionsByVariant"
  }, 
  {
    method: "post",
    route: "/instructions",
    controller: RecipeInstructionsController,
    action: "addInstructionsForVariant"
  }, 
  {
    method: "post",
    route: "/instructions/:_vid",
    controller: RecipeInstructionsController,
    action: "editVariantInstructions"
  }, 
  {
    method: "delete",
    route: "/users/:_vid",
    controller: RecipeInstructionsController,
    action: "deleteInstructionsByVariant"
  }
];