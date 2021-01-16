import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";

import {Ingredients} from "../model/entities/Ingredients";

export class IngredientsController {

  private userRepository = getRepository(Ingredients);

  /**GET**/
  async getIngredientsByVariant(req: Request) {
    return req.body;
  }


  async getRecipesByIngredients(req: Request) {
    return req.body;
  }

  /**POST**/

  /**PUT**/
  async editIngredientsForVariant(req: Request) {
    return req.body;
  }

  /**DELETE**/
  async deleteIngredientsByVariant(req: Request) {
    return req.body;
  }

}