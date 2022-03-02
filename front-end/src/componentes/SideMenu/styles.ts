import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkDecoration = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.letter_color};
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-family: Montserrat, sans-serif;

  &&:hover {
    color: ${({ theme }) => theme.colors.letter_color};
  }

  @media (min-width: 800px) {
    color: #444444;
  }
`;

export const LinkSpaces = styled.div`
  align-items: center;
  padding: 0px;
  margin: 0px;
  @media (min-width: 50rem) {
    margin-top: 30px;
  }
`;

export const DivMenu = styled.div`
  justify-content: center;
  grid-area: sidemenu;
  @media (min-width: 800px) {
    border-radius: 0.625rem;
    width: 15.9375rem;
    height: 31.625rem;
    left: 0px;
    border: 0.0625rem solid ${({ theme }) => theme.colors.border_grey};
    box-shadow: ${({ theme }) => theme.font.shadow.shadow_container};
    padding: 1.9rem 1.6875rem;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const Line = styled.hr`
  border: none;
  @media (min-width: 800px) {
    border-bottom: 2px solid;
    color: #372E96;
    width: 12.4375rem;
    height: 0.125rem;
  }
`

export const MenuText = styled.p`
  @media (min-width: 800px) {
    color: ${({ theme }) => theme.colors.letter_color};
    font-size: ${({ theme }) => theme.font.sizes.xlarge};
    font-weight: ${({ theme }) => theme.font.weights.bold};
    font-family: Montserrat, sans-serif;
  }
`
