import { FunctionPrimitive } from '@xenopomp/advanced-types';

export interface InfoPopupProps {
  isShown: boolean;
  toggleShown: FunctionPrimitive;
  changeShown: (newValue: boolean) => any;
}
