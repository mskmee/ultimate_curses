import { useMemo, useState } from '~/shared/lib/hooks/hooks.js';
import { type FC, type PropsWithChildren } from '~/shared/types/types.js';

import { LOCAL_STORAGE_THEME_KEY } from '../lib/constants.js';
import { Theme, ThemeContext, type ThemeType } from '../model/model.js';

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
