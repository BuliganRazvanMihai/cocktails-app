import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const ingredientURL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

const [loading, setLoading] = useState(true)
const [searchTerm, setSearchTerm] = useState('a')
const [cocktails, setCocktails] = useState([])
const [ingredients, setIngredients] = useState([])

const fetchDrinks = useCallback(async () => {
  setLoading(true)
  try {
    const response = await fetch(`${url}${searchTerm}`)

    const data = await response.json()
    const {drinks} = data
    if(!drinks) {
       setCocktails([])
    } else {
      const searchedCocktails = drinks.map((drink) => {
        const {idDrink, strDrink, strDrinkThumb, strInstructions,strAlcoholic, strIngredient1,strIngredient2} = drink

        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          isAlcoholic: strAlcoholic,
          info: strInstructions,
          ingredient1: strIngredient1,
          ingredient2: strIngredient2
        }
      })

      setCocktails(searchedCocktails)
    }
    setLoading(false)
  } catch (error) {
    console.log(error)
    setLoading(false)
  }
}, [searchTerm])

const fetchIngredients = useCallback(async () => {
  setLoading(true)
  try {
    const response = await fetch(`${ingredientURL}`)

    const data = await response.json()
    const {drinks} = data
    if(!drinks) {
      setIngredients([])
    } else {
      const searchedIngredients = drinks.map((drink) => {
        const {strIngredient1} = drink

        return {
          ingredient: strIngredient1
        }
      })

      setIngredients(searchedIngredients)
    }
    setLoading(false)
  } catch (error) {
    console.log(error)
    setLoading(false)
  }
}, [])

useEffect(() => {
  fetchDrinks()
  fetchIngredients()
}, [searchTerm, fetchDrinks,fetchIngredients])



  return <AppContext.Provider 
      value={{loading,
              cocktails,
              ingredients,
              setSearchTerm
            }}>
      {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }