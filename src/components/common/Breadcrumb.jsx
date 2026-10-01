import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumb = ({ items = [] }) => {
  return (
    <nav className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 overflow-x-auto py-2">
      <Link
        to="/"
        className="flex items-center gap-1 hover:text-brand-600 dark:hover:text-brand-400 transition-colors shrink-0"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            {isLast || !item.link ? (
              <span className="font-semibold text-slate-800 dark:text-slate-200 truncate shrink-0 max-w-[200px]">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.link}
                className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors shrink-0"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
