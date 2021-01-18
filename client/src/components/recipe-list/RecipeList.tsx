import React from 'react';
import RecipeCard from '../recipe-card/RecipeCard';
import './RecipeList.scss';

interface props {
  listTitle: string;
}

const RecipeList: React.FC<props> = (props) => {
  return (
    <div>
      <div className="recipe-list">
        <div>
          <h2>{props.listTitle}</h2>
        </div>
        <div className="list-container">
          <div className="inner">
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeList
