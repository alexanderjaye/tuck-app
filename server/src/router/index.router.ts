// Central Router

import { Route } from './Route.interface';

import { userRoutes } from './user.router';

export const Routes: Route<any>[] = [
    ...userRoutes
];