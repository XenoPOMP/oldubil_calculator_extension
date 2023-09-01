import { DeepPartial } from 'redux';

import { useAppDispatch, useAppSelector } from '@redux/hooks';
import {
  AppSettings,
  changeBankingSystem,
  changeLang
} from '@redux/reducers/appSettingsSlice';

type SettingController<T> = {
  get: () => T;
  set: (newValue: T) => void;
} & (T extends boolean
  ? {
      toggle: () => void;
    }
  : {});

interface IUseAppSettings
  extends Record<
    Exclude<keyof AppSettings, 'currencies' | 'fetchedLiraPrice'>,
    DeepPartial<SettingController<any>>
  > {
  appVersion: Omit<SettingController<AppSettings['appVersion']>, 'set'>;
  appName: Omit<SettingController<AppSettings['appName']>, 'set'>;
  language: SettingController<AppSettings['language']>;
  bankingSystem: SettingController<AppSettings['bankingSystem']>;
}

const useAppSettings = (): IUseAppSettings => {
  const { appVersion, appName, language, bankingSystem }: AppSettings =
    useAppSelector(state => state.appSettings);

  const dispatch = useAppDispatch();

  return {
    appVersion: {
      get: () => appVersion
    },

    appName: {
      get: () => appName
    },

    language: {
      get: () => language,
      set: newValue => dispatch(changeLang(newValue))
    },

    bankingSystem: {
      get: () => bankingSystem,
      set: newValue => dispatch(changeBankingSystem(newValue))
    }
  };
};

export default useAppSettings;
