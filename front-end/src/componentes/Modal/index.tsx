import axios from 'axios';
import React from 'react';
import { getUser } from '../../api/api';
import { useCreateContext } from '../../context/UsersContext';
import { ContainerBody } from '../Body/ContainerBody/styles';
import { Cadastro } from '../Body/Tabela/Cadastro';
import { BackgroundModal, ConteinerModal, HeaderModal } from './styles';

export interface ModalProps {
  mostra: boolean;
  toggle: () => void;
  chave: string | null | number;
}

export const useModal = () => {
  const [mostra, setMostra] = React.useState<boolean>(false);
  const toggle = () => {
    setMostra(!mostra);
  };
  return {
    mostra,
    toggle,
  };
};

export const Modal = () => {
  const { toggle, id, setInput } = useCreateContext();
  let identificacao = +id;
  async function getUser() {
    const user = await axios
      .get(`http://localhost:3001/users/${identificacao}`)
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
  }
  getUser();
  return (
    <>
      <BackgroundModal onClick={toggle} />
      <ConteinerModal>
        <ContainerBody>
          <HeaderModal onClick={toggle}>X</HeaderModal>
          <Cadastro />
        </ContainerBody>
      </ConteinerModal>
    </>
  );
};
