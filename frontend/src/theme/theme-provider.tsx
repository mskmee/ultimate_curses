import { type FC, type PropsWithChildren, useMemo } from 'react';
import { useState } from 'react';

import { LOCAL_STORAGE_THEME_KEY } from './constants/constants.js';
import { Theme } from './enums/enums.js';
import { ThemeContext } from './theme-context.js';
import { type ThemeType } from './types/types.js';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const storedTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) ||
    Theme.LIGHT) as ThemeType;

  const [theme, setTheme] = useState(storedTheme);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
