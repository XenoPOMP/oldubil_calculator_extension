import cn from 'classnames';
import React, { FC, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import Page from '@components/Page/Page';

import { createUrl } from '@utils/createUrl';
import { pullPattern } from '@utils/pullPattern';

import { GetActualCurrenciesService } from '../../api/services/GetActualCurrencies.service';

import styles from './ToCurrenciesPage.module.scss';
import type { ToCurrenciesPageProps } from './ToCurrenciesPage.props';

const ToCurrenciesPage: FC<ToCurrenciesPageProps> = () => {
  const { data, error, isLoading } = useQuery('get-all-queries', () =>
    GetActualCurrenciesService.getTodaysCurrencies()
  );

  const getValutes = (): Record<'usd', number> => {
    return {
      usd: 0
    };
  };

  useEffect(() => {
    if (data) {
      console.log(data);
    }

    if (!isLoading) {
      // console.log(getValutes());
    }
  }, [isLoading, data]);

  return (
    <Page
      meta={{ title: 'To currencies', description: '', keywords: '' }}
      noIndex
    >
      <div className={cn(styles.toCurrenciesPage)}>
        Currency comparison page
        {isLoading ? <div>Loading...</div> : <p></p>}
      </div>
    </Page>
  );
};

export default ToCurrenciesPage;
