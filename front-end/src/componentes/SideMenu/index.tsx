import React from 'react';
import { ContainerBody } from '../Body/ContainerBody/styles';
import { DivMenu, LinkDecoration, LinkSpaces } from './styles';

export const SideMenu = ({ mostra }: any) => {
  console.log(window.screen.availWidth);
  return (
    <DivMenu className={mostra}>
      <ContainerBody>
      <LinkSpaces>
        <LinkDecoration to="/">Home</LinkDecoration>
      </LinkSpaces>
      <LinkSpaces>
        <LinkDecoration to="/tabela">Tabela</LinkDecoration>
      </LinkSpaces>
      </ContainerBody>
    </DivMenu>
  );
};
