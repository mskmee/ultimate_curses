import { type LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { classNames } from '~/shared/lib/helpers/helpers.js';
import { type FC, type PropsWithChildren } from '~/shared/types/types.js';

import { AppLinkTheme, type AppLinkType } from '../model/model.js';
import styles from './app-link.module.scss';

type AppLinkProperties = {
  className?: string;
  theme?: AppLinkType;
} & PropsWithChildren &
  LinkProps;

const AppLink: FC<AppLinkProperties> = ({
  className,
  children,
  theme = AppLinkTheme.PRIMARY,
  ...props
}) => {
  return (
    <Link
      {...props}
      className={classNames(styles.app_link, className, styles[theme])}
    >
      {children}
    </Link>
  );
};

export { AppLink };
