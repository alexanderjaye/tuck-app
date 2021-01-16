# Routes

## USER

'/user'

- GET - `getUser(email, password)` --> returns User -->
- POST - - `registerUser()` --> adds new User
- PUT - -`updateUsername()` --> update username in User
- PUT - -`changePassword()` --> update password in User
- DELETE - -`deleteUser()` --> delete User

## FAVOURITES

- GET - `getFavouritesByUser()` --> return Favourites
- POST - `addToFavourites()` --> Add new Favourite
- DELETE - `deleteFavourite()` --> Deletes Favourite

## RECIPES

'/recipes

- GET - `getAll()` --> return all Recipes
- GET - `getUserRecipes()` --> return Recipes by user
- GET - `getOneRecipe()` --> return recipe
- POST - `addOneRecipe()` --> add new recipe
- DELETE - `deleteOneRecipe()` --> delete new recipe

## VARIANTS

- GET - `getVariantByName()` --> return variant by name
- GET - `getVariantsByRecipe` --> return variant
- POST - `addVariant()` -->
- PUT - `updateVariant()` -->
- DELETE - `deleteVariant()` -->

## INGREDIENTS

- GET - `getIngredientsByVariant()` -->
<!-- - POST - `addIngredientsForVariant()` --> -->
- GET - `getRecipesByIngredient()`
- PUT - `editIngredientsForVariant()` -->
- DELETE - `deleteIngredientsByVariant()` -->

## RECIPEINSTRUCTIONS

- GET - `getInstructionsByVariant` -->
- POST - `addInstructionsForVariant()` -->
- PUT - `editVariantInstructions()` -->
- DELETE - `deleteInstructionsByVariant()` -->
