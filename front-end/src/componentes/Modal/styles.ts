import React from 'react';
import styled from 'styled-components';

export const BackgroundModal = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background_modal};
  opacity: 0.3;
  position: fixed;
  padding-left: 1.0625rem;
  padding-right: 1.0625rem;
`;

export const ConteinerModal = styled.div`
  background-color: white;
  width: 90%;
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -25%);
  border-radius: ${({ theme }) => theme.borderRadius.normal};
`;

export const HeaderModal = styled.header`
  display: flex;
  justify-content: flex-end;
  position: relative;
  top: -1.0625rem;
  left: 0.625rem;
  font-weight: ${({ theme }) => theme.font.weights.bold};
`;
