import type { I18Locales } from '../I18Locales';

export const ru: I18Locales = {
  iGot: {
    message: 'У меня есть',
    description: `Заголовок блока, где вводится сумма в рублях.`
  },

  illGet: {
    message: 'Я получу',
    description: 'Заголовок блока, где вводится сумма в лирах.'
  },

  liraToRouble: {
    message: '1 TL = {LIRA_COUNT} RUB',
    description: 'Текст курса лиры к рублю.'
  },

  odlubilCommission: {
    message: 'Комиссия Oldubil&ddt {PERCENT}%',
    description: 'Текст комиссии Oldubil.'
  },

  bankCard: {
    message: 'Банковская карта',
    description: 'Опция выбора банковской системы (банковская карта).'
  },

  bankSystemCommission: {
    message: 'Комиссия банковской системы&ddt {PERCENT}%',
    description: 'Текст комиссии банковской системы.'
  },

  totalCommissionWarning: {
    message: 'Наценка&ddt {CHARGE} руб.',
    description: 'Текст общей наценки.'
  },

  currencyComparisonPageHeading: {
    message: 'Сравнение валют',
    description: 'Заголовок страницы To Currencies.'
  },

  currencyOldubilHeading: {
    message: 'Курс Oldubil',
    description: 'Заголовок блока Odlubil на странице To Currencies.'
  },

  currencyOfficialHeading: {
    message: 'Официальный курс',
    description: 'Заголовок блока курса центробанка на странице To Currencies.'
  },

  infoAppVersion: {
    message: 'Версия приложения&ddt {VERSION}',
    description: 'Текст рядом с версией приложения в окне Info.'
  }
};
