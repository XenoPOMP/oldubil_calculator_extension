import { PropsWith } from '@xenopomp/advanced-types';

import axios from 'axios';
import { FC, useEffect } from 'react';
import { useQuery } from 'react-query';
import scrapSite from 'ts-website-scrapper';

import { useAppDispatch } from '@redux/hooks';
import { changeFetchedLiraCount } from '@redux/reducers/appSettingsSlice';

import useEnv from '@hooks/useEnv';

import { isUndefined } from '@utils/type-checks';

import type { FetcherProps } from './Fetcher.props';

const Fetcher: FC<PropsWith<'children', FetcherProps>> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { BACKEND_ADDRESS } = useEnv();

  const { data } = useQuery(
    'fetch-lira-price-from-backend',
    async () => await axios.get<number | undefined>(`${BACKEND_ADDRESS}/course`)
  );

  useEffect(() => {
    if (isUndefined(data?.data) || isUndefined(data)) {
      return;
    }

    dispatch(changeFetchedLiraCount(data.data));
  }, [data]);

  return <>{children}</>;
};

export default Fetcher;
