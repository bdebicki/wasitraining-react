import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './views/App';
import './index.scss';

const rootWrapper = document.getElementById('app-root');
const app = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDom.render(app(), rootWrapper);
