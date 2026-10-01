import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productService } from '../services/productService';
import { ProductGrid } from '../components/product/ProductGrid';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Search as SearchIcon } from 'lucide-react';

export const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const performSearch = async () => {
      setIsLoading(true);
      const res = await productService.getProducts({ search: query, limit: 40 });
      setProducts(res.products);
      setIsLoading(false);
    };

    performSearch();
  }, [query]);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 space-y-8">
      <Breadcrumb items={[{ label: 'Search Results' }]} />

      <div className="flex items-center gap-3 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="p-3 bg-brand-50 dark:bg-brand-950/60 text-brand-600 rounded-2xl">
          <SearchIcon className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
            Search Results for "{query}"
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Found {products.length} matching products
          </p>
        </div>
      </div>

      <ProductGrid products={products} isLoading={isLoading} />
    </div>
  );
};
