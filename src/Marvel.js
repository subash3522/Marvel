import axios from "axios";
import React, { useEffect, useState } from "react";
import MarvelTable from "./MarvelTable.js";
import Details from "./Details.js";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
function Marvel() {
  const [charName, setCharName] = useState();
  const [charDiscription, setCharDiscription] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [searchDetails, setSearchDetails] = useState([]);
  const [searchById, setSearchById] = useState([]);

  const apiUrl = process.env.REACT_APP_BASE_URL;
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiHash = process.env.REACT_APP_PRIVATE_HASH_KEY;

  const barData = [
    { name: "Ram", salary: 20000 },
    { name: "Shyam", salary: 30000 },
    { name: "Hari", salary: 40000 },
  ];

  // ${apiUrl}/characters?ts=1&apikey=d659d1321d798a47cc72983456348c34&hash=5f3d304a542792edb78603e37e2a98d1

  const filterMarvelCharacter = (name) => {
    if (name === "") {
      return null;
    }
    try {
      axios
        .get(
          `${apiUrl}/characters?ts=1&nameStartsWith=${name}&apikey=${apiKey}&hash=${apiHash}`
        )
        .then((res) => {
          console.log(res.data.results);
          setSearchDetails(res.data.data.results);
        });
    } catch (err) {
      console.error(err);
    }
  };

  const detailHandler = (index) => {
    try {
      axios
        .get(`${apiUrl}/characters?ts=1&apikey=${apiKey}&hash=${apiHash}`)
        .then((res) => {
          setCharName(res.data.data.results[index].name);
          setCharDiscription(res.data.data.results[index].discription);
        });
    } catch (err) {
      console.error(err);
    }
  };

  const filterByIdHandler = (id) => {
    try {
      axios
        .get(`${apiUrl}/characters/${id}?ts=1&apikey=${apiKey}&hash=${apiHash}`)
        .then((res) => {
          setSearchById(res.data.data.results);
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {searchById.map((value) => (
        <div>{value.name}</div>
      ))}

      <input
        type="search"
        onChange={(e) => filterMarvelCharacter(e.target.value)}
      />
      <button>Search</button>
      {searchDetails.map((value) => (
        <div onClick={() => filterByIdHandler(value.id)}>{value.name}</div>
      ))}

      {/* <BarChart width={500} height={300} data={apiData}>
      <CartesianGrid strokeDasharray="8 8" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
     
      <Bar dataKey="available" fill="#red" />
    </BarChart> */}
    </>
  );
}

export default Marvel;
