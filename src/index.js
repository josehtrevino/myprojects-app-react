import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CompletedContextProvider } from './store/completed-context';

ReactDOM.render(
  <CompletedContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CompletedContextProvider>,
  document.getElementById('root')
);
