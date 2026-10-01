import React, { useEffect, useState } from 'react';
import { getStorageItem, setStorageItem, STORAGE_KEYS } from '../../utils/localStorage';
import { ProductCard } from './ProductCard';
import { History } from 'lucide-react';

export const RecentlyViewed = ({ currentProductId = null }) => {
  const [recentProducts, setRecentProducts] = useState([]);

  useEffect(() => {
    const list = getStorageItem(STORAGE_KEYS.RECENTLY_VIEWED, []);
    const filtered = currentProductId ? list.filter(p => p.id !== currentProductId) : list;
    setRecentProducts(filtered.slice(0, 4));
  }, [currentProductId]);

  if (recentProducts.length === 0) return null;

  return (
    <section className="py-8">
      <div className="flex items-center gap-2 mb-6">
        <History className="w-5 h-5 text-brand-600 dark:text-brand-400" />
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Recently Viewed</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {recentProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export const saveToRecentlyViewed = (product) => {
  if (!product) return;
  const list = getStorageItem(STORAGE_KEYS.RECENTLY_VIEWED, []);
  const updated = [product, ...list.filter(p => p.id !== product.id)].slice(0, 8);
  setStorageItem(STORAGE_KEYS.RECENTLY_VIEWED, updated);
};
