import React from 'react'

const VariantSelect = () => {
  return (
    <div className="selection-pane">
        <form>
          <div className="sub-recipe-select">
            <label htmlFor="cars">Variants</label>
            <select name="cars" id="variants">
              <option value="volvo">Vegetarian</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="search-by-Ingredient">
            <label htmlFor="searchbying">Search By Ingredient</label>
            <input type="text" name="searchbying" id="search-by-ing"></input>
          </div>
          <div className="matching-variants">
            <label htmlFor="matches">Matching Recipes</label>
            <select name="matched" id="matches">
              <option value="volvo">Volvo</option>
            </select>
          </div>
        </form>
      </div>
  )
}

export default VariantSelect
