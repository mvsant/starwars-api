import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledImage = styled.img`
  width: 94px;
  height: 94px;
  animation: ${rotate} 2s linear infinite;
  margin: 3rem;
`;

export const LoadMessage = styled.div`
  color: white;
`;

export const LoadContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width:100vw;
`;
