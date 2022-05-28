import React from 'react';
import {
  DivMenu,
  LinkDecoration,
  LinkSpaces,
  Line,
  MenuText,
  DivClicaveis,
  DivIcones,
  Toggle,
} from './styles';
import { FaHome, FaMoon, FaPeopleArrows, FaSun } from 'react-icons/fa';
import { useCreateContext } from '../../context/UsersContext';
import { IconContext } from 'react-icons';

export const SideMenu = ({ mostra }: any) => {
  const { clicou, setClicou } = useCreateContext();
  function handleClick() {
    setClicou(!clicou);
  }
  return (
    <DivMenu className={mostra}>
      <MenuText className="hide1">Menu</MenuText>
      <LinkSpaces>
        <Line />
        <DivClicaveis>
          <DivIcones>
            <IconContext.Provider value={{ className: 'icon_color' }}>
              <FaHome className="hide1" style={{ marginRight: '.1875rem' }} />
            </IconContext.Provider>
          </DivIcones>
          <LinkDecoration to="/happiness/home">Home</LinkDecoration>
        </DivClicaveis>
        <Line style={{ opacity: '0.5', width: '9.375rem' }} />
      </LinkSpaces>

      <LinkSpaces>
        <DivClicaveis>
          <DivIcones>
            <IconContext.Provider value={{ className: 'icon_color' }}>
              <FaPeopleArrows
                className="hide1"
                style={{ marginRight: '.1875rem' }}
              />
            </IconContext.Provider>
          </DivIcones>
          <LinkDecoration to="/happiness/tabela">Tabela</LinkDecoration>
        </DivClicaveis>
        <Line style={{ opacity: '0.5', width: '9.375rem' }} />
      </LinkSpaces>
      <IconContext.Provider
        value={{ color: '6B62CE', className: 'toggle_icons' }}
      >
        <Toggle className={'hide2'} onClick={handleClick}>
          {clicou ? <FaSun /> : <FaMoon />}
        </Toggle>
      </IconContext.Provider>
    </DivMenu>
  );
};
