import { type ValueOf } from 'shared/build/index.js';

import { type Theme } from '../enums/theme.enum.js';

type ThemeType = ValueOf<typeof Theme>;

export { type ThemeType };
