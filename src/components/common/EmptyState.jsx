import React from 'react';
import { PackageOpen } from 'lucide-react';
import { Button } from '../ui/Button';

export const EmptyState = ({
  icon: Icon = PackageOpen,
  title = 'No items found',
  description = 'Looks like there is nothing to display here yet.',
  actionText = 'Continue Shopping',
  actionLink = '/shop',
  onAction = null
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 sm:p-12 my-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm max-w-lg mx-auto">
      <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 mb-6">
        <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mb-8 leading-relaxed">
        {description}
      </p>
      {actionText && (
        onAction ? (
          <Button onClick={onAction} variant="primary" size="md">
            {actionText}
          </Button>
        ) : (
          <Button onClick={() => window.location.href = actionLink} variant="primary" size="md">
            {actionText}
          </Button>
        )
      )}
    </div>
  );
};
