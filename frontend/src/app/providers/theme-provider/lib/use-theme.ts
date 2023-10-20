import { useContext } from '~/shared/lib/hooks/hooks.js';

import { Theme, ThemeContext, type UseThemeResult } from '../model/model.js';
import { LOCAL_STORAGE_THEME_KEY } from './constants.js';

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
