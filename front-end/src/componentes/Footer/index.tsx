import React from 'react';
import { ContainerFooter, DivIcon } from './styles';
import { FaRegCopyright } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <ContainerFooter>
      <DivIcon>
        <FaRegCopyright />
      </DivIcon>
      Todos os direitos reservados
    </ContainerFooter>
  );
};

export default Footer;
