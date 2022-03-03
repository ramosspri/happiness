import React from 'react';
import { useCreateContext } from '../../../../context/UsersContext';
import { HeaderModal } from '../../../Modal/styles';
import Form from '../Form';
import { Title } from './styles';
// import Logo from '../../../../assets/carlos';
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
