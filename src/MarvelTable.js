import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MarvelTable({ detailHandler }) {
  const [apiData, setApiData] = useState([]);

  const apiUrl = process.env.REACT_APP_BASE_URL;
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiHash = process.env.REACT_APP_PRIVATE_HASH_KEY;

  const CallMarvelApi = () => {
    try {
      axios
        .get(`${apiUrl}/characters?ts=1&apikey=${apiKey}&hash=${apiHash}`)
        .then((res) => {
        
          setApiData(res.data.data.results);
        });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    CallMarvelApi();
  }, []);

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
            <tbody className="border border-success">
              <tr className="border border-success">
                <td>
                  {" "}
                  <img
                    style={{
                      objectFit: "cover",
                      height: "80px",
                      width: "80px",
                    }}
                    src={value.thumbnail.path + ".jpg"}
                    alt="nothing"
                  />
                </td>
                <td>{value.name}</td>
                <td>{value.description}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}

export default MarvelTable;
