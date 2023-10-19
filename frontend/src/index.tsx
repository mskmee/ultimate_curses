import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from '~/app/app.js';
import { ThemeProvider } from '~/app/providers/providers.js';

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<h1>LOADING...</h1>}>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
);
