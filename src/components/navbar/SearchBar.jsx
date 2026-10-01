import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, TrendingUp, History, ArrowRight } from 'lucide-react';
import { products } from '../../data/products';
import { categories } from '../../data/categories';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { formatCurrency } from '../../utils/formatters';

export const SearchBar = ({ isMobile = false, onClose = () => {} }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useState(['wireless headphones', 'cashmere', 'leather boots']);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const matchingProducts = query.trim()
    ? products
        .filter(p =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.brand.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
        )
        .slice(0, 5)
    : [];

  const matchingCategories = query.trim()
    ? categories
        .filter(c => c.name.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 3)
    : [];

  const handleSearchSubmit = (e) => {
    e?.preventDefault();
    if (!query.trim()) return;

    if (!recentSearches.includes(query.trim())) {
      setRecentSearches([query.trim(), ...recentSearches.slice(0, 4)]);
    }

    setIsOpen(false);
    onClose();
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  const handleSelectRecent = (term) => {
    setQuery(term);
    navigate(`/search?q=${encodeURIComponent(term)}`);
    setIsOpen(false);
    onClose();
  };

  return (
    <div ref={searchRef} className={`relative ${isMobile ? 'w-full' : 'w-64 lg:w-80'}`}>
      <form onSubmit={handleSearchSubmit} className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search products, brands, categories..."
          className="w-full py-2 pl-10 pr-8 bg-slate-100 dark:bg-slate-800/70 text-sm text-slate-900 dark:text-slate-100 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:bg-white dark:focus:bg-slate-900 border border-transparent focus:border-brand-500 transition-all"
        />
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="absolute right-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </form>

      {/* Autocomplete Popup */}
      {isOpen && (
        <div className="absolute left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-floating z-50 overflow-hidden animate-slide-up">
          {query.trim() === '' ? (
            <div className="p-4 space-y-4">
              {recentSearches.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    <History className="w-3.5 h-3.5" />
                    Recent Searches
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {recentSearches.map((term, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleSelectRecent(term)}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs text-slate-700 dark:text-slate-300 rounded-full transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Trending Terms
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Headphones', 'Cashmere', 'Leather boots', 'Smartwatch', 'Oak Chair'].map((term, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleSelectRecent(term)}
                      className="px-3 py-1 bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300 text-xs rounded-full transition-colors font-medium"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {matchingCategories.length > 0 && (
                <div className="p-2">
                  <span className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Categories
                  </span>
                  {matchingCategories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        setIsOpen(false);
                        onClose();
                        navigate(`/category/${cat.slug}`);
                      }}
                      className="w-full text-left px-3 py-2 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg flex items-center justify-between"
                    >
                      <span>In {cat.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ))}
                </div>
              )}

              {matchingProducts.length > 0 ? (
                <div className="p-2 space-y-1">
                  <span className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Products ({matchingProducts.length})
                  </span>
                  {matchingProducts.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => {
                        setIsOpen(false);
                        onClose();
                        navigate(`/product/${p.slug}`);
                      }}
                      className="flex items-center gap-3 p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl cursor-pointer transition-colors"
                    >
                      <ImageWithFallback
                        src={p.thumbnail}
                        alt={p.name}
                        className="w-10 h-10 rounded-lg shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h5 className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">{p.name}</h5>
                        <p className="text-[11px] text-slate-400">{p.brand}</p>
                      </div>
                      <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                        {formatCurrency(p.price)}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-xs text-slate-400">
                  No direct products found for "{query}"
                </div>
              )}

              <button
                type="button"
                onClick={handleSearchSubmit}
                className="w-full py-2.5 px-4 bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 text-center text-xs font-bold text-brand-600 dark:text-brand-400 flex items-center justify-center gap-1"
              >
                View all results for "{query}"
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
