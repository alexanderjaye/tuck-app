import React from 'react';
import RecipeList from '../../recipe-list/RecipeList';
import './Dashboard.scss';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <RecipeList listTitle="Top Recipes"/>
      <RecipeList listTitle="Favourites"/> 
    </div>
  )
}
