import { useAppSelector } from '@redux/hooks';
import { AppSettings } from '@redux/reducers/appSettingsSlice';

import {
  BANK_COMMISSION,
  LAVA_COMMISSION,
  QIWI_COMMISSION
} from '../../app.constants';

export const useBankingCommission = (): number => {
  const { bankingSystem }: AppSettings = useAppSelector(
    state => state.appSettings
  );

  switch (bankingSystem) {
    case 'QIWI': {
      return QIWI_COMMISSION;
    }

    case 'BANK': {
      return BANK_COMMISSION;
    }

    case 'LAVA': {
      return LAVA_COMMISSION;
    }
  }
};
