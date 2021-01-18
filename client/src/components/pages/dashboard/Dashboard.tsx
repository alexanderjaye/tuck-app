import React from 'react'
import RecipeList from '../../recipe-list/RecipeList'

export default function Dashboard() {
  return (
    <div>
      <RecipeList listTitle="Top Recipes"/>
      <RecipeList listTitle="My Favourites"/> 
    </div>
  )
}
