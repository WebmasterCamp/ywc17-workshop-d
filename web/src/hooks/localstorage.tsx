import { useState, useEffect } from 'react';

export const useLocalStorage = function<T>(
  key: string
): [T | undefined | null, (newData: T | null) => void] {
  let initial = null;
  const raw = localStorage.getItem(key);
  if (raw) {
    try {
      const data = JSON.parse(raw);
      initial = data;
    } catch (error) {
      initial = null;
    }
  }
  const [data, setData] = useState<T | null>(initial);

  useEffect(() => {
    if (data) {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      localStorage.removeItem(key);
    }
  }, [key, data]);
  console.log('object');

  return [data, setData];
};
