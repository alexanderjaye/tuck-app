import React from 'react';
import './RecipeCard.scss';
import foodImg from '../../assets/mocks/images/spaghetti-carbonara.jpg'

const RecipeCard = (props: any) => {
  return (
    <div className="recipe-card-sm">
      <div className="img-container">
        <img src={props.img} alt="foodImage"></img>
      </div>
      <div className="info">
        <h2 className="title">{props.title}</h2>
        <h2 className="variant">{props.variant}</h2>
        <h3 className="author">@{props.author}</h3>
      </div>
    </div>
  )
}

export default RecipeCard
