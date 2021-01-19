import * as express from 'express';
import { getConnection } from 'typeorm';
import { FavouritesController } from '../controller/favourites.controller';
import { RecipesController } from '../controller/recipes.controller';

import { UserController } from '../controller/user.controller';
import { VariantsController } from '../controller/variants.controller';
import { authMiddleware } from '../middleware/Auth.middleware';

const router = express.Router();

const usercontroller = new UserController()

/**USER ROUTES**/
//AUTH
//TODO migrate to OAuth
router.post('/users/login', new UserController().getUser);
router.post('/users/register', new UserController().registerUser);
router.put('/users/update', authMiddleware, new UserController().updateUser);
router.delete('users/delete/:_uid', authMiddleware, new UserController().deleteUser);
router.post('/users/logout', authMiddleware, new UserController().logout);

/**Favourites routes**/
router.post('/favourites', authMiddleware, new FavouritesController().addToFavourites);
router.get('/favourites', authMiddleware, new FavouritesController().getFavouritesByUser);
router.delete('/favourites', authMiddleware, new FavouritesController().getFavouritesByUser);

/**RECIPE ROUTES**/
router.get('/recipes/:recipeName', new RecipesController().getRecipeTitle);
router.post('/recipes', new RecipesController().addNewRecipe);

/**VARIANTS ROUTES**/
router.get('/variants/:recipeName', new VariantsController().getVariantsByRecipeTitle);
router.get('/variants/:_vid', new VariantsController().getVariantById);
router.post('/variants', new VariantsController().addNewVariant);
router.put('/variants/:_vid', new VariantsController().updateCurrentVariant);
router.delete('/variants/:_vid', new VariantsController().deleteVariant);


export { router };