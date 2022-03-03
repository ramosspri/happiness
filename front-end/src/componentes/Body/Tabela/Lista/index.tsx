import axios from 'axios';
import React from 'react';
import { IconContext } from 'react-icons';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useCreateContext, UsersType } from '../../../../context/UsersContext';
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
  Roxinho,
} from './styles';

export const Lista = () => {
  const { users, toggle, setId, setMudanca } = useCreateContext();
  const [ativoAcordeao, setAtivoAcordeao] = React.useState(false);
  async function handleDelete(id: number | null) {
    await axios.delete(`http://localhost:3001/users/${id}`).then((response) => {
      console.log(response);
    });
    toast.success('Usuário deletado com sucesso');
    setMudanca(true);
  }
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
              <ContainerItem
                key={user.id}
                // onClick={() => setAtivoAcordeao(!ativoAcordeao)}
              >
                <Item>{user.id}</Item>
                <Item>{user.nome}</Item>
                <Item>{user.email}</Item>
                <Item>
                  <ButtonEditar
                    onClick={(e) => {
                      setId(' ' + user.id);
                      toggle();
                    }}
                  >
                    <IconContext.Provider
                      value={{ className: 'button_editar' }}
                    >
                      <FaPencilAlt size={15} />
                    </IconContext.Provider>
                  </ButtonEditar>
                  <ButtonLixeira onClick={(e) => handleDelete(user.id)}>
                    <IconContext.Provider
                      value={{ className: 'button_excluir' }}
                    >
                      <FaTrashAlt size={15} />
                    </IconContext.Provider>
                  </ButtonLixeira>
                </Item>
              </ContainerItem>
              {ativoAcordeao && (
                <ContainerItemOculto key={user.id}>
                  <ContainerParagrafoOculto>
                    <ParagrafoOculto>
                      Linguagens:{' '}
                      <Roxinho>
                        {user.stacks[0].language}, {user.stacks[1].language}
                      </Roxinho>
                    </ParagrafoOculto>
                    <ParagrafoOculto>
                      Frameworks:{' '}
                      <Roxinho>
                        {user.stacks[0].framework}, {user.stacks[1].framework}
                      </Roxinho>
                    </ParagrafoOculto>
                  </ContainerParagrafoOculto>
                </ContainerItemOculto>
              )}
            </>
          );
        })}
      </tbody>
    </ContainerList>
  );
};
