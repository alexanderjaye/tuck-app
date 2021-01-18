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
            <li>2tsp sugar</li>
            <li>2tsp sugar</li>
          </ul>
        </div>
        <div className="list">
          <ul>
            <li>2tsp sugar<span className="notes">I like tate & lyle's</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RecipeIngredients
