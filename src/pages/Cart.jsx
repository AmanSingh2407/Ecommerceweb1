import React from 'react';
import { useCartStore } from '../store/cartStore';
import { CartItem } from '../components/cart/CartItem';
import { CartSummary } from '../components/cart/CartSummary';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { EmptyState } from '../components/common/EmptyState';
import { ShoppingBag, Trash2, Bookmark } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Cart = () => {
  const { items, savedForLater, clearCart } = useCartStore();

  if (items.length === 0 && savedForLater.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'Shopping Cart' }]} />
        <EmptyState
          icon={ShoppingBag}
          title="Your Shopping Cart is Empty"
          description="Explore our premium catalog to add products to your bag."
          actionText="Start Shopping Now"
          actionLink="/shop"
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 space-y-8">
      
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Shopping Cart' }]} />

      {/* Title Bar */}
      <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
            Shopping Cart ({items.length})
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">Review your selected items before checkout</p>
        </div>
        {items.length > 0 && (
          <button
            onClick={clearCart}
            className="text-xs font-semibold text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1"
          >
            <Trash2 className="w-4 h-4" /> Clear Cart
          </button>
        )}
      </div>

      {/* Cart Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left Cart Items List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-4">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Saved For Later Section */}
          {savedForLater.length > 0 && (
            <div className="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Saved For Later ({savedForLater.length})
                </h3>
              </div>
              <div className="space-y-4">
                {savedForLater.map((item) => (
                  <CartItem key={item.id} item={item} isSaved />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Summary */}
        <div className="lg:col-span-1 sticky top-24">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};
