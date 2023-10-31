import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Marveltable.css";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function MarvelTable({ detailHandler }) {
  const [apiData, setApiData] = useState([]);
  const [loded, setloded] = useState(true);

  const apiUrl = process.env.REACT_APP_BASE_URL;
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiHash = process.env.REACT_APP_PRIVATE_HASH_KEY;

  const CallMarvelApi = () => {
    try {
      axios
        .get(`${apiUrl}/characters?ts=1&apikey=${apiKey}&hash=${apiHash}`)
        .then((res) => {
          localStorage.setItem(
            "localapi",
            JSON.stringify(res.data.data.results)
          )
          setApiData(res.data.data.results)
          setloded(false);
        });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const cachedData = localStorage.getItem("localapi");

    if (cachedData) {
      setloded(false)
      setApiData(JSON.parse(cachedData));
    } else {
      CallMarvelApi();
    }
  }, []);

  console.log(loded);
  return (
    <>
      <div className="ps-3">
        <table className="w-100 marvel-table ">
          <thead>
            <tr className="border border-success">
              <th>Thumbnail</th>
              <th className="ps-3">Name</th>
              <th>Description</th>
            </tr>
          </thead>

          {loded?<Loader/>:
          apiData.map((value, index) => (
            <tbody className="border border-success" key={index}>
              <tr className="border border-success">
                <td>
                  <Link to={`/Herodetail/${value.id}`}>
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
                  </Link>
                </td>
                <td>
                  <Link to={`/Herodetail/${value.id}`}>{value.name}</Link>
                </td>
                <td>
                  <Link to={`/Herodetail/${value.id}`}>
                    {value.description}
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}

export default MarvelTable;
