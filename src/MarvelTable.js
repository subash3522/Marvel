import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MarvelTable({
  thumbnail,
  name,
  discription,
  id,
  detailHandler,
}) {
  return (
    <>

      <tbody className="border border-success" onClick={() => detailHandler(id)}>
      
        <tr className="border border-success" > 
        
          <td>
         
            {" "}
            <img
              style={{ objectFit: "cover", height: "80px", width: "80px" }}
              src={thumbnail + ".jpg"}
              alt="nothing"
            />
          
          </td>
          <td>{name}</td>
          <td>{discription}</td>
        </tr>
          
       
      </tbody>
      
    </>
  );
}

export default MarvelTable;
