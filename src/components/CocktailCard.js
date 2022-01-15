import React from 'react'

const Cocktail = ({name, image, info, ingredient1,ingredient2}) => {
  return (
    //     <Link to={`cocktail/${id}`} className="btn btn-primary">details</Link>
    <div className="col-sm">
    <div className="card" style={{width: "18rem",marginTop: "2rem"}}>
        <img className="card-img-top" src={image} alt="name" />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text"><b>Description:</b> {info}</p>
            <p className="card-text"><b>Ingredients:</b> {ingredient1}, {ingredient2}</p>
            <button type="button" className="btn btn-primary">Get details</button>
        </div>
    </div>
    </div>
  )
}

export default Cocktail