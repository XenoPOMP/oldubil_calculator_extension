import { PropsWith } from '@xenopomp/advanced-types';
import { roundNumber } from '@xenopomp/advanced-utils';

import cn from 'classnames';
import { FC, ReactNode, useContext } from 'react';

import { useAppSelector } from '@redux/hooks';

import { FetcherContext } from '@providers/Fetcher/Fetcher';

import CheckBox from '@ui/CheckBox/CheckBox';
import InfoIcon from '@ui/InfoIcon/InfoIcon';
import Loader from '@ui/Loader/Loader';

import useAppSettings from '@hooks/useAppSettings';
import { useBankingCommission } from '@hooks/useBankingCommission';
import { inlineLocaleVar, useLocalization } from '@hooks/useLocalization';

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
  const turkishCurrency = useAppSelector(
    state => state.appSettings.currencies
  ).tl;
  const FETCHED_LIRA_COURSE = useAppSelector(
    state => state.appSettings.fetchedLiraPrice
  );
  const OFFICIAL_LIRA_COURSE = roundNumber(
    useAppSelector(state => state.appSettings.officialLiraCurrency) ??
      LIRA_TO_ROUBLE,
    2
  );

  const getCommissionWarningString = (): string => {
    const resultCourse = russianCurrency ?? 0;

    const fromOfficialCourse = roundNumber(
      OFFICIAL_LIRA_COURSE * (turkishCurrency ?? 0),
      2
    );

    const expression = roundNumber(resultCourse - fromOfficialCourse, 2);

    const textOutput = `${expression}`;

    if (/\.\d+$/gi.test(textOutput)) {
      return `~${expression}`;
    }

    return textOutput;
  };

  const WarningSection: FC<
    PropsWith<'className' | 'children', { followFetch?: boolean }>
  > = ({ className, children, followFetch = false }) => {
    const { isFetching } = useContext(FetcherContext);

    return (
      <section className={cn(styles.info, styles.warning, className)}>
        <InfoIcon />

        {followFetch && isFetching ? (
          <>
            <Loader
              height={'5px'}
              type={'three-dots'}
              className={cn('text-warning')}
            />
          </>
        ) : (
          <div>{children}</div>
        )}
      </section>
    );
  };

  return (
    <>
      <WarningSection followFetch>
        {inlineLocaleVar(loc.totalCommissionWarning, {
          variableName: 'CHARGE',
          replacement: getCommissionWarningString()
        })}
      </WarningSection>

      <WarningSection followFetch>
        {inlineLocaleVar(loc.liraToRouble, {
          variableName: 'LIRA_COUNT',
          replacement: `${FETCHED_LIRA_COURSE ?? LIRA_TO_ROUBLE}`
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
