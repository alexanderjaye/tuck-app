import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import './CreateRecipe.scss'

const CreateRecipe = () => {
  const [isOriginal, setIsOriginal] = useState(true);

  return (
    <div className="create-window">
      <div className="create-recipe">
        <form>
          <h2>Create Recipe Title</h2>
          <p>A general title.</p>
          <div className="input-container">
            <input type="text" 
              name="RecipeTitle" 
              placeholder="Recipe Title (e.g. Risotto)"
            />
            <FaArrowRight size={40}/>
            {
              isOriginal ?
              null :
              <div className="warning">
                This Recipe already exists. Create A Variation Here.
              </div>
            }
            
          </div>
        </form>
        
      </div>
      
    </div>
  )
}

export default CreateRecipe
