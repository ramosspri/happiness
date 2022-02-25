import React from 'react';
import { ButtonBlue, ButtonRed, ContainerButton } from './styles';

export const Button = () => {
  return (
    <ContainerButton>
      <ButtonRed>Cancelar</ButtonRed>
      <ButtonBlue>Salvar</ButtonBlue>
    </ContainerButton>
  );
};
