import axios from 'axios';

import useEnv from '@hooks/useEnv';

import { createUrl } from '@utils/createUrl';

export const GetActualCurrenciesService = {
  async getTodaysCurrencies() {
    const url = createUrl('https://api.currencyapi.com/v3/latest', {
      apikey: useEnv().API_KEY,
      currencies: ['USD', 'KZT', 'EUR'].join(','),
      base_currency: 'RUB'
    });

    return axios.get(url);
  }
};
