import "./App.css";
import { useEffect, useState } from "react";
import Herodetails from "./Herodetails.js";

import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import MarvelTable from "./MarvelTable";
import Details from "./Details";
import axios from "axios";
import Footer from "./Footer";

function App() {
  const apiUrl = process.env.REACT_APP_BASE_URLS;
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiHash = process.env.REACT_APP_PRIVATE_HASH_KEY;

  const [searchById, setSearchById] = useState([]);

  const filterByIdHandler = async (id) => {
    try {
      await axios
        .get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${apiKey}&hash=${apiHash}`)
        .then((res) => {
          const responseData = res.data.data;
          if (responseData && responseData.results) {
            setSearchById(responseData.results);
          }
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home filterByIdHandler={filterByIdHandler} />}
          ></Route>
          <Route path="/MarvelTable" element={<MarvelTable />}></Route>
          <Route
            path="/Details"
            element={<Details searchById={searchById} />}
          ></Route>
          <Route path="/Herodetail/:idh" element={<Herodetails />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
