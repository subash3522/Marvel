import React from "react";
import { useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import Details from "./Details";

import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function Home({ filterByIdHandler }) {
  const apiUrl = process.env.REACT_APP_BASE_URLS;
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiHash = process.env.REACT_APP_PRIVATE_HASH_KEY;

  const [searchInput, setSearchInput] = useState("");
  const [searchDetails, setSearchDetails] = useState([]);

  // REACT_APP_BASE_URLS = https://gateway.marvel.com/v1/public

  const filterMarvelCharacter = async (name) => {
    if (name === "") {
      return handleClear();
    }

    try {
      await axios
        .get(
          `${apiUrl}/characters?ts=1&nameStartsWith=${name}&apikey=${apiKey}&hash=${apiHash}`
        )
        .then((res) => {
          setSearchDetails(res.data.data.results);
        });
    } catch (err) {
      console.error(err);
    }
  };
  const handleClear = () => {
    setSearchDetails([]);
  };

  return (
    <>
      <form className="d-flex justify-content-center mt-3   ">
        <input
          className="form-control me-2 w-50 shadow-lg"
          type="search"
          placeholder="Search for marvel heroes..."
          aria-label="Search"
          onChange={(e) => filterMarvelCharacter(e.target.value)}
        />
        <button className="btn btn-success shadow-lg">Search</button>
      </form>

      <div
        className="container-fluid flex-wrap border"
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit,279px",
        }}
      >
        {searchDetails.map((value, index) => (
          <Cards
            key={value.id}
            name={value.name}
            image={value.thumbnail.path + ".jpg"}
            description={value.description}
            filterByIdHandler={filterByIdHandler}
            id={value.id}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
