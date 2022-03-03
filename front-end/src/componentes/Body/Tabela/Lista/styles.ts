import styled from 'styled-components';
import { themeLight } from '../../../../styles/themeLight';

export const ContainerItens = styled.h2`
  display: inline-grid;
  grid-template-columns: 30px 2.25fr 4fr 60px;
  justify-content: space-between 1rem;
`;

export const LinhaBreak = styled.div`
  background-color: ${({ theme }) => theme.colors.assets_blue};
  height: 2px;
  width: 100%;
`;

export const ContainerList = styled.div`
  display: grid;
  gap: 1rem;
`;
