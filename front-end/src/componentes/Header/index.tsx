import React from 'react';
import { Logo } from './Logo';
import { ContainerHeader } from './styles';
import { SideMenu } from '../SideMenu';

const Header = () => {
  return (
    <ContainerHeader>
      <SideMenu />
      <Logo />
    </ContainerHeader>
  );
};

export default Header;
