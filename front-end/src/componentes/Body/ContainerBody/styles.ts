import React from 'react';
import styled from 'styled-components';
// import { Container } from './styles';

export const ContainerBody = styled.div`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border_grey};
  box-shadow: ${({ theme }) => theme.font.shadow.shadow_container};
  padding: 1.9rem 1.6875rem;
  box-sizing: border-box;
  position: relative;
  & + & {
    margin-top: 1rem;
  }
`;
