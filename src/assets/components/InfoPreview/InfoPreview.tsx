import { PropsWith } from '@xenopomp/advanced-types';

import cn from 'classnames';
import { FC, ReactNode } from 'react';

import { useAppSelector } from '@redux/hooks';

import CheckBox from '@ui/CheckBox/CheckBox';

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

  const InfoIcon: FC = () => {
    return (
      <svg viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <mask
          id='mask0_834_7'
          style={{
            mask: 'alpha'
          }}
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='25'
          height='25'
        >
          <rect
            x='0.566406'
            y='0.598633'
            width='24'
            height='24'
            fill='#D9D9D9'
          />
        </mask>
        <g mask='url(#mask0_834_7)'>
          <path
            d='M11.5664 17.5986H13.5664V11.5986H11.5664V17.5986ZM12.5664 9.59863C12.8497 9.59863 13.0872 9.5028 13.2789 9.31113C13.4706 9.11947 13.5664 8.88197 13.5664 8.59863C13.5664 8.3153 13.4706 8.0778 13.2789 7.88613C13.0872 7.69447 12.8497 7.59863 12.5664 7.59863C12.2831 7.59863 12.0456 7.69447 11.8539 7.88613C11.6622 8.0778 11.5664 8.3153 11.5664 8.59863C11.5664 8.88197 11.6622 9.11947 11.8539 9.31113C12.0456 9.5028 12.2831 9.59863 12.5664 9.59863ZM12.5664 22.5986C11.1831 22.5986 9.88307 22.3361 8.66641 21.8111C7.44974 21.2861 6.39141 20.5736 5.49141 19.6736C4.59141 18.7736 3.87891 17.7153 3.35391 16.4986C2.82891 15.282 2.56641 13.982 2.56641 12.5986C2.56641 11.2153 2.82891 9.9153 3.35391 8.69863C3.87891 7.48197 4.59141 6.42363 5.49141 5.52363C6.39141 4.62363 7.44974 3.91113 8.66641 3.38613C9.88307 2.86113 11.1831 2.59863 12.5664 2.59863C13.9497 2.59863 15.2497 2.86113 16.4664 3.38613C17.6831 3.91113 18.7414 4.62363 19.6414 5.52363C20.5414 6.42363 21.2539 7.48197 21.7789 8.69863C22.3039 9.9153 22.5664 11.2153 22.5664 12.5986C22.5664 13.982 22.3039 15.282 21.7789 16.4986C21.2539 17.7153 20.5414 18.7736 19.6414 19.6736C18.7414 20.5736 17.6831 21.2861 16.4664 21.8111C15.2497 22.3361 13.9497 22.5986 12.5664 22.5986ZM12.5664 20.5986C14.7997 20.5986 16.6914 19.8236 18.2414 18.2736C19.7914 16.7236 20.5664 14.832 20.5664 12.5986C20.5664 10.3653 19.7914 8.47363 18.2414 6.92363C16.6914 5.37363 14.7997 4.59863 12.5664 4.59863C10.3331 4.59863 8.44141 5.37363 6.89141 6.92363C5.34141 8.47363 4.56641 10.3653 4.56641 12.5986C4.56641 14.832 5.34141 16.7236 6.89141 18.2736C8.44141 19.8236 10.3331 20.5986 12.5664 20.5986Z'
            fill='#1C1B1F'
          />
        </g>
      </svg>
    );
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
