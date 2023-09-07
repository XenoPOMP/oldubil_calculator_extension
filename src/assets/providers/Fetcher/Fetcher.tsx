import { PropsWith } from '@xenopomp/advanced-types';

import axios from 'axios';
import { FC, createContext, useEffect } from 'react';
import { useQuery } from 'react-query';

import { useAppDispatch } from '@redux/hooks';
import {
  changeFetchedLiraCount,
  changeOfficialLiraCurrency
} from '@redux/reducers/appSettingsSlice';

import useEnv from '@hooks/useEnv';

import { isUndefined } from '@utils/type-checks';

import {
  Currency,
  GetActualCurrenciesService
} from '../../api/services/GetActualCurrencies.service';

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

  const fetchedOfficialCourse = useQuery(
    'official-course-fetch',
    async () => await GetActualCurrenciesService.getTodaysCurrencies()
  );

  useEffect(() => {
    if (
      isUndefined(fetchCourseFromSite.data?.data) ||
      isUndefined(fetchCourseFromSite.data) ||
      isUndefined(fetchedOfficialCourse.data?.data) ||
      isUndefined(fetchedOfficialCourse.data)
    ) {
      return;
    }

    dispatch(changeFetchedLiraCount(fetchCourseFromSite.data.data));
    dispatch(changeOfficialLiraCurrency(fetchedOfficialCourse.data.data.TRY));
  }, [fetchCourseFromSite.data, fetchedOfficialCourse.data]);

  return (
    <FetcherContext.Provider
      value={{
        isFetching:
          fetchCourseFromSite.isLoading || fetchedOfficialCourse.isLoading
      }}
    >
      {children}
    </FetcherContext.Provider>
  );
};

export default Fetcher;
