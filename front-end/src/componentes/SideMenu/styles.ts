import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkDecoration = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.letter_color};
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-family: Montserrat, sans-serif;

  &&:hover {
    color: #6B62CE;
  }

  @media (min-width: 800px) {
    color: #444444;
  }
`;

export const LinkSpaces = styled.div`
  margin: 0px;
  @media (min-width: 50rem) {
    margin-bottom: 20px;
  }
`;

export const DivMenu = styled.div` //Div inteira do menu lateral
  grid-area: sidemenu;
  @media (min-width: 800px) {
    border-radius: 0.625rem;
    width: 15.9375rem;
    height: 31.625rem;
    left: 0px;
    border: 0.0625rem solid ${({ theme }) => theme.colors.border_grey};
    box-shadow: ${({ theme }) => theme.font.shadow.shadow_container};
    //padding: 1.9rem 1.6875rem;
    flex-direction: column;
  }
`;

export const Line = styled.hr`
  border: none;
  @media (min-width: 800px) {
    margin-top: 10px;
    margin-bottom: 10px;
    border-bottom: 2px solid;
    color: #372E96;
    width: 13.125rem;
    height: 0.125rem;
  }
`

export const MenuText = styled.p`
  @media (min-width: 800px) {
    padding: 1.25rem;
    color: ${({ theme }) => theme.colors.letter_color};
    font-size: ${({ theme }) => theme.font.sizes.xlarge};
    font-weight: ${({ theme }) => theme.font.weights.bold};
    font-family: Montserrat, sans-serif;
  }
`

export const DivClicaveis = styled.div` //Div que envolve apenas os clicáveis
  display: flex;
  flex-direction: columns;
  justify-content: center;
`

export const DivIcones = styled.div`
  margin-right: 10px;
`
