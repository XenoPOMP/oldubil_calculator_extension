import cn from 'classnames';
import { FC } from 'react';

import CheckBox from '@ui/CheckBox/CheckBox';

import useAppSettings from '@hooks/useAppSettings';
import { useBankingCommission } from '@hooks/useBankingCommission';
import { inlineLocaleVar, useLocalization } from '@hooks/useLocalization';

import { LIRA_TO_ROUBLE, OLDUBIL_COMMISSION } from '../../../app.constants';

import styles from './InfoPreview.module.scss';
import type { InfoPreviewProps } from './InfoPreview.props';

const InfoPreview: FC<InfoPreviewProps> = ({}) => {
  const loc = useLocalization();
  const bankingCommission = useBankingCommission();
  const { bankingSystem } = useAppSettings();

  return (
    <>
      <section className={cn(styles.info)}>
        <span>
          {inlineLocaleVar(loc.liraToRouble, {
            variableName: 'LIRA_COUNT',
            replacement: `${LIRA_TO_ROUBLE}`
          })}
        </span>

        <span>
          {inlineLocaleVar(loc.odlubilCommission, {
            variableName: 'PERCENT',
            replacement: `${OLDUBIL_COMMISSION}`
          })}
        </span>
      </section>

      <section className={cn(styles.info)}>
        <span>
          {inlineLocaleVar(loc.bankSystemCommission, {
            variableName: 'PERCENT',
            replacement: `${bankingCommission}`
          })}
        </span>
      </section>

      <section className={cn(styles.additionalSettings)}>
        <button
          className={cn(
            styles.control,
            bankingSystem.get() === 'QIWI' && styles.active
          )}
          onClick={() => {
            bankingSystem.set('QIWI');
          }}
        >
          QIWI
        </button>

        <button
          className={cn(
            styles.control,
            bankingSystem.get() === 'BANK' && styles.active
          )}
          onClick={() => {
            bankingSystem.set('BANK');
          }}
        >
          {loc.bankCard}
        </button>

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
    </>
  );
};

export default InfoPreview;
