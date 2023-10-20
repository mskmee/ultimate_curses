import { useContext } from '~/shared/lib/hooks/hooks.js';
import { storage, StorageKey } from '~/shared/model/storage/storage.js';

import { Theme, ThemeContext, type UseThemeResult } from '../model/model.js';

const useTheme = (): UseThemeResult => {
  const { setTheme, theme } = useContext(ThemeContext);
  const handleToggleTheme = (): void => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    storage.set(StorageKey.THEME, newTheme);
  };
  return { theme, handleToggleTheme };
};

export { useTheme };
