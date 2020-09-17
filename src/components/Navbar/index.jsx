import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/star.png";
//import "./style.css";
import {
  StyledLogoImage,
  StyledHeader,
  StyledButton,
  StyledNav,
} from "./style";
import Options from "./Options";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <StyledHeader>
      <StyledButton
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? "X" : " \u2630 "}
      </StyledButton>
      <Link to="/">
        <StyledLogoImage src={logo} alt="StarWars logo, link to home" />
      </Link>
      {toggle ? (
        <StyledNav>
          <Options />
        </StyledNav>
      ) : (
        <StyledNav visibility="none">
          <Options />
        </StyledNav>
      )}
    </StyledHeader>
  );
}

export default Navbar;
