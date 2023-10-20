import './styles/index.scss';

import { useTheme } from '~/app/providers/theme-provider/theme-provider.js';
import { classNames } from '~/shared/lib/helpers/helpers.js';
import { type FC } from '~/shared/types/types.js';
import { NavBar } from '~/widgets/nav-bar/nav-bar.js';

import { Router } from './providers/router/router.js';

const App: FC = () => {
  const { handleToggleTheme, theme } = useTheme();
  return (
    <main className={classNames('app', theme)}>
      <NavBar />
      <button onClick={handleToggleTheme}>Toggle theme</button>
      <Router />
    </main>
  );
};

export { App };
