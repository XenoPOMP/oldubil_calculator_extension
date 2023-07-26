import { RecordKey, RecordValue } from '@xenopomp/advanced-types';

import { createSlice } from '@reduxjs/toolkit';

import { CurrencyInputProps } from '@components/CurrencyInput/CurrencyInput.props';

import type { ReduxAction } from '@redux/types';

import { roundNumber } from '@utils/math-utils';

import { LIRA_TO_ROUBLE, OLDUBIL_COMMISSION } from '../../../app.constants';

export type AppSettings = {
  appVersion: string;
  appName: string;
  language: 'en' | 'ru';
  currencies: Record<CurrencyInputProps['currency'], number | null>;
};

const initialState: AppSettings = {
  appVersion: '1.0.0',
  appName: 'React Vite Application',
  language: 'en',
  currencies: {
    ru: 0,
    tl: 0
  }
};

const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {
    /** Change language with action. */
    changeLang(state, action: ReduxAction<AppSettings['language']>) {
      state.language = action.payload;
    },

    changeCurrencyCount(
      state,
      action: ReduxAction<{
        currency: RecordKey<AppSettings['currencies']>;
        count: RecordValue<AppSettings['currencies']>;
      }>
    ) {
      state.currencies[action.payload.currency] = action.payload.count;

      if (action.payload.currency === 'ru') {
        const liraCount =
          state.currencies.ru === null
            ? 0
            : state.currencies.ru / LIRA_TO_ROUBLE;
        const percents = (100 - OLDUBIL_COMMISSION) / 100;

        state.currencies.tl = roundNumber(liraCount * percents, 2);
      }

      if (action.payload.currency === 'tl') {
        const roubleCount =
          state.currencies.tl === null ? 0 : state.currencies.tl * 5;
        const percents = (100 + OLDUBIL_COMMISSION) / 100;

        // console.log((100 + OLDUBIL_COMMISSION) / 100);

        state.currencies.ru = roundNumber(roubleCount * percents, 2);
      }
    }
  }
});

export default appSettingsSlice.reducer;
export const { changeLang, changeCurrencyCount } = appSettingsSlice.actions;
export const initialAppSettings = appSettingsSlice.getInitialState();
