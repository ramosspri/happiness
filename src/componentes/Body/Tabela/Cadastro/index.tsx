import React from 'react';
import { useCreateContext } from '../../../../context/UsersContext';
import Form from '../Form';
import { Title } from './styles';
export const Cadastro = () => {
  const { mostra } = useCreateContext();

  return (
    <>
      <Title>
        {mostra ? 'Atualização de Usuário' : 'Cadastro de Usuários'}
      </Title>
      <Form />
    </>
  );
};
