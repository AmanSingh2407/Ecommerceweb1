import React from 'react';
import { useUIStore } from '../store/uiStore';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { ThemeToggle } from '../components/navbar/ThemeToggle';
import { Moon, Sun, Bell, Shield, Trash2 } from 'lucide-react';
import { clearAllStorage } from '../utils/localStorage';
import { Button } from '../components/ui/Button';

export const Settings = () => {
  const { theme, setTheme, addToast } = useUIStore();

  const handleResetData = () => {
    if (window.confirm('Are you sure you want to reset all stored local data?')) {
      clearAllStorage();
      addToast('Local storage cleared. Refreshing page...', 'info');
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 space-y-8 max-w-3xl">
      <Breadcrumb items={[{ label: 'Profile', link: '/profile' }, { label: 'Settings' }]} />

      <div className="pb-6 border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
          Preferences & Settings
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">Configure your app appearance and data options</p>
      </div>

      <div className="space-y-6">
        
        {/* Appearance Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-subtle space-y-4">
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Sun className="w-4 h-4 text-amber-500" /> Color Theme Mode
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setTheme('light')}
              className={`p-4 rounded-2xl border flex items-center gap-3 text-xs font-bold transition-all ${
                theme === 'light'
                  ? 'border-brand-600 bg-brand-50 text-brand-700 ring-2 ring-brand-500/20'
                  : 'border-slate-200 dark:border-slate-800 text-slate-600'
              }`}
            >
              <Sun className="w-5 h-5 text-amber-500" />
              <span>Light Theme</span>
            </button>

            <button
              onClick={() => setTheme('dark')}
              className={`p-4 rounded-2xl border flex items-center gap-3 text-xs font-bold transition-all ${
                theme === 'dark'
                  ? 'border-brand-600 bg-slate-800 text-white ring-2 ring-brand-500/20'
                  : 'border-slate-200 dark:border-slate-800 text-slate-400'
              }`}
            >
              <Moon className="w-5 h-5 text-indigo-400" />
              <span>Dark Theme</span>
            </button>
          </div>
        </div>

        {/* Local Storage Controls */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-subtle space-y-3">
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-600" /> App Data & Reset
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            All cart items, order history, wishlist, user credentials, and addresses are saved inside your browser's LocalStorage.
          </p>
          <div className="pt-2">
            <Button variant="danger" size="sm" icon={Trash2} onClick={handleResetData}>
              Reset Local Storage Data
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
