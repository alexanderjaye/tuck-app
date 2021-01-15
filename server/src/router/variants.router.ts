import { VariantsController } from "../controller/variants.controller";
import { Route } from "./Route.interface";

export const variantRoutes: Route<VariantsController>[] = [
  //TODO Edit all routes -> check against markup

  {
      method: "get",
      route: "/users",
      controller: VariantsController,
      action: "all"
  }, 
  {
      method: "get",
      route: "/users/:id",
      controller: VariantsController,
      action: "one"
  }, 
  {
      method: "post",
      route: "/users",
      controller: VariantsController,
      action: "save"
  }, 
  {
      method: "delete",
      route: "/users/:id",
      controller: VariantsController,
      action: "remove"
  }
];