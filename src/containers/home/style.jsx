import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/Card";

export const CardStyled = styled(Card)`
  background-color: var(--transparency-dark);
  border: 1px solid var(--secondary-color);
  img{
    height:auto;
    max-width:50px;
}
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
  min-height: 60vh;
  a {
    margin: 1rem 2rem;
    text-decoration: none;
    color: var(--secondary-color);
  }
  a:visited {
    color: var(--secondary-color-dark);
  }
  @media (max-width: 768px) {
    flex-direction: column;
  img {
    height: 50vh;
    object-position: 0 50%;
    object-position: 0 0;

  }
  }
`;

export const StyledLink = styled(Link)`
color: var(--primary-color);
text-decoration:none;
:visited {
  color: var(--primary-color-dark);
}
`
