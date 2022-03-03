import React from 'react';
import { ImgLogo } from './styles';
import LogoDark from '../../../assets/LogoLetraDark.png';
import LogoLight from '../../../assets/LogoLetraLight.png';
import { useCreateContext } from '../../../context/UsersContext';

export const Logo = () => {
  const { clicou } = useCreateContext();
  if (clicou) {
    return <ImgLogo src={LogoLight} />;
  } else {
    return <ImgLogo src={LogoDark} />;
  }
};
