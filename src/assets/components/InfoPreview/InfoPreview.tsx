import { PropsWith } from '@xenopomp/advanced-types';

import cn from 'classnames';
import { FC, ReactNode } from 'react';

import { useAppSelector } from '@redux/hooks';

import CheckBox from '@ui/CheckBox/CheckBox';
import InfoIcon from '@ui/InfoIcon/InfoIcon';

import useAppSettings from '@hooks/useAppSettings';
import { useBankingCommission } from '@hooks/useBankingCommission';
import { inlineLocaleVar, useLocalization } from '@hooks/useLocalization';

import { roundNumber } from '@utils/math-utils';

import { LIRA_TO_ROUBLE, OLDUBIL_COMMISSION } from '../../../app.constants';

import styles from './InfoPreview.module.scss';
import type { InfoPreviewProps } from './InfoPreview.props';

const InfoPreview: FC<InfoPreviewProps> = ({}) => {
  const loc = useLocalization();
  const { bankingCommission, totalCommission } = useBankingCommission();
  const { bankingSystem, appVersion } = useAppSettings();
  const russianCurrency = useAppSelector(
    state => state.appSettings.currencies
  ).ru;

  const getCommissionWarningString = (): string => {
    const roundedOverflow = roundNumber(
      (russianCurrency !== null ? russianCurrency : 1) *
        (totalCommission / 100),
      2
    );

    const textOutput = `${roundedOverflow}`;

    if (/\.\d+$/gi.test(textOutput)) {
      return `~${roundedOverflow}`;
    }

    // return `${roundedOverflow} (${totalCommission}%)`;
    return textOutput;
  };

  const WarningSection: FC<PropsWith<'className' | 'children', {}>> = ({
    className,
    children
  }) => {
    return (
      <section className={cn(styles.info, styles.warning, className)}>
        <InfoIcon />

        <div>{children}</div>
      </section>
    );
  };

  return (
    <>
      <WarningSection>
        {inlineLocaleVar(loc.totalCommissionWarning, {
          variableName: 'CHARGE',
          replacement: getCommissionWarningString()
        })}
      </WarningSection>

      <WarningSection>
        {inlineLocaleVar(loc.liraToRouble, {
          variableName: 'LIRA_COUNT',
          replacement: `${LIRA_TO_ROUBLE}`
        })}
      </WarningSection>

      <WarningSection>
        {inlineLocaleVar(loc.odlubilCommission, {
          variableName: 'PERCENT',
          replacement: `${OLDUBIL_COMMISSION}`
        })}
      </WarningSection>

      <WarningSection>
        {inlineLocaleVar(loc.bankSystemCommission, {
          variableName: 'PERCENT',
          replacement: `${bankingCommission}`
        })}
      </WarningSection>

      <section className={cn(styles.additionalSettings)}>
        <button
          className={cn(
            styles.control,
            (bankingSystem.get() === 'QIWI' ||
              bankingSystem.get() === 'BANK') &&
              styles.active
          )}
          onClick={() => {
            bankingSystem.set('QIWI');
          }}
        >
          QIWI / {loc.bankCard}
        </button>

        {/*<button*/}
        {/*  className={cn(*/}
        {/*    styles.control,*/}
        {/*    bankingSystem.get() === 'BANK' && styles.active*/}
        {/*  )}*/}
        {/*  onClick={() => {*/}
        {/*    bankingSystem.set('BANK');*/}
        {/*  }}*/}
        {/*>*/}
        {/*  {loc.bankCard}*/}
        {/*</button>*/}

        <button
          className={cn(
            styles.control,
            bankingSystem.get() === 'LAVA' && styles.active
          )}
          onClick={() => {
            bankingSystem.set('LAVA');
          }}
        >
          LAVA
        </button>
      </section>

      <section className={cn(styles.appVersion)}>v{appVersion.get()}</section>
    </>
  );
};

export default InfoPreview;
