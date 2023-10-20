import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { type FC } from '~/shared/types/types.js';

import { routerConfig } from '../model/router-config.js';

const Router: FC = () => {
  return (
    <Suspense fallback={<h1>LOADING...</h1>}>
      <Routes>
        {Object.values(routerConfig).map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    </Suspense>
  );
};

export { Router };
