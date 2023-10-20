import { type ButtonHTMLAttributes } from 'react';

import { classNames } from '~/shared/lib/helpers/helpers.js';
import { type FC } from '~/shared/types/types.js';

import { ButtonThemes, type ButtonType } from '../model/model.js';
import styles from './button.module.scss';

type ButtonProperties = {
  theme?: ButtonType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProperties> = ({
  children,
  className,
  theme = ButtonThemes.CLEAR,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(styles.button, styles[theme], className)}
    >
      {children}
    </button>
  );
};

export { Button };
