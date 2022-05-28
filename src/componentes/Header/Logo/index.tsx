import React from 'react';
import { ImgLogo } from './styles';
import LogoDark from '../../../assets/LogoLetraDark.png';
import LogoLight from '../../../assets/LogoLetraLight.png';
import { useCreateContext } from '../../../context/UsersContext';
import { Link } from 'react-router-dom';

export const Logo = () => {
  const { clicou } = useCreateContext();
  if (clicou) {
    return (
      <Link to="/">
        <ImgLogo src={LogoLight} />
      </Link>
    );
  } else {
    return (
      <Link to="/">
        <ImgLogo src={LogoDark} />{' '}
      </Link>
    );
  }
};
