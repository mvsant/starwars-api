import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/star.png";
import {
  StyledLogoImage,
  StyledHeader,
  StyledButton,
  StyledNav,
} from "./style";
import Options from "./Options";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";

function Navbar(props) {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  console.log(location);
  return (
    <StyledHeader>
      {location.pathname === "/" ? null : (
        <StyledButton
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? <CloseIcon /> : <MenuIcon />}
        </StyledButton>
      )}
      <Link to="/">
        <StyledLogoImage src={logo} alt="StarWars logo, link to home" />
      </Link>
      {location.pathname === "/" ? null : toggle ? (
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
