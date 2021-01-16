import {Route} from './Route.interface';
import {UserController} from '../controller/user.controller'

export const userRoutes: Route<UserController>[] = [
    {
        method: "get",
        route: "/users",
        controller: UserController,
        action: "all"
    }, 
    {
        method: "get",
        route: "/users/:_uid",
        controller: UserController,
        action: "getUser"
    }, 
    {
        method: "post",
        route: "/users",
        controller: UserController,
        action: "registerUser"
    },
    {
        method: "put",
        route: "/users/:_uid",
        controller: UserController,
        action: "updateUsername"
    }, 
    {
        method: "delete",
        route: "/users/:id",
        controller: UserController,
        action: "deleteUser"
    }
];
