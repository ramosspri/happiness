import axios from 'axios';
import React from 'react';
import { IconContext } from 'react-icons';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useCreateContext } from '../../../../context/UsersContext';
import { Loader } from '../../../Loader/Loader';
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
  const { users, toggle, setMudanca, setInput, loader, setLoader } =
    useCreateContext();
  const [ativoAcordeao, setAtivoAcordeao] = React.useState('0');

  function handleToggle(index: string) {
    if (ativoAcordeao === index) {
      return setAtivoAcordeao('0');
    }
    setAtivoAcordeao(index);
  }

  async function handleDelete(id: number | null) {
    setMudanca(true);
    await axios
      .delete(`http://localhost:3001/users/${id}`)
      .then((response) => {});

    toast.success('Usuário deletado com sucesso');
  }

  async function handleEditar(id: number | null) {
    setLoader(true);

    const user = await axios
      .get(`http://localhost:3001/users/${id}`)
      .then((response) => {
        setInput({
          id: response.data.id,
          nome: response.data.nome,
          email: response.data.email,
          telefone: response.data.telefone,
          language1: response.data.stacks[0].language,
          framework1: response.data.stacks[0].framework,
          language2: response.data.stacks[1].language,
          framework2: response.data.stacks[1].framework,
        });
      });
    setLoader(false);

    toggle();
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
        {loader ? (
          <Loader />
        ) : (
          users.map((user, index) => {
            return (
              <>
                <ContainerItem
                  onClick={(e) => handleToggle('' + (index + 1))}
                  key={user.nome}
                >
                  <Item key={user.id}>{user.id}</Item>
                  <Item key={user.nome}>{user.nome}</Item>
                  <Item key={user.email}>{user.email}</Item>
                  <Item key={index}>
                    <ButtonEditar
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditar(user.id);
                      }}
                    >
                      <IconContext.Provider
                        value={{ className: 'button_editar' }}
                      >
                        <FaPencilAlt size={15} />
                      </IconContext.Provider>
                    </ButtonEditar>
                    <ButtonLixeira
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(user.id);
                      }}
                    >
                      <IconContext.Provider
                        value={{ className: 'button_excluir' }}
                      >
                        <FaTrashAlt size={15} />
                      </IconContext.Provider>
                    </ButtonLixeira>
                  </Item>
                </ContainerItem>

                {ativoAcordeao === '' + (index + 1) && (
                  <ContainerItemOculto key={user.email}>
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
          })
        )}
      </tbody>
    </ContainerList>
  );
};
