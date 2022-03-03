import React from 'react';
import { ListaContent } from './ListaUsers';
import { ContainerCabecalho, Cabecalho, ContainerList, ContainerItem, LinhaBreak, Item } from './styles';

export const Lista = () => {
  return (

    <ContainerList>
      <ContainerCabecalho>
        <Cabecalho>ID</Cabecalho>
        <Cabecalho>Nome</Cabecalho>
        <Cabecalho>Email</Cabecalho>
        <Cabecalho>Ações</Cabecalho>
      </ContainerCabecalho>

      <ContainerItem>
        <Item>1</Item>
        <Item>Carlos</Item>
        <Item>carlos@gmail.com</Item>
        <Item>Ações</Item>
      </ContainerItem>

       {/* <ListaContent /> */}
    </ContainerList>
  );
};
