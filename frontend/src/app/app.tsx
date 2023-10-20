import './styles/index.scss';

import { Link } from 'react-router-dom';

import { useTheme } from '~/app/providers/theme-provider/theme-provider.js';
import { classNames } from '~/shared/lib/helpers/helpers.js';

import { Router } from './providers/router/router.js';

const App = (): JSX.Element => {
  const { handleToggleTheme, theme } = useTheme();
  return (
    <main className={classNames('app', theme)}>
      <Link to="/">HOME</Link>
      <Link to="/about">About</Link>
      <button onClick={handleToggleTheme}>Toggle theme</button>
      <Router />
    </main>
  );
};

export { App };
