import React from 'react';
import { useCreateContext } from '../../../../context/UsersContext';
import { ListaContent } from './ListaUsers';
import {
  ContainerCabecalho,
  Cabecalho,
  ContainerList,
  ContainerItem,
  LinhaBreak,
  Item,
} from './styles';

export const Lista = () => {
  const { users } = useCreateContext();

  return (
    <ContainerList>
      <tbody>
        <ContainerCabecalho>
          <Cabecalho>ID</Cabecalho>
          <Cabecalho>Nome</Cabecalho>
          <Cabecalho>Email</Cabecalho>
          <Cabecalho>Ações</Cabecalho>
        </ContainerCabecalho>
        {users.map((user) => {
          return (
            <ContainerItem key={user.id}>
              <Item>{user.id}</Item>
              <Item>{user.nome}</Item>
              <Item>{user.email}</Item>
              <Item>Ações</Item>
            </ContainerItem>
          );
        })}
      </tbody>
    </ContainerList>
  );
};
