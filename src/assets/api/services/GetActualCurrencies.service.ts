import axios from 'axios';

import useEnv from '@hooks/useEnv';

import { createUrl } from '@utils/createUrl';

export type Currency = 'USD' | 'KZT' | 'EUR';

export interface ActualCurrencyList {
  data: Record<
    Currency,
    {
      code: string;
      value: number;
    }
  >;
  meta: {
    last_updated_at: string;
  };
}

export const GetActualCurrenciesService = {
  async getTodaysCurrencies() {
    const url = createUrl('https://api.currencyapi.com/v3/latest', {
      apikey: useEnv().API_KEY,
      currencies: ['USD', 'KZT', 'EUR'].join(','),
      base_currency: 'RUB'
    });

    return axios.get<ActualCurrencyList>(url);
  }
};
