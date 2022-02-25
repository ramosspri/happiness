import React from 'react';
import { ContainerBody } from '../ContainerBody/styles';
import { Cadastro } from './Cadastro';
import { Lista } from './Lista';

export const Tabela = () => {
  return (
    <>
      <ContainerBody>
        <Cadastro />
      </ContainerBody>

      <ContainerBody>
        <Lista />
      </ContainerBody>
    </>
  );
};
