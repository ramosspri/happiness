import React from 'react';
import { ContainerFooter } from './styles';
import { FaRegCopyright } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
  <ContainerFooter>
    <FaRegCopyright />
    Todos os direitos reservados
  </ContainerFooter>
);
};

export default Footer;
