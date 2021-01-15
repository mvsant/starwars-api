import styled, { keyframes } from "styled-components";

export const StyledOuter = styled.div`
  font-size: 12vw;
  line-height: 1.3;
  overflow: hidden;
  perspective: 300px;
  perspective-origin: bottom;
  transform: scaleY(0.8);
  margin: -45% auto;
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    font-size: 5vw;
    perspective: 250px;
    margin: -10% auto;
  }
`;

const playDesk = keyframes`
0%{
    transform: rotateX(6deg) translate3d(0,100rem,0);
    opacity:1;
}
85%{
    opacity:1;
}
100%{
    transform: rotateX(6deg) translate3d(0,-150rem,0);
    opacity:0;
}
`;

const playMobile = keyframes`
0%{
    transform: rotateX(5deg) translate3d(0,100rem,0);
    opacity:1;
}
85%{
    opacity:1;
}
100%{
    transform: rotateX(5deg) translate3d(0,-150rem,0);
    opacity:0;
}
`;

export const StyledInner = styled.div`
  @media screen and (min-width: 768px) {
    animation: ${playDesk} 45s infinite;
  }
  animation: ${playMobile} 55s infinite;
`;

export const StyledLogo = styled.img`
max-width:90vw;
`
