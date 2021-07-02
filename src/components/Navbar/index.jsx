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
import { index } from "../../utils/api";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  let [data, setData] = React.useState(""); // state hook

  React.useEffect(() => {
    index(setData);
  }, []);

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
          <Options data={data} />
        </StyledNav>
      ) : (
        <StyledNav visibility="none">
          <Options data={data} />
        </StyledNav>
      )}
    </StyledHeader>
  );
}

export default Navbar;
