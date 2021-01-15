import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { Variants } from "../model/entities/Variants";

export class VariantsController {

  private userRepository = getRepository(Variants);

  /**GET**/

  /**POST**/

  /**PUT**/

  /**DELETE**/

}