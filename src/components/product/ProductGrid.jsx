import React from 'react';
import { ProductCard } from './ProductCard';
import { ProductCardSkeleton } from '../common/LoadingSkeleton';
import { EmptyState } from '../common/EmptyState';

export const ProductGrid = ({ products = [], isLoading = false, columns = 4 }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <EmptyState
        title="No products match your criteria"
        description="Try adjusting your filters, price range, or search terms to find what you are looking for."
        actionText="Reset Filters"
        onAction={() => window.location.href = '/shop'}
      />
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
