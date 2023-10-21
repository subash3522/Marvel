import axios from "axios";
import React, { useEffect, useState } from "react";
import MarvelTable from "./MarvelTable.js";
import Details from "./Details.js";

import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
function Marvel() {
  const [apiData, setApiData] = useState([]);
  const [charName, setCharName] = useState();
  const [charDiscription, setCharDiscription] = useState();

  const apiUrl = process.env.REACT_APP_BASE_URL


  const CallMarvelApi = () => {
    try {
      axios
        .get(
          `${apiUrl}/characters?ts=1&apikey=d659d1321d798a47cc72983456348c34&hash=5f3d304a542792edb78603e37e2a98d1`
        )
        .then((res) => {
          console.log(res.data.results);
          console.log(res.data.data.results[1].name);
          setApiData(res.data.data.results);
        });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    CallMarvelApi();
  }, []);

  const detailHandler = (index) => {
    try {
      axios
        .get(
          "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=d659d1321d798a47cc72983456348c34&hash=5f3d304a542792edb78603e37e2a98d1"
        )
        .then((res) => {
          console.log(res.data.data.results[index].name);
          setCharName(res.data.data.results[index].name);
          setCharDiscription(res.data.data.results[index].discription);
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="ps-3">
        <table className="w-75 ">
          <thead>
            <tr className="border border-success">
              <th>Thumbnail</th>
              <th className="ps-3">Name</th>
              <th>Discription</th>
            </tr>
          </thead>
          {apiData.map((value, index) => (
            <MarvelTable
              key={value.id}
              id={index}
              thumbnail={value.thumbnail.path}
              name={value.name}
              discription={value.description}
              detailHandler={detailHandler}
            />
          ))}
        </table>
      </div>
      {/* <div>{details}</div> */}


      <Router>
        <Routes>
          <Route
            path="/Details"
            element={
              <Details charName={charName} charDiscription={charDiscription} />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default Marvel;
