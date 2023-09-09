import { useOutside } from '@pacote/react-use-outside';
import cn from 'classnames';
import { FC, useRef } from 'react';

import Overlay from '@ui/Overlay/Overlay';

import useAppSettings from '@hooks/useAppSettings';
import useBoolean from '@hooks/useBoolean';
import { inlineLocaleVar, useLocalization } from '@hooks/useLocalization';

import styles from './InfoPopup.module.scss';
import type { InfoPopupProps } from './InfoPopup.props';

const InfoPopup: FC<InfoPopupProps> = ({
  isShown,
  toggleShown,
  changeShown
}) => {
  const gripRefObject = useOutside<HTMLDivElement>('click', () => {
    changeShown(false);
  });

  const { appVersion } = useAppSettings();

  const loc = useLocalization();

  return (
    <Overlay trigger={isShown} flexCenter className={cn(styles.popup)}>
      <div className={cn(styles.grip)} ref={gripRefObject}>
        {inlineLocaleVar(loc.infoAppVersion, {
          variableName: 'VERSION',
          replacement: appVersion.get()
        })}
      </div>
    </Overlay>
  );
};

export default InfoPopup;
