import styled from "styled-components";

export const StyledPanelArea = styled.div`
  width: 80%;
  padding: 1%;
  margin: 2% auto;
  background-color: var(--transparency-dark);
  border: 2px solid var(--primary-color);
  border-radius: 2%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "image list list"
    "image list list "
    "image_list image_list image_list ";
  @media screen and (max-width: 768px) {
    width: 99%;
    grid-template-areas:
      ". image ."
      "list list list  "
      "image_list image_list image_list  ";
  }
`;

export const StyledAvatar = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  object-position: 50% 15%;
  border-radius: 50%;
`;

export const StyledListArea = styled.div`
  grid-area: list;
  width: 100%;
  opacity: 1;
  color: white;
  list-style: none;
  ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
  }
  ul a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.1rem;
    margin: 0 1rem;
    text-decoration: none;
    color: #222222;
  }
  ul a > * {
    margin: 0.4rem;
  }
`;

export const StyledPanelImage = styled.img`
  grid-area: image;
  object-fit: cover;
  object-position: 80% 5%;
  border-radius: 5%;
  height: 200px;
  width: 150px;
  order: -1;
  margin: auto 5%;
`;

export const StyledImageList = styled.div`
  grid-area: image_list;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1%;
  > * {
    margin: 0.5%;
  }
  div {
    border: 2px solid white;
    padding: 1.5%;
    border-radius: 2%;
    background-color: var(--transparency-light);
    color: black;
  }
`;
