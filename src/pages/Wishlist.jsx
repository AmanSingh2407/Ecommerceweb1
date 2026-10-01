import React from 'react';
import { useWishlistStore } from '../store/wishlistStore';
import { ProductGrid } from '../components/product/ProductGrid';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { EmptyState } from '../components/common/EmptyState';
import { Button } from '../components/ui/Button';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';

export const Wishlist = () => {
  const { items, clearWishlist, moveAllToCart } = useWishlistStore();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'Wishlist' }]} />
        <EmptyState
          icon={Heart}
          title="Your Wishlist is Empty"
          description="Save your favorite items here to purchase later or monitor sales."
          actionText="Explore Collection"
          actionLink="/shop"
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 space-y-8">
      <Breadcrumb items={[{ label: 'Wishlist' }]} />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
            Saved Wishlist ({items.length})
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">Your personal curated favorites</p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="primary"
            size="sm"
            icon={ShoppingBag}
            onClick={moveAllToCart}
          >
            Move All to Cart
          </Button>

          <Button
            variant="outline"
            size="sm"
            icon={Trash2}
            onClick={clearWishlist}
          >
            Clear Wishlist
          </Button>
        </div>
      </div>

      <ProductGrid products={items} />
    </div>
  );
};
