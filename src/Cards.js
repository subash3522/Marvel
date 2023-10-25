import React from 'react'
import { Link } from 'react-router-dom'

function Cards({name,image,filterByIdHandler,id}) {
 
  return (
   <>
   
  

<div className="card p-1" style={{ width: "18rem", height: '400px' }}>
  <img src={image} className="card-img-top" alt="Hero Photo" style={{ height: '300px', objectFit: 'cover' }} />
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <Link to="/Details" className="btn btn-primary" onClick={() => filterByIdHandler(id)}>
      Description
    </Link>
  </div>
</div>


   </>
  )
}

export default Cards