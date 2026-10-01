import React, { useEffect, useState } from 'react';
import { productService } from '../../services/productService';
import { ProductCard } from './ProductCard';
import { Sparkles } from 'lucide-react';

export const ProductRecommendations = ({ product, title = 'You May Also Like' }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (product) {
      productService.getRelatedProducts(product, 4).then(setRecommendations);
    } else {
      productService.getRecommendations(4).then(setRecommendations);
    }
  }, [product]);

  if (recommendations.length === 0) return null;

  return (
    <section className="py-8">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-5 h-5 text-amber-500" />
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{title}</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {recommendations.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};
