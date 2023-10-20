import { AboutPage, MainPage } from '~/pages/pages.js';
import {
  AppRoutes,
  RoutePath,
} from '~/shared/config/route-config/route-config.js';

import { type RouterConfig } from './router-config.types.js';

const routerConfig: RouterConfig = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
};

export { routerConfig };
