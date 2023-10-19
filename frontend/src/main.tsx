import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<h1>LOADING...</h1>}>
      <BrowserRouter></BrowserRouter>
    </Suspense>
  </React.StrictMode>,
);
