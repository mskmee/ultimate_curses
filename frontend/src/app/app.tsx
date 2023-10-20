import './styles/index.scss';

import { useTheme } from '~/shared/config/theme-config/theme-config.js';
import { classNames } from '~/shared/lib/helpers/helpers.js';
import { type FC } from '~/shared/types/types.js';
import { ThemeSwitcher } from '~/shared/ui/ui.js';
import { NavBar } from '~/widgets/nav-bar/nav-bar.js';

import { Router } from './providers/router/router.js';

const App: FC = () => {
  const { theme } = useTheme();
  return (
    <main className={classNames('app', theme)}>
      <NavBar />
      <ThemeSwitcher />
      <Router />
    </main>
  );
};

export { App };
