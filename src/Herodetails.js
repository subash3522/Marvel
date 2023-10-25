import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Herodetails() {
    const {idh} =  useParams()

    const apiUrl = process.env.REACT_APP_BASE_URL;
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiHash = process.env.REACT_APP_PRIVATE_HASH_KEY;

    const [idHeroDetails,setIdHeroDetails] = useState([])
    
    const idHero = async (id)=>{
        try {
            await axios
              .get(`${apiUrl}/characters/${id}?ts=1&apikey=${apiKey}&hash=${apiHash}`)
              .then((res) => {
                setIdHeroDetails(res.data.data.results);
                
              });
          } catch (err) {
            console.error(err);
          }
    }

    useEffect(()=>{
        idHero(idh)
    },[])
  return (
    <>
    {idHeroDetails.map((value)=>(
        <div>{value.name}</div>
      ))}

    
    </>
  )
}

export default Herodetails