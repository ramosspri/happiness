import React from 'react';
import { ContainerBody } from '../ContainerBody/styles';
import { TextHome, TextHomeBold, ImgUsers } from './styles';
import Priscila from '../../../assets/Priscila.jpeg';
import Carlos from '../../../assets/carlos.jpeg';
import Gustavo from '../../../assets/Gustavo.jpeg';
import { useCreateContext } from '../../../context/UsersContext';
import { Loader } from '../../Loader/Loader';

const HomeCorpo = () => {
  const { loader, setLoader } = useCreateContext();
  return (
    <>
      <ContainerBody>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.9375rem' }}>
          <ImgUsers src={Priscila} />
          <div>
            <TextHome>#1</TextHome>
            <TextHomeBold>Priscila</TextHomeBold>
            <TextHome>priscila@gmail.com</TextHome>
          </div>
        </div>
      </ContainerBody>

      <ContainerBody>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.9375rem' }}>
          <ImgUsers src={Carlos} />
          <div>
            <TextHome>#2</TextHome>
            <TextHomeBold>Carlos</TextHomeBold>
            <TextHome>carlos@gmail.com</TextHome>
          </div>
        </div>
      </ContainerBody>
      <ContainerBody>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.9375rem' }}>
          <ImgUsers src={Gustavo} />
          <div>
            <TextHome>#3</TextHome>
            <TextHomeBold>Gustavo</TextHomeBold>
            <TextHome>gustavo@gmail.com</TextHome>
          </div>
        </div>
      </ContainerBody>
    </>
  );
};

export default HomeCorpo;
