import React from 'react';
import { SideMenu } from '../SideMenu';
import { Logo } from './Logo';
import { ContainerHeader } from './styles';
import { FaMoon, FaSun, FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Toggle } from '../SideMenu/styles';
import { useCreateContext } from '../../context/UsersContext';

const Header = () => {
  const { clicou, setClicou } = useCreateContext();
  function handleClick() {
    setClicou(!clicou);
  }
  return (
    <ContainerHeader>
      <Logo />
      <SideMenu mostra={'hide2'} />
      <IconContext.Provider
        value={{ color: '6B62CE', className: 'toggle_icons' }}
      >
        <Toggle className={'hide1'} onClick={handleClick}>
          {clicou ? <FaSun /> : <FaMoon />}
        </Toggle>
      </IconContext.Provider>
    </ContainerHeader>
  );
};

export default Header;
