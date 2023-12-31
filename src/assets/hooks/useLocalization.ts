import {
  I18Locales,
  Localization,
  getChromeLocale
} from '@localization/I18Locales';

export const useLocalization = (): Localization => {
  return {
    iGot: getChromeLocale('iGot'),
    illGet: getChromeLocale('illGet'),
    liraToRouble: getChromeLocale('liraToRouble'),
    odlubilCommission: getChromeLocale('odlubilCommission'),
    bankCard: getChromeLocale('bankCard'),
    bankSystemCommission: getChromeLocale('bankSystemCommission'),
    totalCommissionWarning: getChromeLocale('totalCommissionWarning'),
    currencyComparisonPageHeading: getChromeLocale(
      'currencyComparisonPageHeading'
    ),
    currencyOldubilHeading: getChromeLocale('currencyOldubilHeading'),
    currencyOfficialHeading: getChromeLocale('currencyOfficialHeading'),
    infoAppVersion: getChromeLocale('infoAppVersion')
  };
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
