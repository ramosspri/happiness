import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UsersProvider } from './context/UsersContext';
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
