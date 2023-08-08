import cn from 'classnames';
import React, { FC } from 'react';

import Page from '@components/Page/Page';

import styles from './ToCurrenciesPage.module.scss';
import type { ToCurrenciesPageProps } from './ToCurrenciesPage.props';

const ToCurrenciesPage: FC<ToCurrenciesPageProps> = ({}) => {
  return (
    <Page
      meta={{ title: 'To currencies', description: '', keywords: '' }}
      noIndex
    >
      <div className={cn(styles.toCurrenciesPage)}>
        Currency comparison page
      </div>
    </Page>
  );
};

export default ToCurrenciesPage;
