import styled from 'styled-components';

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.letter_color};
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: ${({ theme }) => theme.font.weights.bold};
  font-family: 'Montserrat', sans-serif;
  text-align: center;

  @media (min-width: 50rem) {
    text-align: left;
    font-size: ${({ theme }) => theme.font.sizes.large};
  }
`;
