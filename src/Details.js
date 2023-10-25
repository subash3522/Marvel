import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';

function Details({searchById}) {

//  const {id} = useParams()

console.log(searchById);
  return (
<>
{/* <div>{id}58</div> */}
<div>89</div>
{/* <div>{searchById[0].name}</div> */}
{searchById.map((value)=>(
        <div>{value.name}</div>
      ))}



</>
  )
}

export default Details
