import React from 'react'
import veganIcon from '../../../../assets/icons/vegan-icon.png';
import vegetarianIcon from '../../../../assets/icons/vegetarian-icon.png';
import glutenFreeIcon from '../../../../assets/icons/gluten-free-icon.png';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
          <h2>Italian Vegan<span className="likes"><FaThumbsUp size={18}/></span></h2>
          <h3>@AlexanderJaye</h3>
          <h4>Servings: 2</h4>
          <p>A classic take on carbonara straight from Vegans in Modena</p>
        </div>
      </div>
      <div className="info-footer">
        <Link to="/edit"><button className="edit">Edit</button></Link>
        <img src={veganIcon} alt="is Plant Based" className="vegan icon"/>
        <img src={vegetarianIcon} alt="is Vegetarian" className="icon"/>
        <img src={glutenFreeIcon} alt="is Gluten Free" className="icon"/>

      </div>
    </div>
  )
}

export default RecipeTop
