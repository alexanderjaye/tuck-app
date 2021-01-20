import React, { useState } from 'react'
import './EditRecipe.scss'

import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';



const EditRecipe = (props: any) => {
  const [ingredients, setIngredients] = useState([1]);
  const [preparations, setPreparations] = useState([1]);
  const [cookingInstructs, setCookingInstructs] = useState([1]);
  const [finishInstructs, setFinishInstructs] = useState([1])


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.history.push('/recipe');
  }

  const addIngredient = () => {
    setIngredients([
      ...ingredients,
      ingredients.length + 1
    ])
  };

  const removeIngredient = () => {
    setIngredients(ingredients.slice(0, ingredients.length - 1));
  }

  const addPreparation = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    setPreparations([
      ...preparations,
      preparations.length + 1
    ])
  };

  const removePreparation = () => {
    setPreparations(preparations.slice(0, preparations.length - 1));
  }

  const addCookingInstruct = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    setCookingInstructs([
      ...cookingInstructs,
      cookingInstructs.length + 1
    ])
  };

  const removeCookingInstruct = () => {
    setCookingInstructs(cookingInstructs.slice(0, cookingInstructs.length - 1));
  }

  const addFinishInstructs = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    setFinishInstructs([
      ...finishInstructs,
      finishInstructs.length + 1
    ]);
  };

  const removeFinishInstructs = () => {
    setFinishInstructs(finishInstructs.slice(0, finishInstructs.length - 1));
  }


  return (
    <div className="edit-window">
      <form className="edit-form" onSubmit={handleSubmit}>
        
        {/*Main Info*/}
        <div className="fixed-fields">
          <h1>Recipe Information</h1>
          <h2>Recipe Title: Spaghetti Carbonara</h2>
        </div>
        <div className="variation-fields">
          <div className="variations">
            <div className="container">
              <label>Variation Name</label>
              <input type="text" placeholder="e.g. original"/>
            </div>
            <div className="container">
              <label>Short Desription</label>
              <input type="text" className="blurb" placeholder="e.g. a modern classic"/>
            </div>
          </div>
        </div>

        {/*Dietary*/}
        <div>
          <div>
            <h1>Dietary Information</h1>
          </div>
          <div className="dietary-choices">
            <label>Vegan</label>
            <input type="checkbox" name="vegan" id="vegan"/>
            <label>Vegetarian</label>
            <input type="checkbox" name="vegetarian" id="vegetarian"/>
            <label>Gluten-Free</label>
            <input type="checkbox" name="glutenFree" id="glutenFree"/>
          </div>
        </div>

        {/*Ingredients*/}
        <div>
          <h1>Ingredients</h1>
          <div className="ingredients-edit">
            {ingredients.map((ingNum) => (
              <div className="ingredients-row">
                <input type="text" placeholder="1"/>
                <input type="text" placeholder="tbsp"/>
                <input type="text" placeholder="ingredenient (sugar)"/>
                <input type="text" placeholder="notes (makes the medicine go down)"/>
              </div>
            ))}
            <FaPlusCircle className="plus-sign" onClick={addIngredient}/>
            <FaMinusCircle className="plus-sign" onClick={removeIngredient}/>
          </div>

          {/*instructions*/}
          <div>
            <h1>Instructions</h1>
            <h3>Preparations</h3>
            {preparations.map((prepNum) => (
              <div className="instruct-container">
                <input type="text" className="instruct" id={prepNum.toString()}/>
              </div>)
            )}
            <FaPlusCircle className="plus-sign" onClick={addPreparation}/>
            <FaMinusCircle className="plus-sign" onClick={removePreparation}/>

            <h3>Cooking</h3>
            {cookingInstructs.map((prepNum) => (
            <div className="instruct-container">
              <input type="text" className="instruct" id={prepNum.toString()}/>
            </div>))}
            
            <FaPlusCircle className="plus-sign" onClick={addCookingInstruct}/>
            <FaMinusCircle className="plus-sign" onClick={removeCookingInstruct}/>

            <h3>Finish</h3>
            {finishInstructs.map((prepNum) => (<div className="instruct-container">
              <input type="text" className="instruct"/>
            </div>))}
            
            <FaPlusCircle className="plus-sign" onClick={addFinishInstructs}/>
            <FaMinusCircle className="plus-sign" onClick={removeFinishInstructs}/>
          </div>
        </div>

        {/*Submit*/}
        <button className="form-submit" type="submit">
          &nbsp;Submit Recipe&nbsp; 
        </button>
      </form>
    </div>
  )
}

export default EditRecipe
