import DarkIcon from '~/shared/assets/icons/theme-dark.svg?react';
import LightIcon from '~/shared/assets/icons/theme-light.svg?react';
import { Theme, useTheme } from '~/shared/config/theme-config/theme-config.js';
import { classNames } from '~/shared/lib/helpers/helpers.js';
import { type FC } from '~/shared/types/types.js';

import { Button, ButtonThemes } from '../../button/button.js';
import styles from './theme-switcher.module.scss';

type ThemeSwitcherProperties = {
  className?: string;
};

const ThemeSwitcher: FC<ThemeSwitcherProperties> = ({ className }) => {
  const { handleToggleTheme, theme } = useTheme();
  return (
    <Button
      onClick={handleToggleTheme}
      className={classNames(styles.theme_switcher, className)}
      theme={ButtonThemes.CLEAR}
    >
      {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};

export { ThemeSwitcher };
