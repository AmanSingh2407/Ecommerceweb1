import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { productService } from '../services/productService';
import { ProductGrid } from '../components/product/ProductGrid';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Pagination } from '../components/common/Pagination';

export const Category = () => {
  const { category: categorySlug } = useParams();
  const [products, setProducts] = useState([]);
  const [selectedSub, setSelectedSub] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const categoryObj = categories.find(c => c.slug === categorySlug) || categories[0];

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      setIsLoading(true);
      const res = await productService.getProducts({
        category: categoryObj.slug,
        subcategory: selectedSub,
        page,
        limit: 12
      });
      setProducts(res.products);
      setTotalPages(res.totalPages);
      setIsLoading(false);
    };

    fetchCategoryProducts();
  }, [categoryObj, selectedSub, page]);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 space-y-8">
      
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Categories', link: '/shop' }, { label: categoryObj.name }]} />

      {/* Category Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white h-56 sm:h-72 flex items-center p-8 sm:p-12 shadow-card">
        <img
          src={categoryObj.image}
          alt={categoryObj.name}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 max-w-xl space-y-2">
          <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block">Collection</span>
          <h1 className="text-3xl sm:text-4xl font-black">{categoryObj.name}</h1>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
            {categoryObj.description}
          </p>
        </div>
      </div>

      {/* Subcategories Filter Pills */}
      {categoryObj.subcategories && (
        <div className="flex items-center gap-2 overflow-x-auto py-2 border-b border-slate-200 dark:border-slate-800">
          <button
            onClick={() => setSelectedSub('')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 ${
              !selectedSub ? 'bg-brand-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            All {categoryObj.name}
          </button>
          {categoryObj.subcategories.map((sub) => (
            <button
              key={sub}
              onClick={() => setSelectedSub(sub === selectedSub ? '' : sub)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 ${
                selectedSub === sub ? 'bg-brand-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      {/* Product Grid */}
      <div>
        <ProductGrid products={products} isLoading={isLoading} />
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </div>
    </div>
  );
};
