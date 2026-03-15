"use client";

import React, { createContext, useEffect } from 'react';

// Create context with default values
export const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Force light mode and remove any previously persisted dark mode.
    const root = document.documentElement;
    root.classList.remove('dark');
    root.setAttribute('data-theme', 'light');

    try {
      localStorage.setItem('theme', 'light');
    } catch {
      // ignore
    }
  }, []);

  const toggleTheme = () => {
    // Dark mode disabled intentionally.
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode: false, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}; 