import React from 'react';
import { useCreateContext } from '../../../../../context/UsersContext';
import { ButtonBlue, ButtonRed, ContainerButton } from './styles';

interface UserCancel {
  handleCancel: () => void;
}

export const Button = ({ handleCancel }: UserCancel) => {
  const { mostra } = useCreateContext();

  return (
    <ContainerButton>
      <ButtonRed type="reset" onClick={handleCancel}>
        Cancelar
      </ButtonRed>
      <ButtonBlue>{mostra ? 'Atualizar' : 'Salvar'}</ButtonBlue>
    </ContainerButton>
  );
};
