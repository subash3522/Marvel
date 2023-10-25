import React from 'react'
import { Link } from 'react-router-dom'

function Cards({name,image,filterByIdHandler,id}) {
 
  return (
   <>
   
   <div className="card " style={{ width: "18rem",height:'500px'  }}>
  <img src={image} className="card-img-top" alt="Hero Photo" />
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    ;
    <Link to="/Details" className="btn btn-primary" onClick={()=>filterByIdHandler(id)}>
     Description
    </Link>
  </div>
</div>

   </>
  )
}

export default Cards