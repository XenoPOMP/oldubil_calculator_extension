import { useAppSelector } from '@redux/hooks';
import { AppSettings } from '@redux/reducers/appSettingsSlice';

import {
  BANK_COMMISSION,
  LAVA_COMMISSION,
  OLDUBIL_COMMISSION,
  QIWI_COMMISSION
} from '../../app.constants';

export const useBankingCommission = (): {
  bankingCommission: number;
  totalCommission: number;
} => {
  const { bankingSystem }: AppSettings = useAppSelector(
    state => state.appSettings
  );

  let commissionOfBank: number = 0;

  switch (bankingSystem) {
    case 'QIWI': {
      commissionOfBank = QIWI_COMMISSION;
      break;
    }

    case 'BANK': {
      commissionOfBank = BANK_COMMISSION;
      break;
    }

    case 'LAVA': {
      commissionOfBank = LAVA_COMMISSION;
    }
  }

  return {
    bankingCommission: commissionOfBank,
    totalCommission: commissionOfBank + OLDUBIL_COMMISSION
  };
};
