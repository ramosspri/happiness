import styled from 'styled-components';

export const BackgroundModal = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background_modal};
  cursor: pointer;
  opacity: 0.3;
  position: fixed;
  padding-left: 1.0625rem;
  padding-right: 1.0625rem;
  z-index: 900;
  top: 0;
  left: 0;
`;

export const ConteinerModal = styled.div`
  background-color: white;
  width: 90%;
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -25%);
  z-index: 1000;
  border-radius: ${({ theme }) => theme.borderRadius.normal};

  @media (min-width: 800px) {
    width: 60%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const HeaderModal = styled.header`
  position: relative;
  top: -20px;
  left: 100%;
  font-weight: ${({ theme }) => theme.font.weights.bold};
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.letter_color};
  width: 5px;
`;
