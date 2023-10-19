import { lazy } from '~/shared/lib/helpers/helpers.js';

const MainPageLazy = lazy(() => import('./main.js'));

export { MainPageLazy };
