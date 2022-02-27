import React from 'react';
import { ButtonBlue, ButtonRed, ContainerButton } from './styles';

interface UserCancel {
  handleCancel: () => void;
}

export const Button = ({ handleCancel }: UserCancel) => {
  return (
    <ContainerButton>
      <ButtonRed onClick={handleCancel}>Cancelar</ButtonRed>
      <ButtonBlue>Salvar</ButtonBlue>
    </ContainerButton>
  );
};
