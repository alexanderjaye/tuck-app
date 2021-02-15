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
import Entities from './entities';
import { Routes } from "./router/index.router";
import * as cors from 'cors';
// import {User} from "./model/User";

// set env variables
const SECRET = 'La Fleur Que Tu Mavais Jetee';
const SECURE = false;
const PORT = 3002;

createConnection().then(() => {

  // create express app
  const app = express();

  const options: cors.CorsOptions = {
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'X-Access-Token',
      'Access-Control-Allow-Origin'
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: 'http://localhost:3000',
    preflightContinue: false,
  };

  app.use(cors(options))

  // express middleware
  app.use(express.json());

  // create session for auth
  // app.use(session({
  //   name: 'sid',
  //   saveUninitialized: false,
  //   resave: false,
  //   secret: SECRET,
  //   cookie: {
  //     maxAge: 1000 * 60 * 60, // 1hr
  //     sameSite: true,
  //     httpOnly: false,
  //     secure: SECURE
  //   }
  // }));

  // register express routes from defined application routes
  Routes.forEach(route => {
    app[route.method](route.route, (req, res, next) => {
      const result = (new (route.controller as any))[route.action](req, res, next);
      if (result instanceof Promise) {
        result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
      } else if (result !== null && result !== undefined) {
        res.json(result);
      }
    });
  });

  app.options('*', cors(options));


  // start express server
  app.listen(PORT, () => {
    console.log(`Express server has started on port ${PORT} -> http://localhost:${PORT}`);
    console.log("Connected to Postgres Database");
  });

}).catch(error => console.log(error));
