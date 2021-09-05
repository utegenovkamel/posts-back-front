import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes';
import GlobalStyle from 'globalStyles';
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
