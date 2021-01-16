import { IngredientsController } from "../controller/ingredients.controller";
import { Route } from "./Route.interface";

export const ingredientsRoutes: Route<IngredientsController>[] = [
  //TODO Edit all routes -> check against markup

  {
    method: "get",
    route: "/ingredients/:_vid",
    controller: IngredientsController,
    action: "getIngredientsByVariant"
  },
  {
    method: "get",
    route: "/ingredients/search/:ingredientName",
    controller: IngredientsController,
    action: "getVariantsByIngredient"
  },
  {
    method: "post",
    route: "/ingredients",
    controller: IngredientsController,
    action: "getVariantsByIngredient"
  },
  {
    method: "put",
    route: "/ingredients/:_vid",
    controller: IngredientsController,
    action: "editIngredientsForVariant"
  }, 
  {
    method: "delete",
    route: "/ingredients/:_vid",
    controller: IngredientsController,
    action: "deleteIngredientsByVariant"
  }
];