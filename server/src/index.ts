/**
 * Author: Alexander Jaye
 * Project: Tuck (app)
 * Role: Server
 * Key Server Modules (tech): Express, TypeORM
*/

import {createConnection} from "typeorm";
import * as express from "express";
import * as session from "express-session";
import * as bodyParser from "body-parser";
import { router } from "./router/index.router";
// import {User} from "./model/User";

// set env variables
const SECRET = 'La Fleur Que Tu Mavais Jetee';
const SECURE = false;
const PORT = 3001;

createConnection().then(() => {

  // create express app
  const app = express();

  // express middleware
  app.use(bodyParser.json());

  // create session for auth
  app.use(session({
    name: 'sid',
    saveUninitialized: false,
    resave: false,
    secret: SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60, // 1hr
      sameSite: true,
      httpOnly: false,
      secure: SECURE
    }
  }));

  // register express routes from defined application routes
  app.use(router);


  // start express server
  app.listen(PORT, () => {
    console.log(`Express server has started on port ${PORT} -> http://localhost:${PORT}`);
    console.log("Connected to Postgres Database");
  });

}).catch(error => console.log(error));
