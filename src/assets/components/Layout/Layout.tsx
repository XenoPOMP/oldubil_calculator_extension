import { PropsWith } from '@xenopomp/advanced-types';

import cn from 'classnames';
import { FC } from 'react';

import GlobalProvider from '@providers/GlobalProvider/GlobalProvider';

import Footer from '@ui/Footer/Footer';

import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';

/**
 * App layout component.
 *
 * @param children
 * @constructor
 */
const Layout: FC<PropsWith<'children', LayoutProps>> = ({ children }) => {
  return (
    <GlobalProvider>
      <div className={cn(styles.layout)}>
        <main>
          <div className={cn(styles.bodyContainer)}>{children}</div>

          <Footer />
        </main>
      </div>
    </GlobalProvider>
  );
};

export default Layout;
