import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";

import {RecipeInstructions} from "../model/entities/Instructions";

export class RecipeInstructionsController {

  private userRepository = getRepository(RecipeInstructions);

  /**GET**/
  async getInstructionsByVariant(req: Request) {
    return req.body;
  }

  /**POST**/
  async addInstructionsForVariant(req: Request) {
    return req.body;
  }

  /**PUT**/
  async editInstructionForVariant(req: Request) {
    return req.body;
  }

  /**DELETE**/
  async deleteInstructionsByVariant(req: Request) {
    return req.body;
  }

  async deleteInstructionByVariant(req: Request) {
    return req.body;
  }
}