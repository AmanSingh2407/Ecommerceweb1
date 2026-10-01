import React from 'react';
import { useCartStore } from '../../store/cartStore';
import { formatCurrency } from '../../utils/formatters';
import { ImageWithFallback } from '../common/ImageWithFallback';

export const OrderSummaryCheckout = () => {
  const { items, getTotals } = useCartStore();
  const { subtotal, discount, shipping, tax, total } = getTotals();

  return (
    <div className="space-y-4">
      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Order Items ({items.length})</h4>
      <div className="max-h-60 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800 pr-1">
        {items.map((item) => (
          <div key={item.id} className="py-2.5 flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3 min-w-0">
              <ImageWithFallback
                src={item.product.thumbnail}
                alt={item.product.name}
                className="w-12 h-12 rounded-lg shrink-0"
              />
              <div className="min-w-0">
                <h5 className="font-bold text-slate-800 dark:text-slate-200 truncate">{item.product.name}</h5>
                <span className="text-[11px] text-slate-400">Qty: {item.quantity}</span>
              </div>
            </div>
            <span className="font-bold text-slate-900 dark:text-slate-100 shrink-0">
              {formatCurrency(item.price * item.quantity)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
