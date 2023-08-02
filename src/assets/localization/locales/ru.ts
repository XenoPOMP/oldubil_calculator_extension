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
    message: '1 лира = {LIRA_COUNT} рублей',
    description: 'Текст курса лиры к рублю.'
  },

  odlubilCommission: {
    message: 'Комиссия - {PERCENT}%',
    description: 'Текст комиссии Oldubil.'
  },

  bankCard: {
    message: 'Банковская карта',
    description: 'Опция выбора банковской системы (банковская карта).'
  },

  bankSystemCommission: {
    message: 'Комиссия банковской системы - {PERCENT}%',
    description: 'Текст комиссии банковской системы.'
  }
};
