import { RecordValue } from '@xenopomp/advanced-types';

import cn from 'classnames';
import { FC, ReactNode, useEffect, useState } from 'react';
import NumericInput from 'react-numeric-input';
import { useDispatch } from 'react-redux';

import { useAppDispatch, useAppSelector } from '@redux/hooks';
import {
  AppSettings,
  changeCurrencyCount
} from '@redux/reducers/appSettingsSlice';

import styles from './CurrencyInput.module.scss';
import type { CurrencyInputProps } from './CurrencyInput.props';

const CurrencyInput: FC<CurrencyInputProps> = ({ heading, currency }) => {
  const currencyIcons: Record<typeof currency, ReactNode> = {
    ru: (
      <>
        <svg
          width='16'
          height='12'
          viewBox='0 0 16 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M16 10C16 10.9818 15.204 11.7778 14.2222 11.7778H1.77778C0.796 11.7778 0 10.9818 0 10V8.22223H16V10Z'
            fill='#CE2028'
          />
          <path d='M0 3.77783H16V8.22228H0V3.77783Z' fill='#22408C' />
          <path
            d='M14.2222 0.222229H1.77778C0.796 0.222229 0 1.01823 0 2.00001V3.77778H16V2.00001C16 1.01823 15.204 0.222229 14.2222 0.222229Z'
            fill='#EEEEEE'
          />
        </svg>
      </>
    ),
    tl: (
      <>
        <svg
          width='16'
          height='12'
          viewBox='0 0 16 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M16 10C16 10.9818 15.204 11.7778 14.2222 11.7778H1.77778C0.796 11.7778 0 10.9818 0 10V2.00001C0 1.01823 0.796 0.222229 1.77778 0.222229H14.2222C15.204 0.222229 16 1.01823 16 2.00001V10Z'
            fill='#E30917'
          />
          <path
            d='M7.11111 8.66668C5.63822 8.66668 4.44445 7.47334 4.44445 6.00001C4.44445 4.52712 5.63822 3.33334 7.11111 3.33334C7.69333 3.33334 8.23111 3.52223 8.66978 3.83912C8.07067 3.16179 7.19778 2.73201 6.22222 2.73201C4.41733 2.73201 2.95422 4.19512 2.95422 6.00001C2.95422 7.80534 4.41733 9.26845 6.22222 9.26845C7.19778 9.26845 8.07111 8.83868 8.66978 8.1609C8.23156 8.47779 7.69422 8.66668 7.11111 8.66668ZM8.85022 6.10223L9.93467 6.35201L10.0324 7.46001L10.6049 6.50623L11.6893 6.75557L10.9587 5.91645L11.5307 4.96223L10.5071 5.39779L9.77645 4.55823L9.87422 5.66668L8.85022 6.10223Z'
            fill='#EEEEEE'
          />
        </svg>
      </>
    )
  };

  const dispatch = useAppDispatch();

  /** Redux state. */
  const input = useAppSelector(state => state.appSettings.currencies[currency]);

  /** Change redux state. */
  const changeInput = (value: RecordValue<AppSettings['currencies']>) => {
    dispatch(
      changeCurrencyCount({
        currency: currency,
        count: value
      })
    );
  };

  return (
    <section className={cn(styles.currencyInput)}>
      {heading && <h2>{heading}</h2>}

      <article className={cn(styles.input)}>
        <div className={cn(styles.iconBlock)}>{currencyIcons[currency]}</div>

        <NumericInput
          strict
          value={input as string | number | undefined}
          onChange={val => {
            changeInput(val);
          }}
        />
      </article>
    </section>
  );
};

export default CurrencyInput;
