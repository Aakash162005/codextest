import { useState, useEffect } from 'react';

export function useTheme() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isLight) {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
  }, [isLight]);

  const toggleTheme = () => setIsLight(!isLight);

  return { isLight, toggleTheme };
}
