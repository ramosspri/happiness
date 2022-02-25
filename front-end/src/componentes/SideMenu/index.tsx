import React from 'react';
import { Link } from 'react-router-dom';
import {LinkDecoration} from './styles'

export const SideMenu = () => {
  return (
    <>
      <LinkDecoration to="/">Home</LinkDecoration>
      <LinkDecoration to="/tabela">Tabela</LinkDecoration>
    </>
  );
};
