import { AxiosError } from 'axios/index';
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

  const liraQuantity = useAppSelector(state => state.appSettings.currencies.tl);

  const loc = useLocalization();

  const fetchedData = data?.data;

  return (
    <Page
      meta={{ title: 'To currencies', description: '', keywords: '' }}
      noIndex
    >
      <div className={cn(styles.toCurrenciesPage)}>
        <h2>{loc.currencyComparisonPageHeading}</h2>

        {isLoading ? (
          <div className={cn('w-full flex justify-center my-[1em]')}>
            <Loader type={'three-dots'} mainColor={'currentColor'} />
          </div>
        ) : error ? (
          <section className={cn(styles.error)}>
            {(error as AxiosError)?.response?.status === 429 ? (
              <>Seems like API is disconnected.</>
            ) : (
              <>Unknown request error occurred.</>
            )}
          </section>
        ) : (
          <section className={cn(styles.grid)}>
            <ValuteCard.Heading help={'help'}>
              {loc.currencyOldubilHeading}
            </ValuteCard.Heading>

            <ValuteCard nominal={rublesQuantity ?? 0} currency={'RUB'} />

            <ValuteCard nominal={liraQuantity ?? 0} currency={'TRY'} />

            <ValuteCard
              nominal={(rublesQuantity ?? 0) / (fetchedData?.KZT ?? 0)}
              currency={'KZT'}
            />

            <ValuteCard.Heading help={'Help'}>
              {loc.currencyOfficialHeading}
            </ValuteCard.Heading>

            <ValuteCard
              nominal={(rublesQuantity ?? 0) / (fetchedData?.USD ?? 0)}
            />

            <ValuteCard
              nominal={(rublesQuantity ?? 0) / (fetchedData?.EUR ?? 0)}
              currency={'EUR'}
            />
          </section>
        )}
      </div>
    </Page>
  );
};

export default ToCurrenciesPage;
