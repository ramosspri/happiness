import React from 'react';
import { SideMenu } from '../SideMenu';
import { Logo } from './Logo';
import { ContainerHeader } from './styles';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';

const Header = () => {
  return (
    <ContainerHeader>
      {/* <FaToggleOff
        size="1.25rem"
        color="#444444"
        style={{ position: 'absolute', right: '30px' }}
      />
      <FaToggleOn /> */}
      <Logo />

      <SideMenu mostra={'hide2'} />
    </ContainerHeader>
  );
};

export default Header;
