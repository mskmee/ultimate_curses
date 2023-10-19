import { ThemeContext } from '~/shared/config/config.js';
import { Theme } from '~/shared/enums/enums.js';
import { LOCAL_STORAGE_THEME_KEY } from '~/shared/lib/constants/constants.js';
import { type UseThemeResult } from '~/shared/types/types.js';

import { useContext } from '../hooks.js';

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
