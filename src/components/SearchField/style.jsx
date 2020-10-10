import styled from "styled-components";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import { FormControl } from "@material-ui/core";

export const StyledSearchContainer = styled(FormControl)`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items:center;
  background-color: var(--transparency-dark);
 padding: .7rem;
  border-radius: 20%;
  border-bottom: 1px solid var(--secondary-color);
  width: 15ch;
  :focus-within {
    border-bottom: 1px solid var(--primary-color);
  }
  & > * {    
    color: var(--secondary-color);
  }
`;

export const StyledSearchField = styled(InputBase)`
  color: var(--secondary-color);
  width: 10ch;
  &.Mui-focused {
    color: var(--primary-color);
  }
`;

export const StyledButton = styled(Button)`
  height: 4ch;
  margin: auto;
`;
