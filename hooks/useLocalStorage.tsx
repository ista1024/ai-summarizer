"use client";
import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // State to store our value
  const [value, setValue] = useState<T>(() => {
    if (typeof window !== 'undefined') {
      // Retrieve the value from local storage
      const storedValue = localStorage.getItem(key);
      // Parse and return the stored value if it exists
      return storedValue ? (JSON.parse(storedValue) as T) : initialValue;
    } else {
      return initialValue;
    }
  });

  // Update the value in local storage whenever it changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
