import React from "react";
import './Navbar.css'
import {NavLink} from 'react-router-dom'

function Navbar() {

  return (
    <div className="header">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar">
      <NavLink className="navbar-brand" href="#">
        <h1 className="logo-heading">
          <strong style={{color:"red", fontSize:"70px"}}>F</strong>ood<strong style={{color:"red",fontSize:"70px"}}>R</strong>ecipe
        </h1>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
