import styled from 'styled-components';
import { themeLight } from '../../../../styles/themeLight';

export const ContainerCabecalho = styled.tr`
  border-bottom:2px solid ${({theme}) => theme.colors.primary};
  
`;


export const Cabecalho = styled.th`
  color: ${({theme}) => theme.colors.cabecalho_color};
  font-weight: ${({theme}) => theme.font.weights.bold};
  font-size:1rem;
  padding-bottom:.5rem;

  /* width:12.5rem; */
`;
export const Item = styled.td`
text-align:center;
padding-top:.625rem;
padding-bottom:.625rem;
/* margin:10px; */
`;
export const ContainerItem = styled.tr`
    border-bottom:1px solid ${({theme}) => theme.colors.linha_color};
`;

export const LinhaBreak = styled.div`
  background-color: ${({ theme }) => theme.colors.assets_blue};
  height: 2px;
  width: 100%;
`;

export const ContainerList = styled.table`
  /* border:1px solid red; */
  width:100%;
  border-spacing:10px;
  border-collapse: collapse;

`;
