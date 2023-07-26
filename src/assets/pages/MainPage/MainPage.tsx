import cn from 'classnames';

import CurrencyInput from '@components/CurrencyInput/CurrencyInput';
import InfoPreview from '@components/InfoPreview/InfoPreview';
import Page from '@components/Page/Page';

import { useLocalization } from '@hooks/useLocalization';

import styles from './MainPage.module.scss';

const MainPage = () => {
  const loc = useLocalization();

  return (
    <Page
      meta={{
        title: 'Main',
        description: 'Some description',
        keywords: ''
      }}
    >
      <div className={cn(styles.mainPage)}>
        <div className={cn(styles.inputGroup)}>
          <CurrencyInput heading={loc.iGot} currency={'ru'} />

          <CurrencyInput heading={loc.illGet} currency={'tl'} />
        </div>

        <InfoPreview />
      </div>
    </Page>
  );
};

export default MainPage;
