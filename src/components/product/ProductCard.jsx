import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye, Check } from 'lucide-react';
import { Price } from '../ui/Price';
import { Rating } from '../ui/Rating';
import { Badge } from '../ui/Badge';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { useWishlistStore } from '../../store/wishlistStore';
import { useCartStore } from '../../store/cartStore';
import { useUIStore } from '../../store/uiStore';

export const ProductCard = ({ product }) => {
  const { toggleWishlist, isInWishlist } = useWishlistStore();
  const { addItem } = useCartStore();
  const { setQuickViewProduct, addToast } = useUIStore();

  const isWishlisted = isInWishlist(product.id);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const added = toggleWishlist(product);
    addToast(
      added ? `Added "${product.name}" to wishlist` : `Removed "${product.name}" from wishlist`,
      added ? 'success' : 'info'
    );
  };

  const handleAddToCartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
    addToast(`Added "${product.name}" to cart`, 'success');
  };

  const handleQuickViewClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  return (
    <div className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/70 dark:border-slate-800 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col overflow-hidden">
      
      {/* Top Image Container */}
      <div className="relative w-full aspect-square bg-slate-50 dark:bg-slate-800/50 overflow-hidden">
        
        {/* Product Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
          {product.discount > 0 && (
            <Badge variant="sale" size="xs">
              {product.discount}% OFF
            </Badge>
          )}
          {product.newArrival && (
            <Badge variant="brand" size="xs">
              NEW
            </Badge>
          )}
          {product.bestSeller && (
            <Badge variant="warning" size="xs">
              HOT
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          aria-label="Toggle Wishlist"
          className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md transition-all duration-200 ${
            isWishlisted
              ? 'bg-rose-500 text-white shadow-md'
              : 'bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-900 hover:text-rose-500'
          }`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Product Image Link */}
        <Link to={`/product/${product.slug}`} className="block w-full h-full p-2 sm:p-3 flex items-center justify-center">
          <ImageWithFallback
            src={product.thumbnail}
            alt={product.name}
            aspectRatio="aspect-square"
            objectFit="object-contain"
            className="w-full h-full bg-transparent flex items-center justify-center"
            imgClassName="max-h-full max-w-full object-contain mx-auto group-hover:scale-105 transition-transform duration-500 rounded-xl"
          />
        </Link>

        {/* Quick View & Hover Actions overlay */}
        <div className="absolute inset-x-3 bottom-3 z-10 hidden md:flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={handleQuickViewClick}
            className="flex-1 py-2 px-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md hover:bg-white dark:hover:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-xl shadow-subtle flex items-center justify-center gap-1.5 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>

          <button
            onClick={handleAddToCartClick}
            disabled={product.stock <= 0}
            className="p-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl shadow-sm transition-colors disabled:opacity-50"
            title="Add to Cart"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand Name */}
          <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1">
            {product.brand}
          </span>

          {/* Product Name */}
          <Link
            to={`/product/${product.slug}`}
            className="font-bold text-sm text-slate-900 dark:text-slate-100 hover:text-brand-600 dark:hover:text-brand-400 transition-colors line-clamp-1 block mb-1.5"
          >
            {product.name}
          </Link>

          {/* Rating */}
          <div className="mb-3">
            <Rating rating={product.rating} reviewCount={product.reviewCount} size="xs" />
          </div>
        </div>

        {/* Price & Mobile Add to Cart */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between gap-2">
          <Price price={product.price} originalPrice={product.originalPrice} size="sm" />

          <button
            onClick={handleAddToCartClick}
            disabled={product.stock <= 0}
            className="md:hidden p-2 rounded-xl bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 hover:bg-brand-100 transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
