import { en } from '@locales/en';
import { ru } from '@locales/ru';
import {
  I18Locales,
  Localization,
  getChromeLocale
} from '@localization/I18Locales';

import useAppSettings from '@hooks/useAppSettings';

export const useLocalization = (): Localization => {
  const { language } = useAppSettings();

  switch (language.get()) {
    case 'ru':
      return ru;
    case 'en':
      return en;
  }
};

/**
 * This function allows to inline variable in locale.
 *
 * @param original
 * @param args
 */
export const inlineLocaleVar = (
  original: string,
  ...args: Array<{
    variableName: string;
    replacement: string;
  }>
): string => {
  let output = original;

  args.forEach(arg => {
    output = original.replace(
      new RegExp(`\{${arg.variableName}\}`),
      arg.replacement
    );
  });

  return output;
};
