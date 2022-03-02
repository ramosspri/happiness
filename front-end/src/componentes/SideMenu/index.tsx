import React from 'react';
import { DivMenu, LinkDecoration, LinkSpaces } from './styles';

export const SideMenu = () => {
  console.log(window.screen.availWidth);
  return (
    <DivMenu>
      <LinkSpaces>
        <LinkDecoration to="/">Home</LinkDecoration>
      </LinkSpaces>
      <LinkSpaces>
        <LinkDecoration to="/tabela">Tabela</LinkDecoration>
      </LinkSpaces>
    </DivMenu>
  );
};
