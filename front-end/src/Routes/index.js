import React from 'react';
import Home from '../Pages/Home';

import { Route, Routes } from 'react-router-dom';
import { Listaa } from '../Pages/Lista';

// import { Container } from './styles';

export const MyRoute = () => {
  return (
    <Routes>
      <Route caseSensitive path="/" element={<Home />} />
      <Route path="/tabela" element={<Listaa />} />
      <Route path="/*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};
