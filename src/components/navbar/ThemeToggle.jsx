import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useUIStore } from '../../store/uiStore';

export const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useUIStore();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className={`p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${className}`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-amber-400 animate-fade-in" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700 animate-fade-in" />
      )}
    </button>
  );
};
