import cn from 'classnames';
import { FC } from 'react';

import { inlineLocaleVar, useLocalization } from '@hooks/useLocalization';

import { LIRA_TO_ROUBLE, OLDUBIL_COMMISSION } from '../../../app.constants';

import styles from './InfoPreview.module.scss';
import type { InfoPreviewProps } from './InfoPreview.props';

const InfoPreview: FC<InfoPreviewProps> = ({}) => {
  const loc = useLocalization();

  return (
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
  );
};

export default InfoPreview;
