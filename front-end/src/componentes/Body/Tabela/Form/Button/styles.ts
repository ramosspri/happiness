import styled from 'styled-components';

export const ContainerButton = styled.div`
  display: flex;
  gap: 0.9375rem;
  grid-column: 2/3;
`;

export const ButtonRed = styled.button`
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.assets_red};
  height: 40px;
  width: 100%;
  border-radius: 0.625rem;
  border: none;
  font-weight: ${({ theme }) => theme.font.weights.bold};

  font-family: 'Roboto', sans-serif;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const ButtonBlue = styled.button`
  height: 40px;
  width: 100%;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.assets_blue};
  border-radius: 0.625rem;
  border: none;
  font-weight: ${({ theme }) => theme.font.weights.bold};
  font-family: 'Roboto', sans-serif;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
