import React from 'react';
import { Logo } from './Logo';
import { ContainerHeader, DivMenu, } from './styles';
import { SideMenu } from '../SideMenu';

const Header = () => {
  return (
    <ContainerHeader>
      <DivMenu>
          <SideMenu />
      </DivMenu>
      <Logo />
    </ContainerHeader>
  );
};

export default Header;
