import { PropsWith } from '@xenopomp/advanced-types';

import cn from 'classnames';
import { FC } from 'react';

import InfoIcon from '@ui/InfoIcon/InfoIcon';

import { roundNumber } from '@utils/math-utils';

import styles from './ValuteCard.module.scss';
import { type ValuteCardProps } from './ValuteCard.props';
import { type ValuteCardHeadingProps } from './ValuteCard.props';

const ValuteCard: FC<ValuteCardProps> & {
  Heading: FC<PropsWith<'children', ValuteCardHeadingProps>>;
} = ({ currency = 'USD', nominal }) => {
  const Icon: FC<{}> = ({}) => {
    switch (currency) {
      case 'RUB': {
        return (
          <>
            <svg
              viewBox='0 0 16 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={cn(styles.icon)}
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
        );
      }

      case 'TRY': {
        return (
          <>
            <svg
              viewBox='0 0 16 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={cn(styles.icon)}
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
        );
      }

      case 'USD': {
        return (
          <>
            <svg
              viewBox='0 0 17 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={cn(styles.icon)}
            >
              <path
                d='M16.2533 1.11112C15.9453 0.581785 15.3787 0.222229 14.7222 0.222229H8.5V1.11112H16.2533ZM0.5 9.11112H16.5V10H0.5V9.11112ZM8.5 5.55556H16.5V6.44445H8.5V5.55556ZM8.5 3.77778H16.5V4.66667H8.5V3.77778ZM0.5 7.33334H16.5V8.22223H0.5V7.33334ZM2.27778 11.7778H14.7222C15.3787 11.7778 15.9453 11.4182 16.2533 10.8889H0.746667C1.05467 11.4182 1.62133 11.7778 2.27778 11.7778ZM8.5 2.00001H16.5V2.8889H8.5V2.00001Z'
                fill='#B22334'
              />
              <path
                d='M0.530222 10.3018C0.537778 10.3431 0.546222 10.3844 0.556444 10.4249C0.568 10.4698 0.582222 10.5129 0.597333 10.5564C0.636889 10.6716 0.684889 10.7827 0.745333 10.8867L0.746667 10.8889H16.2533L16.2542 10.8871C16.3142 10.7836 16.3622 10.6724 16.4018 10.5578C16.4169 10.5138 16.4316 10.4698 16.4431 10.424C16.4533 10.384 16.4618 10.3431 16.4693 10.3018C16.4876 10.204 16.5 10.1036 16.5 10H0.5C0.5 10.1036 0.512444 10.2036 0.530222 10.3018ZM0.5 8.22223H16.5V9.11111H0.5V8.22223ZM0.5 6.44445V7.33334H16.5V6.44445H8.5H0.5ZM8.5 4.66667H16.5V5.55556H8.5V4.66667ZM8.5 2.88889H16.5V3.77778H8.5V2.88889ZM0.5 2C0.5 1.89645 0.513333 1.79689 0.530222 1.69823C0.512444 1.79645 0.5 1.89645 0.5 2ZM0.556889 1.57511C0.568 1.52978 0.583556 1.48667 0.597778 1.44311C0.582667 1.48667 0.568444 1.53023 0.556889 1.57511ZM8.5 2H16.5C16.5 1.89645 16.4876 1.796 16.4693 1.69778C16.4618 1.65689 16.4538 1.616 16.4431 1.576C16.4311 1.53023 16.4169 1.48578 16.4013 1.44178C16.3618 1.32711 16.3138 1.21645 16.2538 1.11289C16.2542 1.11245 16.2538 1.11156 16.2533 1.11111H8.5V2Z'
                fill='#EEEEEE'
              />
              <path
                d='M8.5 0.222229H2.27778C1.296 0.222229 0.5 1.01823 0.5 2.00001V6.44445H8.5V0.222229Z'
                fill='#3C3B6E'
              />
              <path
                d='M1.38933 1.43378L1.66399 1.63334L1.55911 1.95556L1.83333 1.75645L2.10799 1.95556L2.00311 1.63334L2.27777 1.43378H1.93822L1.83333 1.11111L1.72888 1.43378H1.38933ZM2.27822 2.32267L2.55288 2.52223L2.44799 2.84445L2.72222 2.64534L2.99688 2.84445L2.89199 2.52223L3.16666 2.32267H2.82711L2.72222 2L2.61777 2.32267H2.27822ZM4.05599 2.32267L4.33066 2.52223L4.22577 2.84445L4.49999 2.64534L4.77466 2.84445L4.66977 2.52223L4.94444 2.32267H4.60488L4.49999 2L4.39555 2.32267H4.05599ZM5.83377 2.32267L6.10844 2.52223L6.00355 2.84445L6.27777 2.64534L6.55244 2.84445L6.44755 2.52223L6.72222 2.32267H6.38266L6.27777 2L6.17333 2.32267H5.83377ZM2.27822 4.10045L2.55288 4.3L2.44799 4.62223L2.72222 4.42311L2.99688 4.62223L2.89199 4.3L3.16666 4.10045H2.82711L2.72222 3.77778L2.61777 4.10045H2.27822ZM4.05599 4.10045L4.33066 4.3L4.22577 4.62223L4.49999 4.42311L4.77466 4.62223L4.66977 4.3L4.94444 4.10045H4.60488L4.49999 3.77778L4.39555 4.10045H4.05599ZM5.83377 4.10045L6.10844 4.3L6.00355 4.62223L6.27777 4.42311L6.55244 4.62223L6.44755 4.3L6.72222 4.10045H6.38266L6.27777 3.77778L6.17333 4.10045H5.83377ZM3.16711 1.43378L3.44177 1.63334L3.33688 1.95556L3.61111 1.75645L3.88577 1.95556L3.78088 1.63334L4.05555 1.43378H3.71599L3.61111 1.11111L3.50666 1.43378H3.16711ZM4.94488 1.43378L5.21955 1.63334L5.11466 1.95556L5.38888 1.75645L5.66355 1.95556L5.55866 1.63334L5.83333 1.43378H5.49377L5.38888 1.11111L5.28444 1.43378H4.94488ZM6.72266 1.43378L6.99733 1.63334L6.89244 1.95556L7.16666 1.75645L7.44133 1.95556L7.33644 1.63334L7.61111 1.43378H7.27155L7.16666 1.11111L7.06222 1.43378H6.72266ZM1.38933 3.21156L1.66399 3.41111L1.55911 3.73334L1.83333 3.53423L2.10799 3.73334L2.00311 3.41111L2.27777 3.21156H1.93822L1.83333 2.88889L1.72888 3.21156H1.38933ZM3.33688 3.73334L3.61111 3.53423L3.88577 3.73334L3.78088 3.41111L4.05555 3.21156H3.71599L3.61111 2.88889L3.50666 3.21156H3.16711L3.44177 3.41111L3.33688 3.73334ZM4.94488 3.21156L5.21955 3.41111L5.11466 3.73334L5.38888 3.53423L5.66355 3.73334L5.55866 3.41111L5.83333 3.21156H5.49377L5.38888 2.88889L5.28444 3.21156H4.94488ZM6.72266 3.21156L6.99733 3.41111L6.89244 3.73334L7.16666 3.53423L7.44133 3.73334L7.33644 3.41111L7.61111 3.21156H7.27155L7.16666 2.88889L7.06222 3.21156H6.72266ZM1.38933 4.98934L1.66399 5.18889L1.55911 5.51111L1.83333 5.312L2.10799 5.51111L2.00311 5.18889L2.27777 4.98934H1.93822L1.83333 4.66667L1.72888 4.98934H1.38933ZM3.33688 5.51111L3.61111 5.312L3.88577 5.51111L3.78088 5.18889L4.05555 4.98934H3.71599L3.61111 4.66667L3.50666 4.98934H3.16711L3.44177 5.18889L3.33688 5.51111ZM4.94488 4.98934L5.21955 5.18889L5.11466 5.51111L5.38888 5.312L5.66355 5.51111L5.55866 5.18889L5.83333 4.98934H5.49377L5.38888 4.66667L5.28444 4.98934H4.94488ZM6.72266 4.98934L6.99733 5.18889L6.89244 5.51111L7.16666 5.312L7.44133 5.51111L7.33644 5.18889L7.61111 4.98934H7.27155L7.16666 4.66667L7.06222 4.98934H6.72266Z'
                fill='white'
              />
            </svg>
          </>
        );
      }

      case 'KZT': {
        return (
          <>
            <svg
              viewBox='0 0 16 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={cn(styles.icon)}
            >
              <path
                d='M14.2222 0H1.77778C0.796 0 0 0.796 0 1.77778V9.77778C0 10.7596 0.796 11.5556 1.77778 11.5556H14.2222C15.204 11.5556 16 10.7596 16 9.77778V1.77778C16 0.796 15.204 0 14.2222 0Z'
                fill='#4AADD6'
              />
              <path
                d='M6.57777 9.33334C8.54145 9.33334 10.1333 7.74146 10.1333 5.77778C10.1333 3.81411 8.54145 2.22223 6.57777 2.22223C4.61409 2.22223 3.02222 3.81411 3.02222 5.77778C3.02222 7.74146 4.61409 9.33334 6.57777 9.33334Z'
                fill='#FFDE00'
              />
            </svg>
          </>
        );
      }

      case 'EUR': {
        return (
          <>
            <svg
              viewBox='0 0 16 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={cn(styles.icon)}
            >
              <path
                d='M14.2222 0H1.77778C0.796 0 0 0.796 0 1.77778V9.77778C0 10.7596 0.796 11.5556 1.77778 11.5556H14.2222C15.204 11.5556 16 10.7596 16 9.77778V1.77778C16 0.796 15.204 0 14.2222 0Z'
                fill='#003399'
              />
              <path
                d='M8.23956 2.09111L8.6169 1.81689H8.15067L8.00623 1.37334L7.86223 1.81689H7.39601L7.77334 2.09111L7.6289 2.53467L8.00623 2.26045L8.38356 2.53467L8.23956 2.09111ZM8.23956 9.79467L8.6169 9.52045H8.15067L8.00623 9.07689L7.86223 9.52045H7.39601L7.77334 9.79467L7.6289 10.2382L8.00623 9.964L8.38356 10.2382L8.23956 9.79467ZM4.38801 5.94267L4.76534 5.66845H4.29867L4.15467 5.22489L4.01023 5.66845H3.54401L3.92134 5.94267L3.77734 6.38623L4.15467 6.112L4.53201 6.38623L4.38801 5.94267ZM4.88001 4.03823L5.25734 3.764H4.79067L4.64667 3.32045L4.50267 3.764H4.03601L4.41334 4.03823L4.26934 4.48178L4.64667 4.20756L5.02401 4.48178L4.88001 4.03823ZM4.88001 7.86889L5.25734 7.59467H4.79067L4.64667 7.15111L4.50267 7.59467H4.03601L4.41334 7.86889L4.26934 8.31245L4.64667 8.03823L5.02401 8.31245L4.88001 7.86889ZM6.31378 2.60711L6.69112 2.33289H6.22445L6.08045 1.88934L5.93645 2.33289H5.46978L5.84712 2.60711L5.70312 3.05067L6.08045 2.77645L6.45778 3.05067L6.31378 2.60711ZM6.31378 9.30356L6.69112 9.02934H6.22445L6.08045 8.58578L5.93645 9.02934H5.46978L5.84712 9.30356L5.70312 9.74711L6.08045 9.47334L6.45778 9.74711L6.31378 9.30356ZM11.612 5.94267L11.2347 5.66845H11.7013L11.8453 5.22489L11.9898 5.66845H12.456L12.0787 5.94267L12.2227 6.38623L11.8453 6.112L11.468 6.38623L11.612 5.94267ZM11.12 4.03823L10.7427 3.764H11.2093L11.3533 3.32045L11.4973 3.764H11.964L11.5867 4.03823L11.7307 4.48178L11.3533 4.20756L10.976 4.48178L11.12 4.03823ZM11.12 7.86889L10.7427 7.59467H11.2093L11.3533 7.15111L11.4973 7.59467H11.964L11.5867 7.86889L11.7307 8.31245L11.3533 8.03823L10.976 8.31245L11.12 7.86889ZM9.68623 2.60711L9.30889 2.33289H9.77556L9.91956 1.88934L10.0636 2.33289H10.5302L10.1529 2.60711L10.2969 3.05067L9.91956 2.77645L9.54223 3.05067L9.68623 2.60711ZM9.68623 9.30356L9.30889 9.02934H9.77556L9.91956 8.58578L10.0636 9.02934H10.5302L10.1529 9.30356L10.2969 9.74711L9.91956 9.47334L9.54223 9.74711L9.68623 9.30356Z'
                fill='#FFCC00'
              />
            </svg>
          </>
        );
      }
    }
  };

  const getProperNumber = (num: number): number | string => {
    if (num < 0.01) {
      return `< 0.01`;
    }

    return roundNumber(num, 2);
  };

  return (
    <article className={cn(styles.card)}>
      <Icon />

      <span>
        <strong>{getProperNumber(nominal)}</strong> {currency}
      </span>
    </article>
  );
};

ValuteCard.Heading = ({ children, help }) => {
  return (
    <h3 className={cn(styles.cardHeading)}>
      {children}

      {help && <InfoIcon className={cn(styles.helpIcon)} />}
    </h3>
  );
};

export default ValuteCard;
