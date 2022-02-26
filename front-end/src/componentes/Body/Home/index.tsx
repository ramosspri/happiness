import React from 'react';
import { ContainerBody } from '../ContainerBody/styles';
import { TextHome, TextHomeBold, ImgUsers } from './styles';
import Priscila from '../../../assets/Priscila.jpeg'
import Carlos from '../../../assets/carlos.jpeg'
import Gustavo from '../../../assets/Gustavo.jpeg'

const HomeCorpo = () => {
  return (
    <>
    <ContainerBody>
      <ImgUsers src={Priscila}/>
      <TextHome>#1</TextHome>
      <TextHomeBold>Priscila</TextHomeBold>
      <TextHome>priscila@gmail.com</TextHome>
    </ContainerBody>
    <ContainerBody>
      <ImgUsers src={Carlos}/>
      <TextHome>#2</TextHome>
      <TextHomeBold>Carlos</TextHomeBold>
      <TextHome>carlos@gmail.com</TextHome>
    </ContainerBody>
    <ContainerBody>
      <ImgUsers src={Gustavo}/>
      <TextHome>#3</TextHome>
      <TextHomeBold>Gustavo</TextHomeBold>
      <TextHome>gustavo@gmail.com</TextHome>
    </ContainerBody>
  </>
  );
};

export default HomeCorpo;
