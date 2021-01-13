import {createConnection} from "typeorm";
import * as express from "express";
import * as session from "express-session";
import {Request, Response, NextFunction, UserController } from "express";
import {Routes} from "./router";
// import {User} from "./model/User";

createConnection().then(() => {

    // create express app
    const app = express();

    // express middleware
    app.use(express.json());

    // create session for auth
    // app.use(session());

    // register express routes from defined application routes
    Routes.forEach(route => {
        app[route.method](route.route, (req: Request, res: Response, next: NextFunction) => {
            const result = (new (route.controller as UserController))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3000, () => {
        console.log("Express server has started on port 3000 -> http://localhost:3000/users");
        console.log("Connected to Postgres Database");

    });

}).catch(error => console.log(error));
