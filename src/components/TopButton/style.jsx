import styled from "styled-components";

export const StyledTopButton = styled.button `
cursor: pointer;
color: var(--primary-color);
background-color:var(--transparency-dark);
border-radius:50%;
border:none;
position:fixed;
bottom: 4%;
right: 3%;
@media (hover: hover) and (pointer: fine) {
    :hover{
    color: var(--transparency-dark);
    background-color:var(--transparency-light); 
}
}
`