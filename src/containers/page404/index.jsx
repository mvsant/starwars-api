import React from "react";
import Img from "../../assets/not_found.gif"
import { StyledNotFound } from "./style";

function page404() {
  return (
    <StyledNotFound>
    <h1>Page not found</h1>
    <img src={Img} alt="Page no Found"/>
    </StyledNotFound>
  );
}

export default page404;
