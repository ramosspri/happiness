import React from 'react';
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
  return (
    <>
      <BackgroundModal />
      <ConteinerModal>
        <ContainerBody>
          <HeaderModal>X</HeaderModal>
          <Cadastro />
        </ContainerBody>
      </ConteinerModal>
    </>
  );
};
