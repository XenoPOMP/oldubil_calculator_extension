import axios from 'axios';

import useEnv from '@hooks/useEnv';

export type Currency = 'RUB' | 'TL' | 'USD' | 'KZT' | 'EUR';

export interface ActualCurrencyList
  extends Record<Exclude<Currency, 'RUB' | 'TL'>, number> {}

export const GetActualCurrenciesService = {
  async getTodaysCurrencies() {
    const { BACKEND_ADDRESS } = useEnv();

    return axios.get<ActualCurrencyList>(`${BACKEND_ADDRESS}/currency`);
  }
};
