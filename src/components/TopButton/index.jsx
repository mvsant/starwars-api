import React from "react";
import { StyledTopButton } from "./style";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

export default function TopButton() {
    return(
        <StyledTopButton onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth'
            });
          }}><KeyboardArrowUpIcon/></StyledTopButton>
    )
}
