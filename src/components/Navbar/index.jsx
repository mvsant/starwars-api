import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/star.png";
import "./style.css";

function Navbar() {
  return (
    <header>
      <img className="topTitle" src={logo} alt="StarWars api" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
          <li>
            <Link to="/planets">Planets</Link>
          </li>
          <li>
            <Link to="/films">Films</Link>
          </li>
          <li>
            <Link to="/vehicles">vehicles</Link>
          </li>
          <li>
            <Link to="/starships">starships</Link>
          </li>
          <li>
            <Link to="/species">Species</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
