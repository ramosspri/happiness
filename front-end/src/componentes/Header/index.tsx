import React from 'react';
import { Logo } from './Logo';
import { ContainerHeader } from './styles';
import { SideMenu } from '../SideMenu';

// import { Container } from './styles';

const Header = () => {
  return (
    <ContainerHeader>
      <SideMenu />
      <Logo />
    </ContainerHeader>
  );
};

export default Header;
