import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    0% {
        transform:rotate(0deg);
    }
    100% {
        transform:rotate(360deg);
    }
`;

export const LoaderStyled = styled.div`
  border: 5px solid ${({ theme }) => theme.colors.light_grey};
  border-top: 5px solid ${({ theme }) => theme.colors.purple};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 10px;
  animation: ${rotate} 2s linear infinite;
`;

export const ContainerLoader = styled.span `
  left:50%;
  position: relative;
`
