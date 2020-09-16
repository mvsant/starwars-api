import Select from "@material-ui/core/Select";
import styled from "styled-components";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

export const StyledSelect = styled(Select)`
  color: white;
  background-color: var(--transparency-dark);
  :hover {
    color: black;
    background-color: var(--transparency-light);
  }
`;

export const StyledInputLabel = styled(InputLabel)`
  color: white;
  :hover {
    color: green;
  }
  :focus {
    color: black;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  color: var(--secondary-color);
  background-color: var(--transparency-dark);
`;
