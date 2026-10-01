import React from 'react';

export const Badge = ({ children, variant = 'brand', size = 'sm', className = '' }) => {
  const variants = {
    brand: 'bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 border-brand-200/50 dark:border-brand-800/50',
    sale: 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border-rose-200/50 dark:border-rose-800/50',
    success: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200/50 dark:border-emerald-800/50',
    warning: 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200/50 dark:border-amber-800/50',
    neutral: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700'
  };

  const sizes = {
    xs: 'text-[10px] px-1.5 py-0.5 rounded-md font-semibold tracking-wide uppercase',
    sm: 'text-xs px-2.5 py-0.5 rounded-full font-medium',
    md: 'text-sm px-3 py-1 rounded-full font-medium'
  };

  return (
    <span className={`inline-flex items-center border ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
};
