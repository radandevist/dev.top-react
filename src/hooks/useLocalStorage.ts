import { useState, useEffect } from 'react';

const getLocalValue = <T>(key: string, initialValue: T) => {
  // If using SSR Next.js
  if (typeof window === 'undefined') return initialValue;

  // If a value is already stored
  const item = localStorage.getItem(key);
  if (!item) return initialValue;

  const localValue = JSON.parse(item);
  if (localValue) return localValue;

  // If a value is a result of a function
  if (initialValue instanceof Function) return initialValue();

  return initialValue;
};

const useLocalStorage = <T = any>(key: string, initialValue: T) => {
  const [value, setValue] = useState(() => getLocalValue(key, initialValue));

  useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
