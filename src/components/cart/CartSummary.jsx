import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';
import { formatCurrency } from '../../utils/formatters';
import { CouponForm } from './CouponForm';
import { Button } from '../ui/Button';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const CartSummary = ({ isCheckoutPage = false }) => {
  const { getTotals, items } = useCartStore();
  const navigate = useNavigate();

  const { subtotal, discount, shipping, tax, total } = getTotals();

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-subtle space-y-6">
      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 pb-3 border-b border-slate-100 dark:border-slate-800">
        Order Summary
      </h3>

      {!isCheckoutPage && <CouponForm />}

      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-slate-600 dark:text-slate-400">
          <span>Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)</span>
          <span className="font-semibold text-slate-900 dark:text-slate-100">{formatCurrency(subtotal)}</span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between text-emerald-600 dark:text-emerald-400">
            <span>Coupon Discount</span>
            <span className="font-bold">-{formatCurrency(discount)}</span>
          </div>
        )}

        <div className="flex justify-between text-slate-600 dark:text-slate-400">
          <span>Estimated Shipping</span>
          <span className="font-semibold text-slate-900 dark:text-slate-100">
            {shipping === 0 ? <strong className="text-emerald-600">FREE</strong> : formatCurrency(shipping)}
          </span>
        </div>

        <div className="flex justify-between text-slate-600 dark:text-slate-400">
          <span>Estimated Tax (8%)</span>
          <span className="font-semibold text-slate-900 dark:text-slate-100">{formatCurrency(tax)}</span>
        </div>

        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between text-base font-extrabold text-slate-900 dark:text-slate-100">
          <span>Total</span>
          <span className="text-xl text-brand-600 dark:text-brand-400">{formatCurrency(total)}</span>
        </div>
      </div>

      {!isCheckoutPage && (
        <Button
          fullWidth
          variant="primary"
          size="lg"
          onClick={() => navigate('/checkout')}
          disabled={items.length === 0}
          icon={ArrowRight}
          iconPosition="right"
        >
          Proceed to Checkout
        </Button>
      )}

      <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
        <ShieldCheck className="w-4 h-4 text-emerald-500" />
        <span>256-bit Encrypted SSL Checkout</span>
      </div>
    </div>
  );
};
