import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Loader } from './componentes/Loader/Loader';
import Template from './componentes/Template';
import { useCreateContext } from './context/UsersContext';
import { GlobalStyle } from './styles/GlobalStyle';
import { themeDark } from './styles/themeDark';
import { themeLight } from './styles/themeLight';

function App() {
  const [theme, setTheme] = React.useState(themeLight);
  const { clicou } = useCreateContext();
  React.useEffect(() => {
    if (clicou) {
      setTheme(themeDark);
    } else {
      setTheme(themeLight);
    }
  }, [clicou]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Template />
    </ThemeProvider>
  );
}

export default App;
