import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from '../ui/Modal';
import { Price } from '../ui/Price';
import { Rating } from '../ui/Rating';
import { QuantitySelector } from '../ui/QuantitySelector';
import { Button } from '../ui/Button';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { useUIStore } from '../../store/uiStore';
import { useCartStore } from '../../store/cartStore';
import { ArrowRight, ShoppingBag, Heart, Check } from 'lucide-react';
import { useWishlistStore } from '../../store/wishlistStore';

export const QuickViewModal = () => {
  const { quickViewProduct, closeQuickView, addToast } = useUIStore();
  const { addItem } = useCartStore();
  const { toggleWishlist, isInWishlist } = useWishlistStore();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  if (!quickViewProduct) return null;

  const color = selectedColor || quickViewProduct.colors?.[0]?.name;
  const size = selectedSize || quickViewProduct.sizes?.[0];
  const isWishlisted = isInWishlist(quickViewProduct.id);

  const handleAddToCart = () => {
    addItem(quickViewProduct, quantity, color, size);
    addToast(`Added ${quantity}x "${quickViewProduct.name}" to cart`, 'success');
    closeQuickView();
  };

  const handleViewDetails = () => {
    closeQuickView();
    navigate(`/product/${quickViewProduct.slug}`);
  };

  return (
    <Modal isOpen={!!quickViewProduct} onClose={closeQuickView} maxWidth="max-w-3xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        
        {/* Product Image */}
        <div className="space-y-3">
          <ImageWithFallback
            src={quickViewProduct.thumbnail}
            alt={quickViewProduct.name}
            aspectRatio="aspect-square"
            className="rounded-2xl"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-4 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
              {quickViewProduct.brand}
            </span>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight mb-2">
              {quickViewProduct.name}
            </h2>
            <div className="flex items-center gap-3 mb-3">
              <Rating rating={quickViewProduct.rating} reviewCount={quickViewProduct.reviewCount} />
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md">
                In Stock ({quickViewProduct.stock})
              </span>
            </div>

            <Price price={quickViewProduct.price} originalPrice={quickViewProduct.originalPrice} size="lg" className="mb-4" />

            <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed mb-4">
              {quickViewProduct.shortDescription || quickViewProduct.description}
            </p>

            {/* Colors Selection */}
            {quickViewProduct.colors && quickViewProduct.colors.length > 0 && (
              <div className="mb-4">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
                  Color: <span className="font-normal text-slate-500">{color}</span>
                </label>
                <div className="flex items-center gap-2">
                  {quickViewProduct.colors.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${
                        color === c.name ? 'border-brand-600 scale-110' : 'border-transparent hover:scale-105'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    >
                      {color === c.name && <Check className="w-3 h-3 text-white drop-shadow" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes Selection */}
            {quickViewProduct.sizes && quickViewProduct.sizes.length > 0 && (
              <div className="mb-4">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
                  Option: <span className="font-normal text-slate-500">{size}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {quickViewProduct.sizes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedSize(s)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                        size === s
                          ? 'border-brand-600 bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300'
                          : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-400'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
            <div className="flex items-center gap-3">
              <QuantitySelector
                quantity={quantity}
                onIncrease={() => setQuantity(q => q + 1)}
                onDecrease={() => setQuantity(q => Math.max(1, q - 1))}
                max={quickViewProduct.stock}
              />
              <Button
                fullWidth
                variant="primary"
                size="md"
                onClick={handleAddToCart}
                icon={ShoppingBag}
              >
                Add to Cart
              </Button>
            </div>

            <Button
              fullWidth
              variant="outline"
              size="md"
              onClick={handleViewDetails}
              icon={ArrowRight}
              iconPosition="right"
            >
              View Full Product Details
            </Button>
          </div>
        </div>

      </div>
    </Modal>
  );
};
