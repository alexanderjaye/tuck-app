import React from 'react'

const RecipeIngredients = () => {
  return (
    <div>
      <div className="ingredients-container">
        <h2>Ingredients</h2>
      </div>
      <div className="ingredients">
        <div className="list">
          <ul>
            <li>400g spaghetti</li>
            <li>175g pancetta<span className="notes">Ideally smoked, piece or cubes</span></li>
            <li>2tbsp extra virgin olive oil</li>
            <li>3 garlic cloves</li>
          </ul>
        </div>
        <div className="list">
          <ul>
            <li>10g parsley leaves<span className="notes">fresh, flatleaf</span></li>
            <li>3 eggs<span className="notes">large, free range</span></li>
            <li>50g pecorino<span className="notes">mature Sardinian</span></li>
            <li>pinch salt & ground black pepper</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RecipeIngredients
