import type { I18Locales } from '../I18Locales';

export const en: I18Locales = {
  iGot: {
    message: 'I have',
    description:
      'The header of the block where the amount in rubles is entered.'
  },

  illGet: {
    message: 'Ill get',
    description: `The header of the block where the amount in lira is entered.`
  },

  liraToRouble: {
    message: '1 TL = {LIRA_COUNT} RUB',
    description: `Lira to rouble currency text.`
  },

  odlubilCommission: {
    message: 'Oldubil commission&ddt {PERCENT}%',
    description: `Oldubil commission text.`
  },

  bankCard: {
    message: 'Bank card',
    description: 'Option to select a banking system (bank card).'
  },

  bankSystemCommission: {
    message: 'Commission of the banking system&ddt {PERCENT}%',
    description: 'The text of the commission of the banking system.'
  },

  totalCommissionWarning: {
    message: 'Extra charge&ddt {CHARGE} rubles.',
    description: 'Текст общей наценки.'
  },

  currencyComparisonPageHeading: {
    message: 'Currency comparison',
    description: 'The title of the To Currencies page.'
  },

  currencyOldubilHeading: {
    message: 'Oldubil Course',
    description: 'The title of the Odlubil block on the To Currencies page.'
  },

  currencyOfficialHeading: {
    message: 'Official course',
    description:
      'The heading of the central banks exchange rate block on the To Currencies page.'
  }
};
