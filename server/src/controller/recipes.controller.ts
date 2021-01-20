import {getRepository, getConnection} from 'typeorm';
import {Request, Response} from 'express';

import {Recipe} from "../entities/Recipes";

export class RecipesController {

  private recipeRepository = getRepository(Recipe);

  public getRecipeTitle (req: Request, res: Response): void {
    const findRecipeByTitle = async (recipeName: string): Promise<Recipe[]> => {
      return await this.recipeRepository.find({ recipeName });
    }

    try {
      const { recipeName } = req.body;
      const recipe = findRecipeByTitle(recipeName);
      if (!recipe) res.status(200).send('empty');
      else res.status(200).send(recipe);
    } catch (e) {
      
    }
  }

  public addNewRecipe (req: Request, res: Response): void {
    const saveRecipe = async (recipe: Recipe): Promise<Recipe> => {
      return await this.recipeRepository.save(recipe);
    }

    try {
      const savedRecipe = saveRecipe(req.body);
      res.send(savedRecipe).status(201);
    } catch (e) {
      
    }
  }

}