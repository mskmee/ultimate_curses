import { lazy } from '~/shared/lib/helpers/helpers.js';

const AboutLazy = lazy(() => import('./about.js'));

export { AboutLazy };
