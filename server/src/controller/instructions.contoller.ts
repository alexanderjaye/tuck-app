import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";

import {RecipeInstructions} from "../model/entities/Instructions";

export class RecipeInstructionsController {

  private userRepository = getRepository(RecipeInstructions);

  /**GET**/

  /**POST**/

  /**PUT**/

  /**DELETE**/

}