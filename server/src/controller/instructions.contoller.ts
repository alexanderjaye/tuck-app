import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";

import {RecipeInstructions} from "../model/entities/Instructions";

export class RecipeInstructionsController {

  private userRepository = getRepository(RecipeInstructions);

  /**GET**/
  async getInstructionsByRecipe(req: Request) {
    return req.body;
  }

  /**POST**/
  async addInstructionsForRecipe(req: Request) {
    return req.body;
  }

  /**PUT**/
  async editInstructionForRecipe(req: Request) {
    return req.body;
  }

  /**DELETE**/
  async deleteIngredientByRecipe(req: Request) {
    return req.body;
  }

  async deleteIngredientsForRecipe(req: Request) {
    return req.body;
  }
}