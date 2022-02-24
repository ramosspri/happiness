import React from 'react';
import Cadastro from './Cadastro';
import Lista from './Lista';
import { ContainerLista } from './styles';

const Tabela = () => {
  return (
    <ContainerLista>
      <Cadastro />
      <Lista />
    </ContainerLista>
  );
};

export default Tabela;
