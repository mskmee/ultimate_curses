import './styles/index.scss';

import { Link, Route, Routes } from 'react-router-dom';

import { AboutPage, MainPage } from '~/pages/pages.js';
import { classNames } from '~/shared/lib/helpers/helpers.js';
import { useTheme } from '~/shared/lib/hooks/hooks.js';

const App = (): JSX.Element => {
  const { handleToggleTheme, theme } = useTheme();
  return (
    <>
      <Routes>
        <Route element={<AboutPage />} path="/about" />
        <Route element={<MainPage />} path="/main" />
      </Routes>
      <Link to="/">HOME</Link>
      <Link to="/main">Main</Link>
      <Link to="/about">About</Link>
      <div className={classNames('app', theme)}>
        data
        <button onClick={handleToggleTheme}>DA</button>
      </div>
    </>
  );
};

export { App };
