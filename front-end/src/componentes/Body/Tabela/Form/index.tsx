import React from 'react';
import { ContainerForm, InputStyled } from './styles';

// import { Container } from './styles';

const Form = () => {
  return (
    <ContainerForm>
      <label htmlFor="id">ID</label>
      <InputStyled type="text" name="id" />

      <label htmlFor="nome">Nome</label>
      <InputStyled type="text" name="nome" />

      <label htmlFor="email">E-mail</label>
      <InputStyled type="text" name="email" />

      <label htmlFor="telefone">Telefone</label>
      <InputStyled type="text" name="telefone" />

      <label>Linguagens</label>
      <label>Frameworks</label>
    </ContainerForm>
  );
};

export default Form;
