import React from 'react';
import { Logo } from './Logo';
import MenuMobile from './MenuMobile';
import { ContainerHeader } from './styles';
import { SideMenu } from '../SideMenu';

// import { Container } from './styles';

const Header = () => {
  return (
    <ContainerHeader>
      <MenuMobile />
      <SideMenu />
      <Logo />
    </ContainerHeader>
  );
};

export default Header;
