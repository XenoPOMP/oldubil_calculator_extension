import { PropsWith } from '@xenopomp/advanced-types';

import { FC, useEffect } from 'react';
import scrapSite from 'ts-website-scrapper';

import { useAppDispatch } from '@redux/hooks';

import type { FetcherProps } from './Fetcher.props';

const Fetcher: FC<PropsWith<'children', FetcherProps>> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    scrapSite(
      'https://oldubil-balance.ru',
      {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      },
      'script'
    ).then(res => {
      console.log(res.root);
    });
  });

  return <>{children}</>;
};

export default Fetcher;
