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
  border: 10px solid ${({ theme }) => theme.colors.light_grey};
  border-top: 10px solid ${({ theme }) => theme.colors.letter_color};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${rotate} 2s linear infinite;
`;
