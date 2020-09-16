import styled from "styled-components";

export const StyledImage = styled.img`
  width: 50%;
  height: 60%;
  transform: perspective(200px) rotateX(40deg);
`;

export const StyledHeader = styled.header`
  margin-bottom: 1rem;
  background-color: var(--transparency-dark);
`;

export const StyledButton = styled.button`
  order: 3;
  font-size: 30px;
  margin-right: 30px;
  color: var(--secondary-color);
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const StyledNav = styled.nav`
  ul {
    height: auto;
    display: ${(props) => props.visibility || "flex"};
    flex-direction: column;
    flex-wrap: wrap;
    li a {
      text-decoration: none;
      color: var(--primary-color);
      font-size: 1.2rem;
      margin: 1rem;
    }
    li a:visited {
      color: var(--primary-color-dark);
    }
    @media screen and (min-width: 768px) {
      flex-direction: row;
      display: flex;
      li a {
        text-decoration: none;
        color: var(--primary-color);
        font-size: 1.2rem;
        padding: 0.5rem;
        margin: 1rem;
      }
    }
  }
`;

export const activeStyle = {
  fontWeight: "bold",
  color: "var(--primary-color)",
};
