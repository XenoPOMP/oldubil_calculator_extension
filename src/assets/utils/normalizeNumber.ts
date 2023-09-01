import { isUndefined } from '@utils/type-checks';

/**
 * This function normalize number. Converts **null** and **undefined** to zero (0).
 *
 * @param num
 *
 * @example
 * const num: number | null = null;
 *
 * if (someCondition) {
 *   num = 2;
 * }
 *
 * console.log(10 * normalizeNumber(num)); // num will be converted to 0 if needed.
 */
export const normalizeNumber = (num: number | null | undefined): number => {
  if (num === null || isUndefined(num)) {
    return 0;
  }

  return num;
};
