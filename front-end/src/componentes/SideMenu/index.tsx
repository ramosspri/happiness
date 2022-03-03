import React from 'react';
import { DivMenu, LinkDecoration, LinkSpaces, Line, MenuText, DivClicaveis, DivIcones } from './styles';
import { FaHome, FaPeopleArrows } from "react-icons/fa";

export const SideMenu = ({ mostra }: any) => {
  return (
    <DivMenu className={mostra}>
      <MenuText className='hide1'>Menu</MenuText>
      <LinkSpaces>
      <Line/>
      <DivClicaveis>
        <DivIcones>
          <FaHome className='hide1' style={{marginRight: '3px'}}/>
        </DivIcones>
        <LinkDecoration to="/">Home</LinkDecoration>
      </DivClicaveis>
          <Line style={{opacity: '0.5', width:'150px'}}/>
      </LinkSpaces>
      <LinkSpaces>
      <DivClicaveis>
        <DivIcones>
          <FaPeopleArrows className='hide1' style={{marginRight: '3px'}}/>
        </DivIcones>
          <LinkDecoration to="/tabela">Tabela</LinkDecoration>
      </DivClicaveis>
        <Line style={{opacity: '0.5', width:'150px'}}/>
      </LinkSpaces>
    </DivMenu>
  );
};
