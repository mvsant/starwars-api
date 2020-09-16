import React from "react";
import Saber from "../../assets/saber.png";
import { StyledImage, LoadMessage, LoadContainer } from "./style";

export default function Loading() {
  return (
    <LoadContainer>
      <StyledImage src={Saber} alt="Loading Spinner" />
      <LoadMessage>Loading...</LoadMessage>
    </LoadContainer>
  );
}
