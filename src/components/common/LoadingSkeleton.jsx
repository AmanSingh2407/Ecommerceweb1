import React from 'react';

export const ProductCardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-4 space-y-3 animate-pulse">
      <div className="w-full aspect-square bg-slate-200 dark:bg-slate-800 rounded-xl" />
      <div className="h-3 w-1/3 bg-slate-200 dark:bg-slate-800 rounded" />
      <div className="h-4 w-4/5 bg-slate-200 dark:bg-slate-800 rounded" />
      <div className="h-4 w-1/2 bg-slate-200 dark:bg-slate-800 rounded" />
      <div className="pt-2 flex justify-between items-center">
        <div className="h-5 w-1/3 bg-slate-200 dark:bg-slate-800 rounded" />
        <div className="h-9 w-9 bg-slate-200 dark:bg-slate-800 rounded-xl" />
      </div>
    </div>
  );
};

export const ProductGridSkeleton = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
};

export const ProductDetailsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 animate-pulse">
      <div className="space-y-4">
        <div className="w-full aspect-square bg-slate-200 dark:bg-slate-800 rounded-2xl" />
        <div className="flex gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="w-20 h-20 bg-slate-200 dark:bg-slate-800 rounded-xl" />
          ))}
        </div>
      </div>
      <div className="space-y-6">
        <div className="h-4 w-1/4 bg-slate-200 dark:bg-slate-800 rounded" />
        <div className="h-8 w-3/4 bg-slate-200 dark:bg-slate-800 rounded" />
        <div className="h-4 w-1/3 bg-slate-200 dark:bg-slate-800 rounded" />
        <div className="h-8 w-1/2 bg-slate-200 dark:bg-slate-800 rounded" />
        <div className="h-20 w-full bg-slate-200 dark:bg-slate-800 rounded-xl" />
        <div className="h-12 w-full bg-slate-200 dark:bg-slate-800 rounded-xl" />
      </div>
    </div>
  );
};
