import React from 'react';
import { useTheme } from './context/ThemeContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar'; // Create this next

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();

  const isSidebarTheme = theme === 'theme2';

  const layoutClass = {
    theme1: 'bg-gray-100 font-sans',
    theme2: 'bg-gray-800 font-serif',
    theme3: 'bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 text-purple-900 font-pacifico',
  }[theme];

  return (
    <div className={`${layoutClass} min-h-screen pt-16`}>
      <Header />
      <div className={`${isSidebarTheme ? 'flex' : ''}`}>
        {isSidebarTheme && <Sidebar />}
        <main className="p-4 w-full">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
