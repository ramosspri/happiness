import React from 'react';
import { SideMenu } from '../SideMenu';
import { Logo } from './Logo';
import { ContainerHeader } from './styles';

const Header = () => {
  return (
    <ContainerHeader>
      <SideMenu mostra={'hide2'} />
      <Logo />
    </ContainerHeader>
  );
};

export default Header;
