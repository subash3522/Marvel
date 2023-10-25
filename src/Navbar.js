import React from "react";
import { Link, Routes, BrowserRouter as Router } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav
        className="w-100% d-flex justify-content-between shadow-lg rounded"
        style={{ height: "70px", backgroundColor: "#131921" }}
      >
        <div className="logocontainer h-100  d-flex align-items-center justify-content-center ps-3">
        <Link to="/" className="text-decoration-none">
          <div className="logo text-white border p-2  ">
          Marvel{" "}
          </div>
          </Link>
          
        </div>
        
        <div className="linkcontainer d-flex h-100  d-flex align-items-center justify-content-evenly me-3 w-25">
          <Link to="/MarvelTable " className="text-decoration-none">
            <div className="links text-white text-decoration-none border nav-link disabled p-2">
             
              All Heros
            </div>
          </Link>
          {/* <Link to="/Details">
            <div className="links text-white text-decoration-none border nav-link disabled p-2">
              Hero Details
            </div>
          </Link> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
