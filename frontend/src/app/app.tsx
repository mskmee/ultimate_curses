import './styles/index.scss';

import { useTheme } from '~/shared/config/theme-config/theme-config.js';
import { classNames } from '~/shared/lib/helpers/helpers.js';
import { type FC } from '~/shared/types/types.js';
import { NavBar } from '~/widgets/nav-bar/nav-bar.js';
import { SideBar } from '~/widgets/side-bar/side-bar.js';

import { Router } from './providers/router/router.js';

const App: FC = () => {
  const { theme } = useTheme();
  return (
    <main className={classNames('app', theme)}>
      <NavBar />
      <div className="content-page">
        <SideBar />
        <Router />
      </div>
    </main>
  );
};

export { App };
