import React from 'react';
import { BlocoUserInfo, ButtonEditar, ButtonLixeira } from './styles';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { themeLight } from '../../../../../styles/themeLight';
import { useCreateContext } from '../../../../../context/UsersContext';

export const ListaContent = () => {
  const { toggle } = useCreateContext();

  function handleDelete(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    console.log(event.currentTarget.dataset.id);
  }
  return (
    <>
    {/* //   <BlocoUserInfo>
    //     <p>1</p>
    //     <p>Priscila</p>
    //     <p>priscila@gmail.com</p>
    //     <ButtonEditar onClick={toggle}>
    //       <FaPencilAlt size={15} color={themeLight.colors.assets_green} />
    //     </ButtonEditar>
    //     <ButtonLixeira onClick={handleDelete}>
    //       <FaTrashAlt size={15} color={themeLight.colors.assets_red} />
    //     </ButtonLixeira>
    //   </BlocoUserInfo> */}
    </>
  );
};
