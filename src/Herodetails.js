import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Herodetails() {
  const { idh } = useParams();

  const apiUrl = process.env.REACT_APP_BASE_URL;
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiHash = process.env.REACT_APP_PRIVATE_HASH_KEY;

  const [idHeroDetails, setIdHeroDetails] = useState([]);

  const idHero = async (id) => {
    try {
      await axios
        .get(`${apiUrl}/characters/${id}?ts=1&apikey=${apiKey}&hash=${apiHash}`)
        .then((res) => {
          setIdHeroDetails(res.data.data.results);
        });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    idHero(idh);
  }, []);
  return (
    <>
      {idHeroDetails.map((value) => (
      
        <div>
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
          {value.comics.items.map((value) => (
            <li>{value.name}</li>
          ))}
          <div>Series Available:{value.series.available}</div>
          {value.series.items.map((value) => (
            <li>{value.name}</li>
          ))}
          <div>Stories Available:{value.stories.available}</div>
          {value.stories.items.map((value) => (
            <li>{value.name}</li>
          ))}
        </div>
      ))}
    </>
  );
}

export default Herodetails;
