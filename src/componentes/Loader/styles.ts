import styled, { keyframes } from 'styled-components';

export const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
export const LoaderStyled = styled.div`
  border: .3125rem solid
    ${({ theme }) => {
      return theme.colors.light_grey;
    }};
  border-top: .3125rem solid
    ${({ theme }) => {
      return theme.colors.purple;
    }};
  border-radius: 50%;
  width: 3.125rem;
  height: 3.125rem;
  animation: ${rotate} 2s linear infinite;
  grid-column: span 4;
  position: relative;
  left: 50%;
  margin-top: .625rem;
`;
