import React from 'react';
import { Link } from 'react-router-dom';
import {LinkDecoration, LinkSpaces} from './styles'

export const SideMenu = () => {
  return (
    <>
    <LinkSpaces>
      <LinkDecoration to="/">Home</LinkDecoration>
    </LinkSpaces>
    <LinkSpaces>
      <LinkDecoration to="/tabela">Tabela</LinkDecoration>
    </LinkSpaces>
    </>
  );
};
