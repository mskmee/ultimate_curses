import './styles/index.scss';

import { classNames } from '~/shared/lib/helpers/helpers.js';
import { useTheme } from '~/shared/lib/hooks/hooks.js';

const App = (): JSX.Element => {
  const { handleToggleTheme, theme } = useTheme();
  return (
    <div className={classNames('app', theme)}>
      data
      <button onClick={handleToggleTheme}>DA</button>
    </div>
  );
};

export { App };
