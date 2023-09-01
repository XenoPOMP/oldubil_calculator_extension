import { PropsWith } from '@xenopomp/advanced-types';

import axios from 'axios';
import { FC, createContext, useEffect } from 'react';
import { useQuery } from 'react-query';
import scrapSite from 'ts-website-scrapper';

import { useAppDispatch } from '@redux/hooks';
import { changeFetchedLiraCount } from '@redux/reducers/appSettingsSlice';

import useEnv from '@hooks/useEnv';

import { isUndefined } from '@utils/type-checks';

import type { FetcherProps } from './Fetcher.props';

export const FetcherContext = createContext<{
  isFetching: boolean;
}>({
  isFetching: false
});

const Fetcher: FC<PropsWith<'children', FetcherProps>> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { BACKEND_ADDRESS } = useEnv();

  const fetchCourseFromSite = useQuery(
    'fetch-lira-price-from-backend',
    async () => await axios.get<number | undefined>(`${BACKEND_ADDRESS}/course`)
  );

  useEffect(() => {
    if (
      isUndefined(fetchCourseFromSite.data?.data) ||
      isUndefined(fetchCourseFromSite.data)
    ) {
      return;
    }

    dispatch(changeFetchedLiraCount(fetchCourseFromSite.data.data));
  }, [fetchCourseFromSite.data]);

  return (
    <FetcherContext.Provider
      value={{
        isFetching: fetchCourseFromSite.isLoading
      }}
    >
      {children}
    </FetcherContext.Provider>
  );
};

export default Fetcher;
