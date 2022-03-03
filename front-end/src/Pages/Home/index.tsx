import React from 'react';
import HomeCorpo from '../../componentes/Body/Home';
import { ContainerMain } from '../../componentes/ContainerMain/ContainerMain';
import { Loader } from '../../componentes/Loader/Loader';
import { useCreateContext } from '../../context/UsersContext';

const Home = () => {
  return (
    <ContainerMain>
      <HomeCorpo />
    </ContainerMain>
  );
};

export default Home;
