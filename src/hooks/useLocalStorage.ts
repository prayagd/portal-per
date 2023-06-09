import { useCallback, useEffect, useMemo, useRef, useState } from 'preact/compat';
import { debounce } from '../helpers/function';
import { storageService } from '../services/storage/local';
import { Storage } from '../services/storage/types';
import { DateTime } from 'luxon';
import { storageKeys } from '../constants/localStorage';

export type UseLocalStorageProps<T> = {
  /** Storage key */
  key: string;
  /** Should the value be parsed (eg.: in case of objects) */
  parse?: boolean;
  /** Should the value updating be debounced (eg.: for quickly changing values) */
  debounce?: number;
  /** Should the value expire? Indicate time in seconds, or false for no expiry date. */
  expire?: number | false;
} & (T extends undefined
  ? {
      /** Default/fallback value */
      defaultValue?: T;
    }
  : {
      /** Default/fallback value */
      defaultValue: T;
    });

export interface UseLocalStorageResponse<T> {
  /** Storage state/value */
  state: T;
  /** Set storage value */
  set: (data: T) => void;
  /** Merge storage value with existing (eg.: updating part of an object) */
  merge: (data: Partial<T> | ((data: T) => T)) => void;
  /** Clear storage value */
  clear: () => void;
}

const getState = <T>(key: string, defaultValue: T, parse = false): T => {
  if (!parse) return (storageService.get(key) as T) ?? defaultValue;
  const parsed = storageService.getParsed<T>(key, defaultValue) as T;
  return defaultValue !== undefined
    ? ({
        ...defaultValue,
        ...parsed,
      } as T)
    : parsed;
};

export const useLocalStorage = <T>({
  key,
  defaultValue,
  parse = false,
  debounce: debounceTime,
  expire
}: UseLocalStorageProps<T>): UseLocalStorageResponse<T> => {
  type TResponse = UseLocalStorageResponse<T>;
  const firstRef = useRef(false);
  const storageSet = useMemo<Storage['set']>(
    () => (debounceTime ? debounce(storageService.set, debounceTime) : storageService.set),
    [debounceTime],
  );

  const [state, setState] = useState<T>(() => getState<T>(key, defaultValue as T, parse));
  const set = useCallback<TResponse['set']>(
    (value) => {
      storageSet(key, value);
      setState(value);
      if (expire) {
        const expiryDate = DateTime.now().plus({ seconds: expire });
        const expiryKey = `${key}${storageKeys.EXPIRY_DATE}`;
        storageSet(expiryKey, expiryDate);
        debounce(storageService.remove, expire * 1000)(key);
        debounce(storageService.remove, expire * 1000)(expiryKey);
      } 
    },
    [key, storageSet],
  );
  const clear = useCallback<TResponse['clear']>(() => {
    storageService.remove(key);
    setState(defaultValue as T);
  }, [defaultValue, key]);
  const merge = useCallback<TResponse['merge']>(
    (value) => {
      setState((prev) => {
        const newVal = typeof value === 'function' ? value(prev) : ({ ...prev, ...value } as T);
        storageSet(key, newVal);
        return newVal;
      });
    },
    [key, storageSet],
  );

  useEffect(() => {
    if (firstRef.current) {
      setState(getState<T>(key, defaultValue as T, parse));
    }
    firstRef.current = true;
  }, [defaultValue, key, parse]);

  return { state, set, merge, clear };
};
