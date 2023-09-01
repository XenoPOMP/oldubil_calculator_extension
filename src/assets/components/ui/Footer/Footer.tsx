import cn from 'classnames';
import { FC } from 'react';

import Navigation from '@ui/Navigation/Navigation';

import styles from './Footer.module.scss';
import { FooterProps } from './Footer.props';

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className={cn(styles.appFooter)}>
      <Navigation />
    </footer>
  );
};

export default Footer;
