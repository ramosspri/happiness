import React from 'react';
import { useCreateContext } from '../../../../context/UsersContext';
import { ListaContent } from './ListaUsers';
import { ContainerItens, ContainerList, LinhaBreak } from './styles';

export const Lista = () => {
  // const { mostra, toggle } = useCreateContext();

  return (
    <ContainerList>
        <ContainerItens>
            <h2>ID</h2>
            <h2>Nome</h2>
            <h2>Email</h2>
            <h2>Ações</h2>
        </ContainerItens>
        <LinhaBreak/>
      <ListaContent/>
    </ContainerList>
  );
};
