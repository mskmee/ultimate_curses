import { type Theme } from '~/shared/enums/enums.js';

import { type ValueOf } from '../types.js';

type ThemeType = ValueOf<typeof Theme>;

export { type ThemeType };
