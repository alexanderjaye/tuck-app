import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";

import {Ingredients} from "../model/entities/Ingredients";

export class IngredientsController {

  private userRepository = getRepository(Ingredients);

  /**GET**/
  async getIngredientsByRecipe(req: Request) {
    return req.body;
  }


  async getRecipesByIngredients(req: Request) {
    return req.body;
  }

  /**POST**/
  async addIngredientsForRecipe(req: Request) {
    return req.body;
  }

  /**PUT**/
  async editIngredients(req: Request) {
    return req.body;
  }

  /**DELETE**/
  async deleteIngredientsByRecipe(req: Request) {
    return req.body;
  }

}