import { useEffect, useState } from 'react';

import { useLocalStorage } from '@hooks/useLocalStorage';

export const usePersistedState = <T>(
  key: string,
  state: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [localState, setLocalState] = useState<T>(state);

  const [getItem, setItem] = useLocalStorage(key, state);

  useEffect(() => {
    setLocalState(getItem);
  }, []);

  useEffect(() => {
    setItem(localState);
  }, [localState]);

  return [localState, setLocalState];
};
