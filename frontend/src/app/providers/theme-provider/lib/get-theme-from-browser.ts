import {
  Theme,
  type ThemeType,
} from '~/shared/config/theme-config/theme-config.js';
import { isDarkBrowserTheme } from '~/shared/lib/helpers/helpers.js';

const getThemeFromBrowser = (): ThemeType =>
  isDarkBrowserTheme() ? Theme.DARK : Theme.LIGHT;

export { getThemeFromBrowser };
