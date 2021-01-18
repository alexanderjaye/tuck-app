import React from 'react';
import './RecipeCard.scss';
import foodImg from '../../assets/mocks/images/spaghetti-carbonara.jpg'

const RecipeCard = () => {
  return (
    <div className="recipe-card-sm">
      <div className="img-container">
        <img src={foodImg} alt="foodImage"></img>
      </div>
      <div className="info">
        <h2>Spaghetti Carbonara</h2>
        <h2>Alla Norma</h2>
        <h3>@AlexanderJaye</h3>
      </div>
    </div>
  )
}

export default RecipeCard
