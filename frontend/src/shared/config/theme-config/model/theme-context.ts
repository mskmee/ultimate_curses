import { createContext } from 'react';

import { Theme, type ThemeContextProperties } from './model.js';

const ThemeContext = createContext<ThemeContextProperties>({
  theme: Theme.LIGHT,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: () => {},
});

export { ThemeContext };
