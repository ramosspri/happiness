import React from 'react';
import { ContainerBody } from '../ContainerBody/styles';
import { TextHome, TextHomeBold } from './styles';

const HomeCorpo = () => {
  return (
    <>
    <ContainerBody>
      <TextHome>#1</TextHome>
      <TextHomeBold>Priscila</TextHomeBold>
      <TextHome>priscila@gmail.com</TextHome>
    </ContainerBody>
    <ContainerBody>
      <TextHome>#2</TextHome>
      <TextHomeBold>Carlos</TextHomeBold>
      <TextHome>carlos@gmail.com</TextHome>
    </ContainerBody>
    <ContainerBody>
      <TextHome>#3</TextHome>
      <TextHomeBold>Gustavo</TextHomeBold>
      <TextHome>gustavo@gmail.com</TextHome>
    </ContainerBody>
  </>
  );
};

export default HomeCorpo;
