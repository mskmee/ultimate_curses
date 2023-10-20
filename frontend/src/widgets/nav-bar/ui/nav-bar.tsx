import { classNames } from '~/shared/lib/helpers/helpers.js';
import { type FC } from '~/shared/types/types.js';
import { AppLink, AppLinkTheme } from '~/shared/ui/ui.js';

import styles from './nav-bar.module.scss';

type NavBarProperties = {
  className?: string;
};

const NavBar: FC<NavBarProperties> = ({ className }) => {
  return (
    <div className={classNames(styles.nav_bar_container, className)}>
      <div className={styles.links_wrapper}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/">
          HOME
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          About
        </AppLink>
      </div>
    </div>
  );
};

export { NavBar };
