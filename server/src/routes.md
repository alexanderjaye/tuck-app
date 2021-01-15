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

- GET - `getAll()` --> return all Recipes
- GET - `getUserRecipes()` --> return Recipes by user
- GET - `getOneRecipe()` --> return recipe
- POST - `addOneRecipe()` --> add new recipe
- DELETE - `deleteOneRecipe()` --> delete new recipe

## VARIANTS

- GET - `getVariantbyName()` --> return variant by name
- GET - `getVariantsbyRecipe` --> return variant
- POST - `addVariant()` -->
- PUT - `updateVariant()` -->
- DELETE - `deleteVariant()` -->

## INGREDIENTS

- GET - `getIngredientsByRecipe()` -->
- POST - `addIngredientsForRecipe()` -->
- PUT - `editIngredients()` -->
- DELETE - `deleteIngredientsByRecipe()` -->

## RECIPEINSTRUCTIONS

- GET - `getInstructionsByRecipe` -->
- POST - `addInstructionsForRecipe()` -->
- PUT - `editRecipeInstructions()` -->
- DELETE - `deleteIngredientByRecipe()` -->
