import { isDarkBrowserTheme } from '~/shared/lib/helpers/helpers.js';

import { Theme, type ThemeType } from '../model/model.js';

const getThemeFromBrowser = (): ThemeType =>
  isDarkBrowserTheme() ? Theme.DARK : Theme.LIGHT;

export { getThemeFromBrowser };
