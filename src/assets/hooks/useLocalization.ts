import {
  I18Locales,
  Localization,
  getChromeLocale
} from '@localization/I18Locales';

export const useLocalization = (): Localization => {
  const wrapLocale = (key: keyof I18Locales) => {
    return {
      [key]: getChromeLocale(key)
    };
  };

  return {
    ...wrapLocale('localeName')
  };
};
