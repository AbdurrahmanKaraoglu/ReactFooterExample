import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalStyles } from './global-styles';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>, document.getElementById('root')
);