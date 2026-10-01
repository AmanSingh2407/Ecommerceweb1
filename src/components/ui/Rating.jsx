import React from 'react';
import { Star } from 'lucide-react';

export const Rating = ({ rating = 5, reviewCount = null, size = 'sm', showValue = true, className = '' }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const sizeClass = size === 'xs' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4';

  return (
    <div className={`inline-flex items-center gap-1 ${className}`}>
      <div className="flex items-center text-amber-400">
        {stars.map((star) => (
          <Star
            key={star}
            className={`${sizeClass} ${
              star <= Math.floor(rating)
                ? 'fill-amber-400 text-amber-400'
                : star - 0.5 <= rating
                ? 'fill-amber-200 text-amber-400 dark:fill-amber-900'
                : 'text-slate-300 dark:text-slate-700'
            }`}
          />
        ))}
      </div>
      {showValue && (
        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 ml-1">
          {rating.toFixed(1)}
        </span>
      )}
      {reviewCount !== null && (
        <span className="text-xs text-slate-400 dark:text-slate-500">
          ({reviewCount})
        </span>
      )}
    </div>
  );
};
