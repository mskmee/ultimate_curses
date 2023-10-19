import { createContext } from 'react';

import { Theme } from './enums/enums.js';
import { type ThemeContextProperties } from './types/types.js';

const ThemeContext = createContext<ThemeContextProperties>({
  theme: Theme.LIGHT,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: () => {},
});

export { ThemeContext };
