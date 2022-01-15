import React, {useState,useEffect} from 'react'
import CocktailCard from './CocktailCard'
import { useGlobalContext } from '../helpers/context'

export default function Cocktails() {
  const [isAlcoholic, setIsAlcoholic] = useState(false);
  const [isNonAlcoholic,setIsNotAlcoholic] = useState(false);
  const {cocktails} = useGlobalContext();
  const [cocktailsList, setCocktailsList] = useState([])

  useEffect(() => {
    if ((isAlcoholic && isNonAlcoholic) || (!isAlcoholic && !isNonAlcoholic)) {
        setCocktailsList(cocktails)
    } else if (isAlcoholic && !isNonAlcoholic) {
        setCocktailsList(cocktails.filter(cocktail => cocktail.isAlcoholic === "Alcoholic"))
    } else if (isNonAlcoholic && !isAlcoholic) {
        setCocktailsList(cocktails.filter(cocktail => cocktail.isAlcoholic === "Non alcoholic"))
    }
  }, [isAlcoholic, isNonAlcoholic,cocktails]);

  if(cocktails.length < 1) {
    return <h2 className="section-title">No cocktails available</h2>
  }

    return (
        <div>
        <div className="row">
        <div className="form-check">
        <label className="form-check-label" htmlFor="alcoholic">
        Alcoholic
            <input 
            className="form-check-input" 
            type="checkbox"  
            style={{marginLeft: '5px', marginTop: '7px'}}
            onChange={(event) => {
                setIsAlcoholic(event.target.checked);
              }} />
          </label>
        </div>
        </div>
        <div className="row">
        <div className="form-check">
        <label className="form-check-label" htmlFor="non-alcoholic">
        Non alcoholic
            <input 
            className="form-check-input" 
            type="checkbox"  
            style={{marginLeft: '5px', marginTop: '7px'}}
            onChange={(event) => {
                setIsNotAlcoholic(event.target.checked);
              }} />
          </label>
        </div>
        </div>
        <div className="container">
        <div className="row">
        {
            cocktailsList.map((item) => {
                return <CocktailCard key={item.id} {...item}/>
            })
        }
        </div>
        </div>
        </div>
    )
}
