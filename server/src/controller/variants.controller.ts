import {getRepository, DeleteResult, getConnection} from "typeorm";
import {Request, Response} from "express";
import { Variant } from "../entities/Variants";

export class VariantsController {

  private variantRepository = getRepository(Variant);

  
  public getVariantsByRecipeTitle (req: Request, res: Response): void {
    const findVariantsByTitle = async (recipeTitle: string): Promise<Variant[]> => {
      return await this.variantRepository.find({
        where: { recipeMain: { recipeName: recipeTitle }},
        relations: ['ingredients', 'instructions']
      });
    };

    try {
      const { recipeTitle } = req.params;
      const variants: Promise<Variant[]> = findVariantsByTitle(recipeTitle);
      res.status(201).send(variants);
    } catch (error) {
      res.status(400).send({ error, message: error.message});
    }
  }

  public getVariantById (req: Request, res: Response): void {
    const findVariantById = async (_vid: number): Promise<Variant | undefined> => {
      return await this.variantRepository.findOne({
        where: { _vid: _vid},
        relations: ['ingredients', 'instructions']
      });
    };

    try {
      const { _vid } = req.params;
      const variant = findVariantById(_vid);
      if (variant) res.status(200).send(variant);
      else throw new Error('variant not found')
    } catch (error) {
      res.status(404).send({ error, message: error.message});
    }
  }

  public addNewVariant (req: Request, res: Response): void {
    const saveVariant = async (variant: Variant): Promise<Variant> => {
      return await this.variantRepository.save(variant);
    };

    try {
      const addedVariant = saveVariant(req.body);
      res.status(201).send(addedVariant);
    } catch (e) {
      res.status(400).send(e);
    }
  }

  public updateCurrentVariant (req: Request, res: Response): void {
    const delThenAddVariant = async (variant: Variant): Promise<Variant> => {
      const { _vid } = variant;
      await this.variantRepository.delete({ _vid: _vid})
      return await this.variantRepository.save(variant);
    };

    try {
      const updatedVariant = delThenAddVariant(req.body);
      res.status(201).send(updatedVariant);
    } catch (e) {
      res.status(400).send(e)
    }
  }

  public deleteVariant (req: Request, res: Response): void {
    const removeVariant = async (_vid: number): Promise<DeleteResult> => {
      return await this.variantRepository.delete({ _vid: _vid });
    }

    try {
      const { _vid } = req.params
      const deletedVariant = removeVariant(_vid);
      if (!deletedVariant) throw new Error('An unknown problem has occured');
      else res.status(204).send(deletedVariant);
    } catch (e) {
      res.status(400).send(e);
    }
  }
}