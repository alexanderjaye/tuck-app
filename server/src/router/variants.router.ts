import { VariantsController } from "../controller/variants.controller";
import { Route } from "./Route.interface";

export const variantsRoutes: Route<VariantsController>[] = [
  {
    method: "get",
    route: "/variants/:variantName",
    controller: VariantsController,
    action: "getVariantByName"
  }, 
  {
    method: "get",
    route: "/variants/:recipe",
    controller: VariantsController,
    action: "getVariantsByRecipe"
  }, 
  {
    method: "post",
    route: "/variants",
    controller: VariantsController,
    action: "addVariant"
  },
  {
    method: "put",
    route: "/variants/:_vid",
    controller: VariantsController,
    action: "addVariant"
  }, 
  {
    method: "delete",
    route: "/variant/:id",
    controller: VariantsController,
    action: "deleteVariant"
  }
];