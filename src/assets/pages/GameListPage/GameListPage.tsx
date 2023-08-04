import cn from 'classnames';
import React, { FC } from 'react';

import Page from '@components/Page/Page';

import styles from './GameListPage.module.scss';
import { GameListPageProps } from './GameListPage.props';

const GameListPage: FC<GameListPageProps> = ({}) => {
  return (
    <Page meta={{ title: 'Game list', description: '', keywords: '' }} noIndex>
      <div className={cn(styles.gameListPage)}>Game list page</div>
    </Page>
  );
};

export default GameListPage;
