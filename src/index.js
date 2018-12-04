import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../css/index.scss';
import { Store } from './context/store';

ReactDOM.render(
  <Store>
    <App />
  </Store>,
  document.getElementById("root")
);