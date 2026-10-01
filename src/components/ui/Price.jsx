import React from 'react';
import { formatCurrency, calculateDiscount } from '../../utils/formatters';

export const Price = ({ price, originalPrice = null, size = 'md', className = '' }) => {
  const discount = calculateDiscount(originalPrice, price);

  const sizes = {
    sm: 'text-sm font-semibold',
    md: 'text-base font-bold',
    lg: 'text-2xl font-extrabold',
    xl: 'text-3xl font-extrabold'
  };

  return (
    <div className={`inline-flex items-baseline gap-2 flex-wrap ${className}`}>
      <span className={`${sizes[size]} text-slate-900 dark:text-slate-100`}>
        {formatCurrency(price)}
      </span>
      {originalPrice && originalPrice > price && (
        <>
          <span className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 line-through font-normal">
            {formatCurrency(originalPrice)}
          </span>
          {discount > 0 && (
            <span className="text-xs font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-1.5 py-0.5 rounded">
              {discount}% OFF
            </span>
          )}
        </>
      )}
    </div>
  );
};
