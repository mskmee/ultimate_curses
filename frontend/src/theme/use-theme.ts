import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY } from './constants/constants.js';
import { Theme } from './enums/enums.js';
import { ThemeContext } from './theme-context.js';
import { type UseThemeResult } from './types/types.js';

const useTheme = (): UseThemeResult => {
  const { setTheme, theme } = useContext(ThemeContext);
  const handleToggleTheme = (): void => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };
  return { theme, handleToggleTheme };
};

export { useTheme };
