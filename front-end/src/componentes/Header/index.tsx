import React from 'react';
import { SideMenu } from '../SideMenu';
import { Logo } from './Logo';
import { ContainerHeader } from './styles';

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(true);
  React.useLayoutEffect(() => {
    window.screen.availWidth <= 800 ? setShowMenu(true) : setShowMenu(false);
  }, []);
  return (
    <ContainerHeader>
      {showMenu && <SideMenu />}
      <Logo />
    </ContainerHeader>
  );
};

export default Header;
