import React from 'react';
import { useTheme } from '../ThemeContext';

const DarkModeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="max-w-lg mx-auto mb-4">
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-lg border ${
          darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'
        }`}
      >
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default DarkModeToggle;
