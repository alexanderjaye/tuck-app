import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";

import {Recipes} from "../model/entities/Recipes";

export class RecipesController {

  private userRepository = getRepository(Recipes);

  /**GET**/

  /**POST**/

  /**PUT**/

  /**DELETE**/

}