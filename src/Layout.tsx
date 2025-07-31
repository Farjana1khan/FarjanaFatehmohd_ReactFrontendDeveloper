import React from 'react';
import { useTheme } from './context/ThemeContext';
import Header from './components/Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();

  const baseClass = {
    theme1: 'bg-gray-100  font-sans font-normal',
    theme2: 'bg-gray-800 font-serif flex font-bold',
    theme3: 'bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 text-purple-900 font-pacifico',
    
  }[theme];

  return (
    <div className={baseClass + ' min-h-screen pt-16'}>
      <Header />
      <main className="p-4 w-full">{children}</main>
    </div>
  );
};

export default Layout;
