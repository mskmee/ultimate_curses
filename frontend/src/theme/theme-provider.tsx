import { type FC, type PropsWithChildren } from 'react';
import { useState } from 'react';

import { LOCAL_STORAGE_THEME_KEY } from './constants/constants.js';
import { Theme } from './enums/enums.js';
import { ThemeContext } from './theme-context.js';
import { type ThemeType } from './types/types.js';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const storedTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) ||
    Theme.LIGHT) as ThemeType;

  const [theme, setTheme] = useState(storedTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
