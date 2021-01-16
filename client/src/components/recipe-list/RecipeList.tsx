import React from 'react'
import RecipeCard from '../recipe-card/RecipeCard'

interface props {
  listTitle: string;
}

const RecipeList: React.FC<props> = (props) => {
  return (
    <div>
      <h2>{props.listTitle}</h2>
      <RecipeCard></RecipeCard>
    </div>
  )
}

export default RecipeList
