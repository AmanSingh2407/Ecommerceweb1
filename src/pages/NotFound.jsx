import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Home, Compass } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center space-y-6">
      <div className="w-24 h-24 bg-brand-50 dark:bg-brand-950/60 text-brand-600 rounded-3xl flex items-center justify-center">
        <Compass className="w-12 h-12 animate-spin-slow" />
      </div>

      <div className="space-y-2">
        <span className="text-4xl sm:text-6xl font-black text-brand-600 dark:text-brand-400">404</span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
          The page you are looking for might have been moved, renamed, or doesn't exist.
        </p>
      </div>

      <div className="flex items-center gap-4 pt-4">
        <Link to="/">
          <Button variant="primary" size="md" icon={Home}>
            Back to Homepage
          </Button>
        </Link>
        <Link to="/shop">
          <Button variant="outline" size="md">
            Explore Shop
          </Button>
        </Link>
      </div>
    </div>
  );
};
