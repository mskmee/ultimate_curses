import classNames from 'classnames';

import { useTheme } from '~/theme/use-theme.js';

const Data = (): JSX.Element => {
  const { handleToggleTheme, theme } = useTheme();
  return (
    <div className={classNames('app', theme)}>
      data
      <button onClick={handleToggleTheme}>DA</button>
    </div>
  );
};

export { Data };
