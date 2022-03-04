import styled, { keyframes } from 'styled-components';
import { themeLight } from '../../../../styles/themeLight';

export const ContainerCabecalho = styled.tr`
  border-bottom: 2px solid ${({ theme }) => theme.colors.assets_blue};
`;

export const Cabecalho = styled.th`
  color: ${({ theme }) => theme.colors.cabecalho_color};
  font-weight: ${({ theme }) => theme.font.weights.bold};
  font-size: 1rem;
  padding-bottom: 0.5rem;

  /* width:12.5rem; */
`;
export const Item = styled.td`
  text-align: center;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 0.625rem;
  vertical-align: middle;

  &:nth-child(1) {
    padding: 0;
  }

  &:nth-child(4) {
    min-width: 4rem;
  }
`;
export const ContainerItem = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.linha_color};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.linha_color};
    cursor: pointer;
    /* font-weight: ${({ theme }) => theme.font.weights.bold}; */
    transform: scale(1.01);
  }
`;

// Create the keyframes
const cresce = keyframes`
  0% {
    transform: translateY(-1rem);
  }
  100% {
        transform: translateY(0rem);
  }
`;

export const ContainerItemOculto = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.linha_color};
  /* padding: 0.625rem; */
`;

export const ParagrafoOculto = styled.p`
  color: ${({ theme }) => theme.colors.letter_color};
  text-transform: capitalize;
  animation: ${cresce} 0.1s ease-out;
`;

export const ContainerParagrafoOculto = styled.td.attrs({
  colSpan: 2,
})`
  padding: 10px;
`;

export const Roxinho = styled.span`
  color: ${({ theme }) => theme.colors.purple};
  font-weight: ${({ theme }) => theme.font.weights.bold};
`;

export const LinhaBreak = styled.div`
  background-color: ${({ theme }) => theme.colors.assets_blue};
  height: 2px;
  width: 100%;
`;

export const ContainerList = styled.table`
  /* border:1px solid red; */
  width: 100%;
  border-spacing: 0.625rem;
  border-collapse: collapse;
`;
