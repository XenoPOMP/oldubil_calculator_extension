import { CSSProperties } from 'react';

export interface LoaderProps extends Pick<CSSProperties, 'height'> {
  type: 'circle' | 'three-dots' | 'wave';
  className?: string;
  mainColor: string;
}
