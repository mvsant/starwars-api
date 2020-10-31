import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/star.png";
import {
  StyledLogoImage,
  StyledHeader,
  StyledButton,
  StyledNav,
} from "./style";
import Options from "./Options";
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <StyledHeader>
      <StyledButton
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? <CloseIcon/> : <MenuIcon/>}
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
