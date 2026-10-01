import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Bookmark } from 'lucide-react';
import { Price } from '../ui/Price';
import { QuantitySelector } from '../ui/QuantitySelector';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { useCartStore } from '../../store/cartStore';

export const CartItem = ({ item, isSaved = false }) => {
  const { removeItem, updateQuantity, saveForLater, moveToCart } = useCartStore();

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-subtle">
      <div className="flex items-center gap-4 flex-1">
        <Link to={`/product/${item.product.slug}`} className="shrink-0">
          <ImageWithFallback
            src={item.product.thumbnail}
            alt={item.product.name}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl"
          />
        </Link>
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            {item.product.brand}
          </span>
          <Link
            to={`/product/${item.product.slug}`}
            className="font-bold text-sm text-slate-800 dark:text-slate-100 hover:text-brand-600 line-clamp-1"
          >
            {item.product.name}
          </Link>

          <div className="flex flex-wrap gap-2 text-xs text-slate-500">
            {item.selectedColor && <span>Color: <strong className="text-slate-700 dark:text-slate-300">{item.selectedColor}</strong></span>}
            {item.selectedSize && <span>Size: <strong className="text-slate-700 dark:text-slate-300">{item.selectedSize}</strong></span>}
          </div>

          <Price price={item.price} size="sm" className="mt-1" />
        </div>
      </div>

      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800">
        {!isSaved && (
          <QuantitySelector
            quantity={item.quantity}
            onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
            onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
            max={item.product.stock}
            size="sm"
          />
        )}

        <div className="flex items-center gap-2 text-xs font-semibold">
          {isSaved ? (
            <button
              onClick={() => moveToCart(item.id)}
              className="px-3 py-1.5 bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 rounded-xl hover:bg-brand-100 transition-colors"
            >
              Move to Cart
            </button>
          ) : (
            <button
              onClick={() => saveForLater(item.id)}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              title="Save for Later"
            >
              <Bookmark className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={() => removeItem(item.id)}
            className="p-2 text-slate-400 hover:text-rose-600 transition-colors"
            title="Remove item"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
