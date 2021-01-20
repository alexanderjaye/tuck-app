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
            <li>Finely chop or crush garlic & parsley</li>
            <li>Finely grate the parmesan</li>
            <li>Beat the eggs in a bowl</li>
            <li>Cut the facon into lardons or cubes</li>
            <li>Bring 4.5 litres/8 pints water to the boil in a large saucepan with 8 teaspoons of salt.</li>
          </ol>
          <div className="header cook">Cook</div>
          <ol>
            <li>Add the spaghetti and cook for 9 minutes, or until al dente.</li>
            <li>Heat a large, deep frying pan over a medium–high heat, add the oil and the facon and fry until lightly golden. Add the garlic and parsley and cook for a few seconds, then remove from the heat and set aside.</li>
            <li>Drain the spaghetti well and tip into the frying pan with the pancetta, garlic and parsley. Add the beaten eggs and half the cheese and toss together well.</li>
          </ol>
          <div className="header finish">Finish</div>
          <ol>
            <li>Season to taste with salt and pepper. The heat from the spaghetti will be sufficient to partly cook the egg, but still leave it moist and creamy.</li>
            <li>Take to the table and serve in warmed pasta bowls, sprinkled with the rest of the cheese.</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default RecipeInstructions
