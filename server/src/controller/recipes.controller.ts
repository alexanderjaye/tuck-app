import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";

import {Recipes} from "../model/entities/Recipes";

export class RecipesController {

  private userRepository = getRepository(Recipes);

  /**GET**/
  async getAll(req: Request) {
    return req.body;
  }

  async getUserRecipes(req: Request) {
    return req.body;
  }

  async getOneRecipe(req: Request) {
    return req.body;
  }

  /**POST**/
  async addOneRecipe(req: Request) {
    return req.body;
  }
  
  /**PUT**/

  /**DELETE**/
  async deleteOneRecipe(req: Request) {
    return req.body;
  }

}