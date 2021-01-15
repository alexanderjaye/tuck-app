import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { Variants } from "../model/entities/Variants";

export class VariantsController {

  private userRepository = getRepository(Variants);

  /**GET**/
  async getVariantByName(req: Request) {
    return req.body;
  }

  async getVariantsByRecipe(req: Request) {
    return req.body;
  }

  /**POST**/
  async addVariant(req: Request) {
    return req.body;
  }

  /**PUT**/
  async addOneRecipe(req: Request) {
    return req.body;
  }

  /**DELETE**/
  async deleteOneRecipe(req: Request) {
    return req.body;
  }
}