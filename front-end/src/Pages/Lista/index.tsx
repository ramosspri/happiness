import React from 'react';
import { Tabela } from '../../componentes/Body/Tabela';
import { ContainerMain } from '../../componentes/ContainerMain/ContainerMain';
import { Loader } from '../../componentes/Loader/Loader';
import { useCreateContext } from '../../context/UsersContext';

export const Listaa = () => {
  return (
    <ContainerMain>
      <Tabela />
    </ContainerMain>
  );
};
