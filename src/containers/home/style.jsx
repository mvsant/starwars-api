import styled from "styled-components";
import Card from "../../components/Card";

export const CardStyled = styled(Card)`
  background-color: var(--transparency-dark);
  border: 1px solid var(--secondary-color);
`;

export const StyledHome = styled.div`
  color: var(--primary-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;
`;

export const StyledHomeList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  a {
    margin: 1rem 2rem;
    text-decoration: none;
    color: var(--secondary-color);
  }
  a:visited {
    color: var(--secondary-color-dark);
  }
`;
