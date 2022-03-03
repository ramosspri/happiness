import styled from 'styled-components';
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
