import "./App.css";
import Marvel from "./Marvel.js";
import { useEffect, useState } from "react";

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

function App() {

  const apiUrl = process.env.REACT_APP_BASE_URL;
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiHash = process.env.REACT_APP_PRIVATE_HASH_KEY;

  const [searchById, setSearchById] = useState([]);

   
  const filterByIdHandler = async (id) => {
    try {
      await axios
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
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home filterByIdHandler = {filterByIdHandler} />}></Route>
          <Route path="/MarvelTable" element={<MarvelTable />}></Route>
          <Route path="/Details" element= {<Details  searchById = {searchById}/>}></Route>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
