import { VariantsController } from "../controller/variants.controller";

export const VariantsRoutes = [
  {
    method: "get",
    route: "/variants/:recipeName",
    controller: VariantsController,
    action: "getVariantsByRecipeTitle"
  },
  {
    method: "get",
    route: "/variants/:_vid",
    controller: VariantsController,
    action: "getVariantById"
  },
  {
    method: "post",
    route: "/variants",
    controller: VariantsController,
    action: "addNewVariant"
  },
  {
    method: "put",
    route: "/variants/:_vid",
    controller: VariantsController,
    action: "updateCurrentVariant"
  },
  {
    method: "delete",
    route: "/variants/:_vid",
    controller: VariantsController,
    action: "deleteVariant"
  }
];

// router.get('/variants/:recipeName', new VariantsController().getVariantsByRecipeTitle);
// router.get('/variants/:_vid', new VariantsController().getVariantById);
// router.post('/variants', new VariantsController().addNewVariant);
// router.put('/variants/:_vid', new VariantsController().updateCurrentVariant);
// router.delete('/variants/:_vid', new VariantsController().deleteVariant);
