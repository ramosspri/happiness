import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkDecoration = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.letter_color};
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-family: Montserrat, sans-serif;

  &&:hover {
    color: #6b62ce;
  }
`;

export const LinkSpaces = styled.div`
  margin: 0rem;
  @media (min-width: 50rem) {
    margin-bottom: 1.25rem;
  }
`;

export const DivMenu = styled.div`
  //Div inteira do menu lateral
  grid-area: sidemenu;
  align-items: end;
  @media (min-width: 50rem) {
    border-radius: 0.625rem;
    width: 15.9375rem;
    left: 0rem;
    border: 0.0625rem solid ${({ theme }) => theme.colors.border_grey};
    box-shadow: ${({ theme }) => theme.font.shadow.shadow_container};
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Line = styled.hr`
  border: none;
  @media (min-width: 800px) {
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
    border-bottom: 0.125rem solid;
    color: #372e96;
    width: 13.125rem;
    height: 0.125rem;
  }
`;

export const MenuText = styled.p`
  color: ${({ theme }) => theme.colors.letter_color};

  @media (min-width: 50rem) {
    padding: 1.25rem;
    color: ${({ theme }) => theme.colors.letter_color};
    font-size: ${({ theme }) => theme.font.sizes.xlarge};
    font-weight: ${({ theme }) => theme.font.weights.bold};
    font-family: Montserrat, sans-serif;
  }
`;

export const DivClicaveis = styled.div`
  //Div que envolve apenas os clicáveis
  display: flex;
  align-items: center;
  @media (min-width: 50rem) {
    display: flex;
    flex-direction: columns;
    justify-content: center;
  }
`;

export const DivIcones = styled.div`
  margin-right: 0.625rem;
`;
