import {
  ThemeContext,
  type ThemeType,
} from '~/shared/config/theme-config/theme-config.js';
import { useMemo, useState } from '~/shared/lib/hooks/hooks.js';
import { storage, StorageKey } from '~/shared/model/storage/storage.js';
import { type FC, type PropsWithChildren } from '~/shared/types/types.js';

import { getThemeFromBrowser } from '../lib/get-theme-from-browser.js';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const storedTheme =
    storage.get<ThemeType>(StorageKey.THEME) || getThemeFromBrowser();

  const [theme, setTheme] = useState(storedTheme);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
