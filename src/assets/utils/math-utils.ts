import { isUndefined } from '@utils/type-checks';

/**
 * This function calculates summary of numbers.
 * @param {...number[]} items   array of numbers (for example (1, 2, 3))
 * @return {number}             summary of numbers
 */
export const summary = (...items: number[]): number => {
  return items.reduce((prev, next) => (prev += next), 0);
};

export const roundNumber = (num: number, precision?: number) => {
  if (isUndefined(precision)) {
    precision = 1;
  }

  if (precision === 0) {
    return num;
  }

  return parseInt(`${num * Math.pow(10, precision)}`) / Math.pow(10, precision);
};
