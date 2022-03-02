import React from 'react';
import { DivMenu, LinkDecoration, LinkSpaces } from './styles';

export const SideMenu = ({ mostra }: any) => {
  return (
    <DivMenu className={mostra}>
      <LinkSpaces>
        <LinkDecoration to="/">Home</LinkDecoration>
      </LinkSpaces>
      <LinkSpaces>
        <LinkDecoration to="/tabela">Tabela</LinkDecoration>
      </LinkSpaces>
    </DivMenu>
  );
};
