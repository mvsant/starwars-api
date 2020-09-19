import React from "react";
import {
  StyledSearchContainer,
  StyledSearchField,
  StyledButton,
} from "./style";

export default function Search(props) {
  const { placeholder, value, onChange, onClick } = props;

  return (
    <StyledSearchContainer>
      <StyledSearchField
        placeholder={placeholder}
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
