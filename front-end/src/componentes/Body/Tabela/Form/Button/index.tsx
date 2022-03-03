import React from 'react';
import { useCreateContext } from '../../../../../context/UsersContext';
import { ButtonBlue, ButtonRed, ContainerButton } from './styles';

interface UserCancel {
  handleCancel: () => void;
}

export const Button = ({ handleCancel }: UserCancel) => {
  const { mostra, toggle } = useCreateContext();

  return (
    <ContainerButton>
      {!mostra && (
        <ButtonRed type="reset" onClick={handleCancel}>
          Cancelar
        </ButtonRed>
      )}

      <ButtonBlue>{mostra ? 'Atualizar' : 'Salvar'}</ButtonBlue>
    </ContainerButton>
  );
};
function handleSubmit() {
  throw new Error('Function not implemented.');
}
