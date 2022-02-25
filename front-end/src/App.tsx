import React from 'react';
import Template from './componentes/Template';
import { UsersProvider } from './context/UsersContext';

function App() {
  return (
    <UsersProvider>
      <Template />
    </UsersProvider>
  );
}

export default App;
