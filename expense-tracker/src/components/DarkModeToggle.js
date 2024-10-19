import React from 'react';
import { useTheme } from '../ThemeContext';

const DarkModeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="max-w-lg mx-auto mb-4">
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-lg border transition-colors duration-300 ease-in-out ${
          darkMode 
            ? 'bg-gray-800 text-white border-gray-600 hover:bg-gray-700' 
            : 'bg-gray-200 text-black border-gray-300 hover:bg-gray-300'
        }`}
      >
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default DarkModeToggle;
