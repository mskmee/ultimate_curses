import { classNames } from '~/shared/lib/helpers/helpers.js';
import { useCallback, useState } from '~/shared/lib/hooks/hooks.js';
import { type FC } from '~/shared/types/types.js';
import { ThemeSwitcher } from '~/shared/ui/ui.js';

import styles from './side-bar.module.scss';

type SideBarProperties = {
  className?: string;
};

const SideBar: FC<SideBarProperties> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onToggle = useCallback((): void => {
    setIsCollapsed((previous) => !previous);
  }, []);

  return (
    <div
      className={classNames(styles.side_bar, className, {
        [styles.collapsed]: isCollapsed,
      })}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export { SideBar };
