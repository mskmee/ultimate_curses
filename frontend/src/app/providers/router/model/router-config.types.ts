import { type RouteProps } from 'react-router-dom';

import { type AppRoutesType } from '~/shared/config/route-config/model/model.js';

type RouterConfig = Record<AppRoutesType, RouteProps>;

export { type RouterConfig };
