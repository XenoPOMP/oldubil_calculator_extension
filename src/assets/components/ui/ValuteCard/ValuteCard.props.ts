import { Currency } from '../../../api/services/GetActualCurrencies.service';

export interface ValuteCardProps {
  currency?: Currency;
  nominal: number;
}
