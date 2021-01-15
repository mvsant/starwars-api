import { StyledInner, StyledLogo, StyledOuter } from "./style";
import logo from "../../assets/star.png";
import { useEffect } from "react";

export default function About() {

  useEffect(() => {
    function effect() {
      //Using multiplier due landscape screens.
        window.scrollTo(0, window.innerHeight*4);
    }
    return effect();
  }, []);
  
  return (
    <StyledOuter>
      <StyledInner>
        <StyledLogo src={logo} alt="Star Wars api" />
        <p>Star wars API, created for the study of consumption of APIS.</p>
        <p>Proudly created with React !</p>
        <p>
          This project make use of: React, React-router-dom, Material-UI and
          Styled-components.
        </p>
        <p>
          Note: all images were obtained from the website wookiepedia, which can be removed
          without notice.
        </p>
        <p>
          All images belong to their respective owners and are protected under
          legal terms.
        </p>
        <br/>
        <p>2020. Marlon Veiga :)</p>
      </StyledInner>
    </StyledOuter>
  );
}
