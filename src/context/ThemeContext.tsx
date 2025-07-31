import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Theme = 'theme1' | 'theme2' | 'theme3';

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps>({ theme: 'theme1', setTheme: () => {} });

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || 'theme1');
  useEffect(() => {
  document.documentElement.className = theme;
  localStorage.setItem('theme', theme);
}, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
