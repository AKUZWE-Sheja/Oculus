import React from 'react';
import { Link } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

function Header({ toggleDarkMode, darkMode }) {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md text-gray-800 dark:text-white px-4 py-3 shadow-sm border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-extrabold font-dancing bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Oculus
        </h1>
        <div className="flex items-center space-x-10 font-playfair">
          <Link to="/" className="font-medium hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-200">Home</Link>
          <Link to="/about" className="font-medium hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-200">About</Link>
          <Link to="/artisans" className="font-medium hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-200">Artisans</Link>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;