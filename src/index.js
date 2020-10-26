import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <App />
    </React.Fragment>
  </BrowserRouter>,

  document.getElementById('root')
);

