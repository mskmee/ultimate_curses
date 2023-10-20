import { type ThemeType } from './theme.type.js';

type ThemeContextProperties = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
};

export { type ThemeContextProperties };
