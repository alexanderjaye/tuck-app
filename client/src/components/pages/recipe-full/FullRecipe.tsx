import React from 'react';
import './FullRecipe.scss';
import foodImg from '../../../assets/mocks/images/spaghetti-carbonara.jpg';
import RecipeTop from './recipe-panes/RecipeTop';
import VariantSelect from './recipe-panes/VariantSelect';
import RecipeIngredients from './recipe-panes/RecipeIngredients';
import RecipeInstructions from './recipe-panes/RecipeInstructions';

const FullRecipe = () => {
  return (
    <div className="recipe-full">
      <RecipeTop foodImg={foodImg}/>
      <VariantSelect/>
      <RecipeIngredients/>
      <RecipeInstructions/>
    </div>
  )
}

export default FullRecipe
