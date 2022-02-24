import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

export const SideMenu = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/tabela">Tabela</Link>
    </>
  );
};
