import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { themeLight } from './styles/themeLight';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from './styles/GlobalStyle';
import { themeDark } from './styles/themeDark';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themeLight}>
      <GlobalStyle />
      <ToastContainer autoClose={3000} className="toast-container" />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
