import React from "react";
import { StyledSelect, StyledInputLabel, StyledMenuItem } from "./style";
import FormControl from "@material-ui/core/FormControl";

function Select(props) {
  let { counter, onChange } = props;
  let list = [];

  for (let i = 0; i < counter / 10; i++) {
    list.push(
      <StyledMenuItem key={i} value={i + 1}>
        Page {i + 1}
      </StyledMenuItem>
    );
  }

  return (
    <FormControl>
      <StyledInputLabel>Page</StyledInputLabel>
      <StyledSelect variant="filled" onChange={onChange}>
        {list}
      </StyledSelect>
    </FormControl>
  );
}
export default Select;
