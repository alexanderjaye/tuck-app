import React from 'react'



const VariantSelect = () => {
  return (
    <div className="selection-pane">
        <form>
          <div className="sub-recipe-select">
            <label htmlFor="cars">Variants</label>
            <select name="cars" id="variants">
              <option value="Italian Vegan">Italian Vegan</option>
              <option value="original">Original</option>
              <option value="alla norma">Alla norma</option>
              <option value="Ricotta">Ricotta</option>
              <option value="Easy Vegan's">Easy Vegan's</option>
            </select>
          </div>
          <div className="search-by-Ingredient">
            <label htmlFor="searchbying">Search By Ingredient</label>
            <input type="text" name="searchbying" id="search-by-ing"></input>
          </div>
          <div className="matching-variants">
            <label htmlFor="matches">Matching Recipes</label>
            <select name="matches" id="matches">
              <option value="original">Original</option>
              <option value="alla norma">Alla Norma</option>
            </select>
          </div>
        </form>
      </div>
  )
}

export default VariantSelect
