import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserHistory } from '@remix-run/router';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
