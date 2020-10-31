import styled from "styled-components";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export const StyledSelect = styled(Select)`
  width: 10ch;
  border-bottom: 1px solid var(--secondary-color);
  border-radius: 20%;
  &.Mui-focused {
    color: var(--primary-color);
    border-bottom: 1px solid var(--primary-color);
  }
  .MuiSelect-icon {
    color: inherit;
  }
  .MuiList-root {
  }
`;

export const StyledInputLabel = styled(InputLabel)`
  padding-bottom: 1rem;
  padding-left:1rem;
  &.Mui-focused {
    color: var(--primary-color);
  }
`;
export const StyledMenuItem = styled(MenuItem)`
  background-color: var(--transparency-dark);
  color: var(--secondary-color);
  :hover {
    color: var(--primary-color);
    background-color: var(--transparency-light);
  }
`;

export const StyledFormControl = styled(FormControl)`
  background-color: var(--transparency-dark);
  border-radius: 20%;
  & > * {
    padding: 0.25rem;
    color: var(--secondary-color);
  }
`;
