import styled, { keyframes } from 'styled-components';

export const ContainerButton = styled.div`
  display: flex;
  gap: 0.9375rem;
  grid-column: 2/3;
  margin-top: 0.5rem;
`;

export const ButtonRed = styled.button`
  font-family: 'Roboto', sans-serif;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.assets_red};
  height: 40px;
  width: 100%;
  border-radius: 0.625rem;
  border: none;
  font-weight: ${({ theme }) => theme.font.weights.bold};
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    opacity: 0.85;
    transform: scale(1.05);
  }
`;

export const ButtonBlue = styled.button`
  font-family: 'Roboto', sans-serif;
  height: 40px;
  width: 100%;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.assets_blue};
  border-radius: 0.625rem;
  border: none;
  font-weight: ${({ theme }) => theme.font.weights.bold};
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 0.85;
    transform: scale(1.05);
  }
`;
