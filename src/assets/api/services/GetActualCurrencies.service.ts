import axios from 'axios';

import useEnv from '@hooks/useEnv';

export type Currency = 'RUB' | 'TRY' | 'USD' | 'KZT' | 'EUR';

export interface ActualCurrencyList
  extends Record<Exclude<Currency, 'RUB'>, number> {}

export const GetActualCurrenciesService = {
  async getTodaysCurrencies() {
    const { BACKEND_ADDRESS } = useEnv();

    return axios.get<ActualCurrencyList>(`${BACKEND_ADDRESS}/currency`);
  }
};
