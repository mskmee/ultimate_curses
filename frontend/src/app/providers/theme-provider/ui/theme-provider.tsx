import { ThemeContext } from '~/shared/config/config.js';
import { Theme } from '~/shared/enums/enums.js';
import { LOCAL_STORAGE_THEME_KEY } from '~/shared/lib/constants/constants.js';
import { useMemo, useState } from '~/shared/lib/hooks/hooks.js';
import {
  type FC,
  type PropsWithChildren,
  type ThemeType,
} from '~/shared/types/types.js';

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
