import React from 'react';
import { SideMenu } from '../SideMenu';
import { Logo } from './Logo';
import { ContainerHeader } from './styles';
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const Header = () => {
  return (
    <ContainerHeader>
      <FaToggleOff size="1.25rem" color="grey" style={{position:'absolute', right:'30px'}}/>
      {/* <FaToggleOn/> */}
      <SideMenu mostra={'hide2'} />
      <Logo />
    </ContainerHeader>
  );
};

export default Header;
