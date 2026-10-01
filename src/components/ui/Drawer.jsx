import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export const Drawer = ({ isOpen, onClose, title, children, position = 'right' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const positionClasses = {
    right: 'right-0 top-0 bottom-0 w-full max-w-md animate-slide-left',
    left: 'left-0 top-0 bottom-0 w-full max-w-md animate-slide-right',
    bottom: 'bottom-0 left-0 right-0 max-h-[85vh] rounded-t-2xl animate-slide-up'
  };

  return (
    <div className="fixed inset-0 z-50 flex overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className={`fixed bg-white dark:bg-slate-900 shadow-2xl border-slate-200 dark:border-slate-800 z-10 flex flex-col ${positionClasses[position]}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
          {title ? (
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{title}</h3>
          ) : <div />}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {children}
        </div>
      </div>
    </div>
  );
};
