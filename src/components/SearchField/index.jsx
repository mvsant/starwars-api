import React from "react";
import { StyledInputLabel } from "../Select/style";
import {
  StyledSearchContainer,
  StyledSearchField,
  StyledButton,
} from "./style";

export default function Search(props) {
  const { value, onChange, onClick } = props;

  return (
    <StyledSearchContainer>
      <StyledInputLabel>Search</StyledInputLabel>
      <StyledSearchField 
        value={value}
        onChange={onChange}
      />
      <StyledButton onClick={onClick}>
        <span role="img" aria-label="search">
          &#128270;
        </span>
      </StyledButton>
    </StyledSearchContainer>
  );
}
