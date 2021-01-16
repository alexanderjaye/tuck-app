// Central Router

import { Route } from './Route.interface';
import { favouritesRoutes } from './favourites.router';
import { userRoutes } from './user.router';
import { recipesRoutes } from './recipes.router';
import { variantsRoutes } from './variants.router';
import { ingredientsRoutes } from './ingredients.router';
import { instructionsRoutes } from './instructions.router';

export const Routes: Route<any>[] = [
    ...userRoutes,
    ...favouritesRoutes,
    ...recipesRoutes,
    ...variantsRoutes,
    ...ingredientsRoutes,
    ...instructionsRoutes,
];