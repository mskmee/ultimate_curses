import { type ThemeType } from '../types.js';

type ThemeContextProperties = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
};

export { type ThemeContextProperties };
