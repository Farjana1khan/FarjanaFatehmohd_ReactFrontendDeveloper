import React, { useState } from 'react';
import { useTheme, Theme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as Theme);
    setOpen(false); // close menu after theme change on mobile
  };

  const handleLinkClick = () => {
    setOpen(false); // close menu after link click
  };

  // Theme-based classes
  const navBase =
    theme === 'theme2'
      ? 'bg-gray-800 text-white font-serif'
      : 'bg-gray-100  ';

  const selectBase =
    theme === 'theme2'
      ? 'bg-gray-800 text-white font-serif border-white'
      : 'bg-gray-100';

  return (
    <header className={`w-full ${navBase} shadow-2xl fixed top-0 z-50 px-6 py-5 flex justify-between items-center`}>
      <div className="text-lg ">Multi-Theme App</div>

      {/* Desktop Navigation */}
      <nav className={`hidden md:flex gap-4 items-center ${theme === 'theme2' ? 'hidden' : ''}`}>
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <select value={theme} onChange={handleChange} className={`ml-4 p-1 rounded border ${selectBase}`}>
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </nav>

      {/* Hamburger for mobile */}
      <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-14 right-0 w-80 h-[calc(100vh-3.5rem)] p-4 z-40
        transform transition-transform duration-300 ease-in-out
        ${open ? 'translate-x-0' : 'translate-x-full'}
        md:hidden flex flex-col gap-4 shadow-xl ${navBase}`}
      >
        <Link to="/" onClick={handleLinkClick} className="hover:underline">
          Home
        </Link>
        <Link to="/about" onClick={handleLinkClick} className="hover:underline">
          About
        </Link>
        <Link to="/contact" onClick={handleLinkClick} className="hover:underline">
          Contact
        </Link>

        <select
          value={theme}
          onChange={handleChange}
          className={`mt-2 p-1 rounded border ${selectBase}`}
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
