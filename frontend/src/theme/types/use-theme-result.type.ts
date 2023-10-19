import { type ThemeType } from './theme.type.js';

type UseThemeResult = {
  theme: ThemeType;
  handleToggleTheme: () => void;
};

export { type UseThemeResult };
