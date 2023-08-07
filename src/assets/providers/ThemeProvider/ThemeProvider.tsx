import { PropsWith } from '@xenopomp/advanced-types';

import cn from 'classnames';
import { FC } from 'react';

import styles from './ThemeProvider.module.scss';

const ThemeProvider: FC<PropsWith<'children', {}>> = ({ children }) => {
  return <div className={cn(styles.themes, styles.dark)}>{children}</div>;
};

export default ThemeProvider;
