import { type ValueOf } from 'shared/build/index.js';

import { type AppLinkTheme } from './app-link-theme.enum.js';

type AppLinkType = ValueOf<typeof AppLinkTheme>;

export { type AppLinkType };
