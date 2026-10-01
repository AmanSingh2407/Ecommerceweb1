import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productService } from '../services/productService';
import { ProductGrid } from '../components/product/ProductGrid';
import { ProductFilterSidebar } from '../components/product/ProductFilterSidebar';
import { Pagination } from '../components/common/Pagination';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Drawer } from '../components/ui/Drawer';
import { Button } from '../components/ui/Button';
import { Filter, ArrowUpDown } from 'lucide-react';

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filters state initialized from URL query params
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    brand: searchParams.get('brand') || '',
    priceMin: searchParams.get('priceMin') || '',
    priceMax: searchParams.get('priceMax') || '',
    rating: searchParams.get('rating') || '',
    inStock: searchParams.get('inStock') === 'true',
    sortBy: searchParams.get('sort') || 'featured',
    page: Number(searchParams.get('page')) || 1
  });

  // Fetch products when filters or searchParams change
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const res = await productService.getProducts({
        category: filters.category,
        brand: filters.brand,
        priceMin: filters.priceMin,
        priceMax: filters.priceMax,
        rating: filters.rating,
        inStock: filters.inStock,
        sortBy: filters.sortBy,
        page: filters.page,
        limit: 12
      });

      setProducts(res.products);
      setTotalCount(res.totalCount);
      setTotalPages(res.totalPages);
      setIsLoading(false);
    };

    fetchProducts();
  }, [filters]);

  const handleFilterChange = (key, value) => {
    const updated = { ...filters, [key]: value, page: 1 };
    setFilters(updated);

    // Sync query params
    const newParams = new URLSearchParams();
    Object.keys(updated).forEach(k => {
      if (updated[k]) newParams.set(k, updated[k]);
    });
    setSearchParams(newParams);
  };

  const handleResetFilters = () => {
    const reset = {
      category: '',
      brand: '',
      priceMin: '',
      priceMax: '',
      rating: '',
      inStock: false,
      sortBy: 'featured',
      page: 1
    };
    setFilters(reset);
    setSearchParams({});
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 space-y-6">
      
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Shop All Products' }]} />

      {/* Header & Controls Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
            Catalog Collections
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Showing {products.length} of {totalCount} Products
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Mobile Filter Button */}
          <Button
            variant="outline"
            size="sm"
            className="md:hidden"
            icon={Filter}
            onClick={() => setMobileFilterOpen(true)}
          >
            Filters
          </Button>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-slate-400 shrink-0" />
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <option value="featured">Featured First</option>
              <option value="newest">Newest Arrivals</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="popular">Most Popular</option>
              <option value="discount-high">Biggest Discount</option>
            </select>
          </div>
        </div>
      </div>

      {/* Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Desktop Sidebar Filters */}
        <div className="hidden md:block col-span-1 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 h-fit shadow-subtle sticky top-24">
          <ProductFilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
            totalResults={totalCount}
          />
        </div>

        {/* Product Grid Area */}
        <div className="col-span-1 md:col-span-3">
          <ProductGrid products={products} isLoading={isLoading} />
          
          <Pagination
            currentPage={filters.page}
            totalPages={totalPages}
            onPageChange={(page) => handleFilterChange('page', page)}
          />
        </div>
      </div>

      {/* Mobile Drawer Filter */}
      <Drawer
        isOpen={mobileFilterOpen}
        onClose={() => setMobileFilterOpen(false)}
        title="Filter Products"
      >
        <ProductFilterSidebar
          filters={filters}
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
          totalResults={totalCount}
          isMobile
          onCloseMobile={() => setMobileFilterOpen(false)}
        />
      </Drawer>
    </div>
  );
};
