import { User } from "@/types/users";
import React from "react";

type LocalStorageType = {
  Authentication: User | undefined;
};

type LocalStorageCtx = {
  values: LocalStorageType;
  setValue: <K extends keyof LocalStorageType>(
    key: K,
    value: LocalStorageType[K]
  ) => void;
};

const LocalStorageContext = React.createContext<LocalStorageCtx>({
  setValue: (key) => {},
  values: { Authentication: undefined },
});

const getItemFromLocalStorage = <K extends keyof LocalStorageType>(
  key: K
): LocalStorageType[K] | undefined => {
  if (typeof window !== "undefined") {
    const item = window.localStorage.getItem(key);
    if (item) return JSON.parse(item) as LocalStorageType[K];
  }
  return undefined;
};
const getLocalStorageValue = (): LocalStorageType => {
  const localStorageValue: any = {};
  if (typeof window !== "undefined")
    Object.keys(window.localStorage).forEach((key) => {
      const item = getItemFromLocalStorage(key as keyof LocalStorageType);
      if (item) localStorageValue[key] = item;
    });
  return localStorageValue;
};

const LocalStorageProvider = ({ children }: { children: React.ReactNode }) => {
  const [_localStorage, _setLocalStorage] = React.useState<LocalStorageType>(
    getLocalStorageValue()
  );

  const setValue = <K extends keyof LocalStorageType>(
    key: K,
    value: LocalStorageType[K]
  ) => {
    localStorage.setItem(key, JSON.stringify(value));
    _setLocalStorage((ls) => ({ ...ls, [key]: value }));
  };

  return (
    <LocalStorageContext.Provider value={{ values: _localStorage, setValue }}>
      {children}
    </LocalStorageContext.Provider>
  );
};

type A<K extends keyof LocalStorageType> = [
  LocalStorageType[K],
  (v: LocalStorageType[K]) => void
];
type B = [
  LocalStorageType,
  <T extends keyof LocalStorageType>(key: T, value: LocalStorageType[T]) => void
];
function useLocalStorage<K extends keyof LocalStorageType>(key: K): A<K>;
function useLocalStorage(): B;
function useLocalStorage<K extends keyof LocalStorageType>(key?: K): A<K> | B {
  const { values, setValue } = React.useContext(LocalStorageContext);

  if (key)
    return [
      values[key],
      (value: LocalStorageType[typeof key]) => {
        setValue(key, value);
      },
    ];
  return [values, setValue];
}

export { LocalStorageProvider, useLocalStorage, getItemFromLocalStorage };
