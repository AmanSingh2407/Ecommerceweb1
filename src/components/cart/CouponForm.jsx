import React, { useState } from 'react';
import { useCartStore } from '../../store/cartStore';
import { useUIStore } from '../../store/uiStore';
import { Tag, X, Check } from 'lucide-react';

export const CouponForm = () => {
  const [code, setCode] = useState('');
  const { coupon, applyCoupon, removeCoupon } = useCartStore();
  const { addToast } = useUIStore();

  const handleApply = (e) => {
    e.preventDefault();
    if (!code.trim()) return;

    const result = applyCoupon(code);
    if (result.success) {
      addToast(result.message, 'success');
      setCode('');
    } else {
      addToast(result.message, 'error');
    }
  };

  return (
    <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200/80 dark:border-slate-800">
      <div className="flex items-center gap-2 mb-3">
        <Tag className="w-4 h-4 text-brand-600 dark:text-brand-400" />
        <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
          Apply Coupon Code
        </h4>
      </div>

      {coupon ? (
        <div className="flex items-center justify-between p-3 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800 rounded-xl text-xs">
          <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-bold">
            <Check className="w-4 h-4" />
            <span>"{coupon.code}" Applied ({coupon.description})</span>
          </div>
          <button
            onClick={() => {
              removeCoupon();
              addToast('Coupon removed', 'info');
            }}
            className="text-emerald-700 dark:text-emerald-300 hover:text-rose-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <form onSubmit={handleApply} className="flex gap-2">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="e.g. WELCOME20, SAVE10"
            className="flex-1 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs uppercase text-slate-800 dark:text-slate-200 focus:outline-none focus:border-brand-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 font-bold rounded-xl text-xs transition-colors shrink-0"
          >
            Apply
          </button>
        </form>
      )}
    </div>
  );
};
