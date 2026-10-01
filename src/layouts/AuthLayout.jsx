import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ToastContainer } from '../components/common/ToastContainer';
import { ThemeToggle } from '../components/navbar/ThemeToggle';
import { ScrollToTop } from '../components/common/ScrollToTop';

export const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-4 sm:p-6 transition-colors duration-200">
      <ScrollToTop />
      
      {/* Top Bar */}
      <div className="flex items-center justify-between container mx-auto max-w-5xl">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-brand-600 text-white font-black flex items-center justify-center">A</div>
          <span className="font-extrabold text-lg text-slate-900 dark:text-white tracking-tight">AURA</span>
        </Link>
        <ThemeToggle />
      </div>

      {/* Main Auth Card Container */}
      <div className="my-auto py-8">
        <Outlet />
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-xs text-slate-400 py-4">
        © 2026 AURA Studio. All rights reserved.
      </div>

      <ToastContainer />
    </div>
  );
};
