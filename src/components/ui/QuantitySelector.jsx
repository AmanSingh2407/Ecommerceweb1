import React from 'react';
import { Plus, Minus } from 'lucide-react';

export const QuantitySelector = ({ quantity, onIncrease, onDecrease, min = 1, max = 99, disabled = false, size = 'md' }) => {
  const sizeStyles = {
    sm: 'h-8 text-xs',
    md: 'h-10 text-sm',
    lg: 'h-12 text-base'
  };

  const buttonPadding = {
    sm: 'w-8',
    md: 'w-10',
    lg: 'w-12'
  };

  return (
    <div className={`inline-flex items-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 ${sizeStyles[size]}`}>
      <button
        type="button"
        onClick={onDecrease}
        disabled={disabled || quantity <= min}
        className={`${buttonPadding[size]} h-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-l-xl transition-colors disabled:opacity-40 disabled:cursor-not-allowed`}
      >
        <Minus className="w-3.5 h-3.5" />
      </button>
      <span className="px-3 font-semibold text-slate-900 dark:text-slate-100 min-w-[2.5rem] text-center">
        {quantity}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        disabled={disabled || quantity >= max}
        className={`${buttonPadding[size]} h-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-r-xl transition-colors disabled:opacity-40 disabled:cursor-not-allowed`}
      >
        <Plus className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
