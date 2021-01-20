import { UserController } from "../controller/user.controller";

export const UserRoutes = [
  {
    method: "post",
    route: "/users/login",
    controller: UserController,
    action: "getUser"
  }, 
  {
    method: "post",
    route: "/users/register",
    controller: UserController,
    action: "registerUser"
  }, 
  {
    method: "put",
    route: "/users/update",
    controller: UserController,
    action: "updateUser"
  },
  {
    method: "delete",
    route: "/users/delete/:_uid",
    controller: UserController,
    action: "deleteUser"
  }, 
  {
    method: "post",
    route: "/users/logout",
    controller: UserController,
    action: "logout"
  }
];