import styled from "styled-components";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";

export const StyledSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  background-color: var(--transparency-dark);
  border-radius: 20%;
  border-bottom: 1px solid var(--secondary-color);
  width: 17ch;
  :focus-within {
    border-bottom: 1px solid var(--primary-color);
  }
`;

export const StyledSearchField = styled(InputBase)`
  color: var(--secondary-color);
  padding: 0.5rem;
  &.Mui-focused {
    color: var(--primary-color);
  }
`;

export const StyledButton = styled(Button)`
  height: 4ch;
  margin: auto;
`;
