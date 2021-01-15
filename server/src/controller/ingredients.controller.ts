import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";

import {Ingredients} from "../model/entities/Ingredients";

export class IngredientsController {

  private userRepository = getRepository(Ingredients);

  /**GET**/

  /**POST**/

  /**PUT**/

  /**DELETE**/

}