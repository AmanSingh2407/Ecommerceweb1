import React from 'react';

export const Input = React.forwardRef(({
  label,
  error,
  helperText,
  icon: Icon = null,
  iconPosition = 'left',
  fullWidth = true,
  className = '',
  id,
  type = 'text',
  ...props
}, ref) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className={`${fullWidth ? 'w-full' : ''} flex flex-col gap-1.5`}>
      {label && (
        <label htmlFor={inputId} className="text-xs font-semibold text-slate-700 dark:text-slate-300">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {Icon && iconPosition === 'left' && (
          <div className="absolute left-3.5 text-slate-400 pointer-events-none">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <input
          ref={ref}
          id={inputId}
          type={type}
          className={`
            w-full rounded-xl border bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 
            transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500
            ${Icon && iconPosition === 'left' ? 'pl-10' : 'pl-4'}
            ${Icon && iconPosition === 'right' ? 'pr-10' : 'pr-4'}
            ${error ? 'border-rose-500 dark:border-rose-500 focus:ring-rose-500/20 focus:border-rose-500' : 'border-slate-200 dark:border-slate-800'}
            py-2.5 ${className}
          `}
          {...props}
        />
        {Icon && iconPosition === 'right' && (
          <div className="absolute right-3.5 text-slate-400 pointer-events-none">
            <Icon className="w-4 h-4" />
          </div>
        )}
      </div>
      {error && <span className="text-xs font-medium text-rose-500">{error}</span>}
      {!error && helperText && <span className="text-xs text-slate-500 dark:text-slate-400">{helperText}</span>}
    </div>
  );
});

Input.displayName = 'Input';
