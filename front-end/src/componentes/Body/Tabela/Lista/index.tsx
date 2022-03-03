import React from 'react';
import { IconContext } from 'react-icons';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { useCreateContext } from '../../../../context/UsersContext';
import { themeLight } from '../../../../styles/themeLight';
import { ListaContent } from './ListaUsers';
import { ButtonEditar, ButtonLixeira } from './ListaUsers/styles';
import {
  ContainerCabecalho,
  Cabecalho,
  ContainerList,
  ContainerItem,
  Item,
  ContainerItemOculto,
  ParagrafoOculto,
  ContainerParagrafoOculto,
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
            <>
              <ContainerItem key={user.id}>
                <Item>{user.id}</Item>
                <Item>{user.nome}</Item>
                <Item>{user.email}</Item>
                <Item>
                  <ButtonEditar>
                    <IconContext.Provider
                      value={{ className: 'button_editar' }}
                    >
                      <FaPencilAlt size={15} />
                    </IconContext.Provider>
                  </ButtonEditar>
                  <ButtonLixeira>
                    <IconContext.Provider
                      value={{ className: 'button_excluir' }}
                    >
                      <FaTrashAlt size={15} />
                    </IconContext.Provider>
                  </ButtonLixeira>
                </Item>
              </ContainerItem>
              <ContainerItemOculto>
                <ContainerParagrafoOculto>
                  {user.stacks.map((objeto) => {
                    return (
                      <>
                        <ParagrafoOculto>
                          Linguagens: {objeto.language}
                        </ParagrafoOculto>
                        <ParagrafoOculto>
                          Frameworks: {objeto.framework}
                        </ParagrafoOculto>
                      </>
                    );
                  })}
                </ContainerParagrafoOculto>
              </ContainerItemOculto>
            </>
          );
        })}
      </tbody>
    </ContainerList>
  );
};
