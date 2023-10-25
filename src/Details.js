import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';

function Details({searchById}) {

//  const {id} = useParams()


  return (
<>

{searchById.map((value,index)=>(
        <div key={index}>
        <div className="card mb-3" style={{ maxWidth: 540 }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={value.thumbnail.path + ".jpg"}
                className="img-fluid rounded-start"
                alt="hero"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{value.name}</h5>
                <p className="card-text">{value.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div>Comics Available:{value.comics.available}</div>
        {value.comics.items.map((value,index) => (
          <li key={index}>{value.name}</li>
        ))}
        <div>Series Available:{value.series.available}</div>
        {value.series.items.map((value,index) => (
          <li key={index}>{value.name}</li>
        ))}
        <div>Stories Available:{value.stories.available}</div>
        {value.stories.items.map((value, index) => (
          <li key={index}>{value.name}</li>
        ))}
      </div>
      ))}



</>
  )
}

export default Details
