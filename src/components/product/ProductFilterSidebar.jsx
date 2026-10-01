import React from 'react';
import { Filter, X, Check, Star } from 'lucide-react';
import { categories } from '../../data/categories';
import { brands } from '../../data/brands';
import { Button } from '../ui/Button';

export const ProductFilterSidebar = ({
  filters,
  onFilterChange,
  onResetFilters,
  totalResults = 0,
  isMobile = false,
  onCloseMobile = () => {}
}) => {
  const ratings = [4, 3, 2];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-brand-600 dark:text-brand-400" />
          <h3 className="font-bold text-slate-900 dark:text-slate-100">Filters</h3>
        </div>
        <button
          onClick={onResetFilters}
          className="text-xs font-semibold text-rose-600 dark:text-rose-400 hover:underline"
        >
          Clear All
        </button>
      </div>

      {/* Categories */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Categories</h4>
        <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
          <button
            onClick={() => onFilterChange('category', '')}
            className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between ${
              !filters.category ? 'bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <span>All Categories</span>
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onFilterChange('category', cat.slug)}
              className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-medium transition-colors flex items-center justify-between ${
                filters.category === cat.slug ? 'bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <span>{cat.name}</span>
              <span className="text-[10px] text-slate-400">{cat.productCount}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Brands</h4>
        <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
          {brands.map((b) => (
            <label
              key={b.id}
              className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 cursor-pointer hover:text-brand-600"
            >
              <input
                type="radio"
                name="brand"
                checked={filters.brand === b.name}
                onChange={() => onFilterChange('brand', filters.brand === b.name ? '' : b.name)}
                className="w-4 h-4 text-brand-600 rounded border-slate-300 focus:ring-brand-500"
              />
              <span>{b.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Price Range ($)</h4>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={filters.priceMin || ''}
            onChange={(e) => onFilterChange('priceMin', e.target.value)}
            className="w-full px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-800 dark:text-slate-200"
          />
          <span className="text-slate-400 text-xs">-</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.priceMax || ''}
            onChange={(e) => onFilterChange('priceMax', e.target.value)}
            className="w-full px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-800 dark:text-slate-200"
          />
        </div>
      </div>

      {/* Rating Filter */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Rating</h4>
        <div className="space-y-1.5">
          {ratings.map((r) => (
            <button
              key={r}
              onClick={() => onFilterChange('rating', filters.rating === r ? '' : r)}
              className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-medium transition-colors flex items-center justify-between ${
                Number(filters.rating) === r ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-1 text-amber-400">
                <span>{r}★ & above</span>
              </div>
              {Number(filters.rating) === r && <Check className="w-3.5 h-3.5" />}
            </button>
          ))}
        </div>
      </div>

      {/* Stock Availability */}
      <div className="pt-2">
        <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.inStock || false}
            onChange={(e) => onFilterChange('inStock', e.target.checked)}
            className="w-4 h-4 text-brand-600 rounded border-slate-300 focus:ring-brand-500"
          />
          <span>In Stock Only</span>
        </label>
      </div>

      {/* Mobile Submit Button */}
      {isMobile && (
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
          <Button fullWidth variant="primary" size="md" onClick={onCloseMobile}>
            Apply Filters ({totalResults})
          </Button>
        </div>
      )}
    </div>
  );
};
