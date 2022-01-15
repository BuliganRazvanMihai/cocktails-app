import React from 'react'
import { useGlobalContext } from '../helpers/context'

export default function SearchBar() {
  const searchValue = React.useRef('')
  const {setSearchTerm} = useGlobalContext()

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
  }

React.useEffect(() => {
  searchValue.current.focus()
}, [])

    return (
        <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="input-group">
                    <input className="form-control border-secondary py-2" type="search" ref={searchValue} onChange={searchCocktail}/>
                    <div className="input-group-append">
                        <button  onClick={handleSubmit} className="btn btn-outline-secondary" type="button">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
