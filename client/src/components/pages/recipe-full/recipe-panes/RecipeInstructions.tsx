import React from 'react'
import { FaPlay } from 'react-icons/fa'

const RecipeInstructions = () => {
  return (
    <div className="method">
      <div className="title">
        <h1 className="cook-it">Cook It!</h1>
      </div>
      <div className="card">
        <div className="prep">
        <button><FaPlay size={24}/></button>
          <div className="header prepare">Prepare</div>
          <ol>
            <li>chop the onions</li>
            <li>boil the carrots</li>
          </ol>
          <div className="header cook">Cook</div>
          <ol>
            <li>chop the onions</li>
            <li>boil the carrots</li>
          </ol>
          <div className="header finish">Finish</div>
          <ol>
            <li>chop the onions</li>
            <li>boil the carrots</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default RecipeInstructions
