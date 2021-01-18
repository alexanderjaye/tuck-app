import React from 'react'
import veganIcon from '../../../../assets/icons/vegan-icon.png';
import vegetarianIcon from '../../../../assets/icons/vegetarian-icon.png';
import glutenFreeIcon from '../../../../assets/icons/gluten-free-icon.png';
import { FaThumbsUp } from 'react-icons/fa';

interface props {
  foodImg: string;
}

const RecipeTop: React.FC<props> = (props) => {
  const { foodImg } = props;
  return (
    <div className="top">
      <div className="main">
        <div className="img-container">
          <img src={foodImg} alt="recipe display" className="display-food"></img>
        </div>
        <div className="information">
          <h1>Spaghetti Carbonara</h1>
          <h2>Alla Norma</h2><span><FaThumbsUp size={18}/></span>
          <h3>@AlexanderJaye</h3>
          <h3>#tags #tags #tags</h3>
          <h4>Servings: </h4>
          <p>Lorem ipsum dolor sit amet </p>
        </div>
      </div>
      <div className="info-footer">
        <button>Edit</button>
        <img src={veganIcon} alt="is Plant Based" className="icon"/>
        <img src={vegetarianIcon} alt="is Vegetarian" className="icon"/>
        <img src={glutenFreeIcon} alt="is Gluten Free" className="icon"/>

      </div>
    </div>
  )
}

export default RecipeTop
