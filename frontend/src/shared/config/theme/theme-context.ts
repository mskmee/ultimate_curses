import { createContext } from 'react';

import { Theme } from '~/shared/enums/enums.js';
import { type ThemeContextProperties } from '~/shared/types/types.js';

const ThemeContext = createContext<ThemeContextProperties>({
  theme: Theme.LIGHT,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: () => {},
});

export { ThemeContext };
