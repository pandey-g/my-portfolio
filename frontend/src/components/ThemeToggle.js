import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Sync theme with localStorage and system preference
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkMode = savedDarkMode !== null ? savedDarkMode : systemDarkMode;
    setDarkMode(isDarkMode);

    // Apply dark mode class to the root element
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);

    // Apply dark mode class to the root element
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;