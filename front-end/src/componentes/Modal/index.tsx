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
  function handleCancel() {
    setInput({
      id: '',
      nome: '',
      email: '',
      telefone: '',
      language1: '',
      framework1: '',
      language2: '',
      framework2: '',
    });
  }

  return (
    <>
      <BackgroundModal
        onClick={(e) => {
          handleCancel();
          toggle();
        }}
      />
      <ConteinerModal>
        <ContainerBody>
          <HeaderModal
            onClick={(e) => {
              handleCancel();
              toggle();
            }}
          >
            X
          </HeaderModal>
          <Cadastro />
        </ContainerBody>
      </ConteinerModal>
    </>
  );
};
