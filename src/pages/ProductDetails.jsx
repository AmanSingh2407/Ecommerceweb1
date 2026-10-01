import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productService } from '../services/productService';
import { useCartStore } from '../store/cartStore';
import { useWishlistStore } from '../store/wishlistStore';
import { useUIStore } from '../store/uiStore';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { Price } from '../components/ui/Price';
import { Rating } from '../components/ui/Rating';
import { QuantitySelector } from '../components/ui/QuantitySelector';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { ReviewSection } from '../components/product/ReviewSection';
import { ProductRecommendations } from '../components/product/ProductRecommendations';
import { RecentlyViewed, saveToRecentlyViewed } from '../components/product/RecentlyViewed';
import { ProductDetailsSkeleton } from '../components/common/LoadingSkeleton';
import { ShoppingBag, Heart, Check, ShieldCheck, Truck, RefreshCw, Share2, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const ProductDetails = () => {
  const { id: productSlug } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isLoading, setIsLoading] = useState(true);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const { addItem } = useCartStore();
  const { toggleWishlist, isInWishlist } = useWishlistStore();
  const { addToast } = useUIStore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const data = await productService.getProductByIdOrSlug(productSlug);
        setProduct(data);
        setActiveImage(data.thumbnail || data.images?.[0]);
        setSelectedColor(data.colors?.[0]?.name || null);
        setSelectedSize(data.sizes?.[0] || null);
        saveToRecentlyViewed(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productSlug]);

  if (isLoading || !product) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <ProductDetailsSkeleton />
      </div>
    );
  }

  const isWishlisted = isInWishlist(product.id);
  const images = product.images && product.images.length > 0 ? product.images : [product.thumbnail];

  const handleAddToCart = () => {
    addItem(product, quantity, selectedColor, selectedSize);
    addToast(`Added ${quantity}x "${product.name}" to cart`, 'success');
  };

  const handleBuyNow = () => {
    addItem(product, quantity, selectedColor, selectedSize);
    navigate('/checkout');
  };

  const handleWishlist = () => {
    const added = toggleWishlist(product);
    addToast(
      added ? `Added "${product.name}" to wishlist` : `Removed "${product.name}" from wishlist`,
      added ? 'success' : 'info'
    );
  };

  const currentImageIdx = images.indexOf(activeImage);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 space-y-12">
      
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Shop', link: '/shop' },
          { label: product.category, link: `/category/${product.category}` },
          { label: product.name }
        ]}
      />

      {/* Main Product Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        
        {/* Left Image Gallery */}
        <div className="space-y-4">
          <div
            onClick={() => setIsZoomOpen(true)}
            className="relative rounded-3xl overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 aspect-square shadow-subtle group cursor-zoom-in flex items-center justify-center p-4 sm:p-6"
          >
            <ImageWithFallback
              src={activeImage}
              alt={product.name}
              aspectRatio="aspect-square"
              objectFit="object-contain"
              className="w-full h-full bg-transparent border-0"
              imgClassName="max-h-full max-w-full object-contain mx-auto group-hover:scale-105 transition-transform duration-500 rounded-2xl"
            />
            
            {/* Zoom Hint Badge */}
            <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-3.5 h-3.5" />
              <span>Click to Expand</span>
            </div>
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto py-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                    activeImage === img ? 'border-brand-600 scale-95 shadow-md ring-2 ring-brand-500/30' : 'border-transparent opacity-75 hover:opacity-100'
                  }`}
                >
                  <ImageWithFallback src={img} alt={`Thumb ${idx}`} aspectRatio="aspect-square" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Info Details */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">
              {product.brand}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight mb-3">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-4">
              <Rating rating={product.rating} reviewCount={product.reviewCount} size="sm" />
              <span className="text-slate-300">|</span>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full">
                In Stock ({product.stock} available)
              </span>
            </div>

            <Price price={product.price} originalPrice={product.originalPrice} size="xl" className="mb-4" />

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {product.shortDescription || product.description}
            </p>
          </div>

          {/* Color Selector */}
          {product.colors && product.colors.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                Color: <span className="font-normal text-slate-500">{selectedColor}</span>
              </label>
              <div className="flex items-center gap-3">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedColor === c.name ? 'border-brand-600 scale-110 shadow' : 'border-transparent hover:scale-105'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  >
                    {selectedColor === c.name && <Check className="w-4 h-4 text-white drop-shadow" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size Selector */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                Option / Size: <span className="font-normal text-slate-500">{selectedSize}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedSize(s)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                      selectedSize === s
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

          {/* Quantity & CTA Buttons */}
          <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Quantity:</span>
              <QuantitySelector
                quantity={quantity}
                onIncrease={() => setQuantity(q => q + 1)}
                onDecrease={() => setQuantity(q => Math.max(1, q - 1))}
                max={product.stock}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                variant="primary"
                size="lg"
                onClick={handleAddToCart}
                icon={ShoppingBag}
              >
                Add to Cart
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={handleBuyNow}
              >
                Buy Now Immediately
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={handleWishlist}
                className={`flex items-center gap-2 text-xs font-bold transition-colors ${
                  isWishlisted ? 'text-rose-500' : 'text-slate-600 dark:text-slate-400 hover:text-rose-500'
                }`}
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                <span>{isWishlisted ? 'In Wishlist' : 'Add to Wishlist'}</span>
              </button>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  addToast('Product link copied to clipboard!', 'success');
                }}
                className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-brand-600 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>Share Product</span>
              </button>
            </div>
          </div>

          {/* Customer Trust Badges */}
          <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200/60 dark:border-slate-800 text-center text-xs text-slate-600 dark:text-slate-400">
            <div className="flex flex-col items-center gap-1">
              <Truck className="w-4 h-4 text-brand-600" />
              <span>Free Express</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Authentic Craft</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <RefreshCw className="w-4 h-4 text-indigo-600" />
              <span>30-Day Returns</span>
            </div>
          </div>
        </div>

      </div>

      {/* Tabs Section (Description / Specifications / Customer Reviews) */}
      <div className="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-6">
        <div className="flex items-center gap-6 border-b border-slate-200 dark:border-slate-800">
          <button
            onClick={() => setActiveTab('description')}
            className={`pb-3 text-sm font-bold border-b-2 transition-colors ${
              activeTab === 'description' ? 'border-brand-600 text-brand-600 dark:text-brand-400' : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab('specs')}
            className={`pb-3 text-sm font-bold border-b-2 transition-colors ${
              activeTab === 'specs' ? 'border-brand-600 text-brand-600 dark:text-brand-400' : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Technical Specifications
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`pb-3 text-sm font-bold border-b-2 transition-colors ${
              activeTab === 'reviews' ? 'border-brand-600 text-brand-600 dark:text-brand-400' : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Customer Reviews ({product.reviewCount})
          </button>
        </div>

        <div className="py-2">
          {activeTab === 'description' && (
            <div className="prose dark:prose-invert max-w-3xl text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
              <p>{product.description}</p>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="max-w-2xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800 overflow-hidden text-xs">
              {product.specifications &&
                Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="flex justify-between p-3.5">
                    <span className="font-bold text-slate-500">{key}</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">{val}</span>
                  </div>
                ))}
            </div>
          )}

          {activeTab === 'reviews' && (
            <ReviewSection product={product} />
          )}
        </div>
      </div>

      {/* Recommendations & Recently Viewed */}
      <ProductRecommendations product={product} />
      <RecentlyViewed currentProductId={product.id} />

      {/* FULLSCREEN LIGHTBOX IMAGE ZOOM MODAL */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in">
          <button
            onClick={() => setIsZoomOpen(false)}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-20"
            aria-label="Close Zoom"
          >
            <X className="w-6 h-6" />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={() => setActiveImage(images[(currentImageIdx - 1 + images.length) % images.length])}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setActiveImage(images[(currentImageIdx + 1) % images.length])}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div className="relative max-w-4xl max-h-[85vh] w-full h-full flex items-center justify-center">
            <img
              src={activeImage}
              alt={product.name}
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl animate-slide-up"
            />
          </div>
        </div>
      )}

    </div>
  );
};
