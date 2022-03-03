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
import { useCreateContext, UsersProvider } from './context/UsersContext';
ReactDOM.render(
  <React.StrictMode>
    <UsersProvider>
      <ToastContainer autoClose={3000} className="toast-container" />
      <App />
    </UsersProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
