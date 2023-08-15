import cn from 'classnames';
import React, { FC } from 'react';
import { useQuery } from 'react-query';

import Page from '@components/Page/Page';

import { useAppSelector } from '@redux/hooks';

import Loader from '@ui/Loader/Loader';
import ValuteCard from '@ui/ValuteCard/ValuteCard';

import { useLocalization } from '@hooks/useLocalization';

import { GetActualCurrenciesService } from '../../api/services/GetActualCurrencies.service';

import styles from './ToCurrenciesPage.module.scss';
import type { ToCurrenciesPageProps } from './ToCurrenciesPage.props';

const ToCurrenciesPage: FC<ToCurrenciesPageProps> = () => {
  const { data, error, isLoading } = useQuery('get-all-queries', () =>
    GetActualCurrenciesService.getTodaysCurrencies()
  );

  const rublesQuantity = useAppSelector(
    state => state.appSettings.currencies.ru
  );

  const loc = useLocalization();

  const fetchedData = data?.data.data;

  return (
    <Page
      meta={{ title: 'To currencies', description: '', keywords: '' }}
      noIndex
    >
      <div className={cn(styles.toCurrenciesPage)}>
        <h2>{loc.currencyComparisonPageHeading}</h2>

        {isLoading ? (
          <div className={cn('w-full flex justify-center my-[1em]')}>
            <Loader type={'wave'} mainColor={'currentColor'} />
          </div>
        ) : (
          <section className={cn(styles.grid)}>
            <ValuteCard
              nominal={(rublesQuantity ?? 0) * (fetchedData?.USD.value ?? 0)}
            />

            <ValuteCard
              nominal={(rublesQuantity ?? 0) * (fetchedData?.EUR.value ?? 0)}
              currency={'EUR'}
            />

            <ValuteCard
              nominal={(rublesQuantity ?? 0) * (fetchedData?.KZT.value ?? 0)}
              currency={'KZT'}
            />
          </section>
        )}
      </div>
    </Page>
  );
};

export default ToCurrenciesPage;
