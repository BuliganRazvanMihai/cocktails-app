import React, {useState} from 'react'
import { useGlobalContext } from './helpers/context'

export default function IngredientPage() {
  var {cocktails} = useGlobalContext()
  const {ingredients} = useGlobalContext()
  const [cocktailList, setCocktailList] = useState([])
  
  const handleDropdownChange = async (e) => {
    const { options } = e.target;
    const selected = [];
    for (const option of options) {
      if (option.selected) selected.push(option.value);
    }
    try{
    console.log(selected)
    //for multiple elements
    //const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${selected.join(",")}`);
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${e.target.value}`)
    const { drinks } = await response.json()
    setCocktailList(drinks)
    } catch(e) {
      console.log(e)
    }
  }

  if(cocktails.length < 1) {
    return <h2 className="section-title">No cocktails available</h2>
  }
    return (
        <div>
          <div className="form-group">
          <label>Select Ingredients</label>
          <select 
          multiple
          className="form-control"
           onChange={handleDropdownChange}>
          {
            ingredients.map((item) => {
                return <option key={item.ingredient} value={item.ingredient}>{item.ingredient}</option>
            })
          }
          </select>
          {/* <button onClick={handleSubmit} type="button" className="btn btn-primary">
             <i className="fas fa-search"></i>
          </button> */}
          </div>
          {
            cocktailList.map((cocktail) => {
              return (
                <div key={cocktail.idDrink} className="col-sm">
                  <div className="card" style={{width: "18rem",marginTop: "2rem"}}>
                  <img className="card-img-top" src={cocktail.strDrinkThumb} alt="name" />
                  <div className="card-body">
                   <h5 className="card-title">{cocktail.strDrink}</h5>
                  </div>
                  </div>
              </div>
              )
            })
          }
        </div>
    )
}
 