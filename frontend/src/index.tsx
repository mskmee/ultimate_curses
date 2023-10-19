import './styles/index.scss';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Data } from './data.js';

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<h1>LOADING...</h1>}>
      <BrowserRouter>
        <Data />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
);
