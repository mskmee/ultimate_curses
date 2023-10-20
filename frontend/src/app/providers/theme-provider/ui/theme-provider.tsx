import { useMemo, useState } from '~/shared/lib/hooks/hooks.js';
import { storage, StorageKey } from '~/shared/model/storage/storage.js';
import { type FC, type PropsWithChildren } from '~/shared/types/types.js';

import { Theme, ThemeContext, type ThemeType } from '../model/model.js';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const storedTheme = storage.get<ThemeType>(StorageKey.THEME) || Theme.LIGHT;

  const [theme, setTheme] = useState(storedTheme);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
