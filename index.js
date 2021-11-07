import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CryptoApp from './CryptoApp';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './nav';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <CryptoApp />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();