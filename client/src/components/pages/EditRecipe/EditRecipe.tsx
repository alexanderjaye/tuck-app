import React from 'react'
import './EditRecipe.scss'

import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const EditRecipe = () => {
  return (
    <div className="edit-window">
      <form className="edit-form">
        <div className="fixed-fields">
          <h1>Recipe Information</h1>
          <h2>Recipe Title: Spaghetti Carbonara</h2>
        </div>
        <div className="fixed-fields">
          <div>
            <label>Variation Name</label>
            <input type="text"/>
            <label>Short Desription</label>
            <input type="text" className="blurb"/>
          </div>
        </div>
        <div>
          <div>
            <h1>Dietary Information</h1>
          </div>
          <div>
            <label>Vegan</label>
            <input type="checkbox" name="" id=""/>
            <label>Vegetarian</label>
            <input type="checkbox" name="" id=""/>
            <label>Gluten-Free</label>
            <input type="checkbox" name="" id=""/>
          </div>
        </div>
        <div>
          <h1>Ingredients</h1>
          <div className="ingredients-edit">
            <input type="text"/>
            <select>
            <option disabled>Weight</option>
              <option value="g">grams</option>
              <option value="kg">kg</option>
              <option disabled>Volume</option>
              <option value="tsp">tsp</option>
              <option value="tbsp">tbsp</option>
              <option value="cup">cup</option>
              <option value="ml">ml</option>
              <option value="litres">litres</option>
              <option value="pinch">pinch</option>
              <option value="pint">pint</option>
              
            </select>
            <input type="text"/>
            <input type="text"/>
            <FaMinusCircle/>
            <FaPlusCircle/>
          </div>
          <div>
            <h2>Instructions</h2>
            <h3>Preparations</h3>
            <input type="text"/>
            <FaMinusCircle/>
            <FaPlusCircle/>
            <h3>Cooking</h3>
            <input type="text"/>
            <FaMinusCircle/>
            <FaPlusCircle/>
            <h3>Finish</h3>
            <input type="text"/>
            <FaMinusCircle/>
            <FaPlusCircle/>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditRecipe
