import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { heroBanners, promoBanners } from '../data/banners';
import { categories } from '../data/categories';
import { brands } from '../data/brands';
import { productService } from '../services/productService';
import { ProductGrid } from '../components/product/ProductGrid';
import { RecentlyViewed } from '../components/product/RecentlyViewed';
import { Button } from '../components/ui/Button';
import { ArrowRight, Sparkles, Flame, TrendingUp, Zap, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';

export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const resFeatured = await productService.getProducts({ featured: true, limit: 4 });
      const resTrending = await productService.getProducts({ trending: true, limit: 4 });
      const resBest = await productService.getProducts({ bestSeller: true, limit: 4 });
      const resNew = await productService.getProducts({ newArrival: true, limit: 4 });

      setFeaturedProducts(resFeatured.products);
      setTrendingProducts(resTrending.products);
      setBestSellers(resBest.products);
      setNewArrivals(resNew.products);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  // Automatic hero slider transition
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroBanners[currentSlide];

  return (
    <div className="space-y-16 pb-12">
      
      {/* 1. HERO SLIDER */}
      <section className="relative w-full h-[520px] sm:h-[600px] overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 scale-105"
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.accentColor} backdrop-brightness-75`} />
        </div>

        <div className="relative container mx-auto h-full px-6 flex flex-col justify-center text-white z-10">
          <div className="max-w-2xl space-y-4 animate-fade-in">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold tracking-wider uppercase">
              {slide.badge}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              {slide.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
              {slide.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate(slide.ctaLink)}
                icon={ArrowRight}
                iconPosition="right"
              >
                {slide.ctaText}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate(slide.secondaryCtaLink)}
                className="text-white border-white/40 hover:bg-white/20"
              >
                {slide.secondaryCtaText}
              </Button>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroBanners.length - 1 : prev - 1))}
            className="p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % heroBanners.length)}
            className="p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 space-y-16">

        {/* 2. SHOP BY CATEGORY */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                Shop by Category
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">Explore our signature curated collections</p>
            </div>
            <Link to="/shop" className="text-xs sm:text-sm font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/category/${cat.slug}`}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 dark:bg-slate-800 shadow-subtle hover:shadow-card transition-all duration-300"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-4 text-white">
                  <h4 className="font-bold text-sm sm:text-base group-hover:translate-x-1 transition-transform">{cat.name}</h4>
                  <span className="text-[11px] text-slate-300 opacity-90">{cat.productCount} Items</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 3. PROMOTIONAL FLASH SALE BANNER */}
        <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-brand-700 via-indigo-800 to-slate-900 p-8 sm:p-12 text-white shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500 text-white text-xs font-bold tracking-wide uppercase">
                <Zap className="w-3.5 h-3.5 fill-current" /> Flash Sale • Limited Time
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Mid-Season Clearance Sale up to 40% OFF
              </h2>
              <p className="text-sm text-slate-200 max-w-md leading-relaxed">
                Upgrade your lifestyle setup with studio audio, cashmere knits, and handcrafted leather accessories at reduced prices.
              </p>
              <div className="pt-2">
                <Button variant="accent" size="lg" onClick={() => navigate('/shop?sort=discount-high')}>
                  Shop Flash Sale Now
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80"
                alt="Flash Sale"
                className="w-80 h-80 object-cover rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* 4. TRENDING PRODUCTS */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-brand-600 dark:text-brand-400" />
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                  Trending Now
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Most clicked items this week</p>
              </div>
            </div>
            <Link to="/shop?sort=popular" className="text-xs sm:text-sm font-bold text-brand-600 dark:text-brand-400 hover:underline">
              See All Trending
            </Link>
          </div>
          <ProductGrid products={trendingProducts} isLoading={isLoading} />
        </section>

        {/* 5. BEST SELLERS */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Flame className="w-6 h-6 text-amber-500" />
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                  Best Sellers
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Top-rated customer favorites</p>
              </div>
            </div>
            <Link to="/shop?sort=popular" className="text-xs sm:text-sm font-bold text-brand-600 dark:text-brand-400 hover:underline">
              View All Best Sellers
            </Link>
          </div>
          <ProductGrid products={bestSellers} isLoading={isLoading} />
        </section>

        {/* 6. FEATURED BRANDS */}
        <section className="py-8 border-y border-slate-200 dark:border-slate-800">
          <div className="text-center mb-8">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Our Studio Brand Partners</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-center opacity-75 grayscale hover:grayscale-0 transition-all">
            {brands.map((b) => (
              <div key={b.id} className="text-center p-2">
                <span className="font-black text-sm text-slate-700 dark:text-slate-300 tracking-wider uppercase block">
                  {b.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 7. NEW ARRIVALS */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-indigo-500" />
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                  New Arrivals
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Fresh drops directly from our design lab</p>
              </div>
            </div>
            <Link to="/shop?sort=newest" className="text-xs sm:text-sm font-bold text-brand-600 dark:text-brand-400 hover:underline">
              Explore New Drops
            </Link>
          </div>
          <ProductGrid products={newArrivals} isLoading={isLoading} />
        </section>

        {/* 8. RECENTLY VIEWED */}
        <RecentlyViewed />

      </div>
    </div>
  );
};
