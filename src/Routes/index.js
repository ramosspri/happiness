import React from 'react';
import Home from '../Pages/Home';

import { Route, Routes } from 'react-router-dom';
import { Listaa } from '../Pages/Lista';


export const MyRoute = () => {
  return (
    <Routes>
      <Route caseSensitive path="/happiness/home" element={<Home />} />
      <Route path="/happiness/tabela" element={<Listaa />} />
      <Route path="/*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};
