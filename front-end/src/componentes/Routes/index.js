import React from 'react';
import Home from '../../Pages/Home';
import Lista from '../Body/Tabela/Lista';
import { Route, Routes } from 'react-router-dom';

// import { Container } from './styles';

export const MyRoute = () => {
  return (
    <Routes>
      <Route caseSensitive path="/" element={<Home />} />
      <Route path="/tabela" element={<Lista />} />
      <Route path="/*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};
