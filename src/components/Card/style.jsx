import styled from "styled-components";
import Card from "@material-ui/core/Card";

export const CardStyled = styled(Card)`
  background-color: var(--transparency-dark);
  border: 1px solid var(--secondary-color);
  color: inherit;
  text-align: center;
  &:hover {
    transform: scale(1.1);
  }
`;
