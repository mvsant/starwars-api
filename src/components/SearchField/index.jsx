import React from "react";
import { StyledInputLabel } from "../Select/style";
import {
  StyledSearchContainer,
  StyledSearchField,
  StyledButton,
} from "./style";
import SearchIcon from '@material-ui/icons/Search';

export default function Search(props) {
  const { value, onChange, onClick, onKeyPress } = props;

  return (
    <StyledSearchContainer>
      <StyledInputLabel>Search</StyledInputLabel>
      <StyledSearchField
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <StyledButton type="submit" onClick={onClick} aria-label="search">
          <SearchIcon style={{transform: 'scaleX(-1)'}}/>
      </StyledButton>
    </StyledSearchContainer>
  );
}
