import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, 
  Heart, 
  User, 
  Menu, 
  X, 
  Sparkles, 
  Search,
  ChevronDown,
  Percent,
  Truck
} from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { useWishlistStore } from '../../store/wishlistStore';
import { useAuthStore } from '../../store/authStore';
import { useUIStore } from '../../store/uiStore';
import { SearchBar } from './SearchBar';
import { ThemeToggle } from './ThemeToggle';
import { NotificationBell } from './NotificationBell';
import { categories } from '../../data/categories';

export const Navbar = () => {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const { mobileMenuOpen, setMobileMenuOpen } = useUIStore();
  const { getTotals } = useCartStore();
  const { items: wishlistItems } = useWishlistStore();
  const { user, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  const cartCount = getTotals().itemCount;
  const wishlistCount = wishlistItems.length;

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* 1. Announcement Bar */}
      {showAnnouncement && (
        <div className="bg-gradient-to-r from-brand-700 via-indigo-700 to-purple-800 text-white text-xs py-2 px-4 flex items-center justify-between shadow-inner">
          <div className="container mx-auto flex items-center justify-center gap-2 text-center font-medium">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-300 shrink-0" />
            <span>Autumn Sale is Live! Use code <strong className="font-bold underline decoration-amber-300 underline-offset-2">WELCOME20</strong> for 20% OFF</span>
            <span className="hidden md:inline-block">•</span>
            <span className="hidden md:inline-flex items-center gap-1 opacity-90"><Truck className="w-3 h-3" /> Free Express Shipping Over $100</span>
          </div>
          <button
            onClick={() => setShowAnnouncement(false)}
            className="text-white/80 hover:text-white p-0.5 rounded transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* 2. Main Navbar */}
      <nav className="glass-header shadow-subtle transition-colors duration-200">
        <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-brand-500 to-indigo-700 text-white flex items-center justify-center font-black text-xl shadow-md group-hover:scale-105 transition-transform">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white font-sans">
                AURA<span className="text-brand-600 dark:text-brand-400">.</span>
              </span>
              <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase -mt-1 hidden sm:block">
                STUDIO STORE
              </span>
            </div>
          </Link>

          {/* Desktop Category Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive ? 'text-brand-600 dark:text-brand-400' : 'text-slate-700 dark:text-slate-300 hover:text-brand-600'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive ? 'text-brand-600 dark:text-brand-400' : 'text-slate-700 dark:text-slate-300 hover:text-brand-600'
                }`
              }
            >
              All Shop
            </NavLink>

            {/* Categories Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-brand-600 transition-colors py-2">
                <span>Categories</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute top-full left-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-floating p-2 grid grid-cols-1 gap-1">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/category/${cat.slug}`}
                      className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-brand-50 dark:hover:bg-brand-950/50 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                    >
                      <span>{cat.name}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                        {cat.productCount}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink
              to="/shop?filter=sale"
              className="flex items-center gap-1 text-sm font-bold text-rose-600 dark:text-rose-400 hover:text-rose-700 transition-colors"
            >
              <Percent className="w-4 h-4" />
              Flash Deals
            </NavLink>
          </div>

          {/* Search bar desktop */}
          <div className="hidden md:block">
            <SearchBar />
          </div>

          {/* Right Icons section */}
          <div className="flex items-center gap-1 sm:gap-2">

            {/* Mobile search toggle */}
            <button
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="p-2 md:hidden rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            <ThemeToggle />
            <NotificationBell />

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hidden sm:flex items-center justify-center"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Button */}
            <Link
              to="/cart"
              className="relative flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-xl bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 font-bold hover:bg-brand-100 dark:hover:bg-brand-900/60 transition-colors"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-rose-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-xs font-bold">Cart</span>
            </Link>

            {/* User Account */}
            <div className="relative hidden md:block">
              {isAuthenticated ? (
                <button
                  onClick={() => navigate('/profile')}
                  className="flex items-center gap-2 p-1 rounded-full border border-slate-200 dark:border-slate-800 hover:ring-2 hover:ring-brand-500/30 transition-all"
                >
                  <img
                    src={user?.avatar}
                    alt={user?.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </button>
              ) : (
                <Link
                  to="/login"
                  className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 text-xs font-bold"
                >
                  <User className="w-5 h-5" />
                  <span>Login</span>
                </Link>
              )}
            </div>

          </div>
        </div>

        {/* Expandable Mobile Search input */}
        {mobileSearchOpen && (
          <div className="md:hidden px-4 pb-3 animate-slide-down">
            <SearchBar isMobile onClose={() => setMobileSearchOpen(false)} />
          </div>
        )}
      </nav>

      {/* 3. Mobile Navigation Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative w-4/5 max-w-sm bg-white dark:bg-slate-900 h-full shadow-2xl flex flex-col z-10 p-6 overflow-y-auto animate-slide-right">
            <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-brand-600 text-white font-black flex items-center justify-center">A</div>
                <span className="font-extrabold text-lg text-slate-900 dark:text-white">AURA STORE</span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-bold text-slate-800 dark:text-slate-200 hover:text-brand-600"
              >
                Home
              </Link>
              <Link
                to="/shop"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-bold text-slate-800 dark:text-slate-200 hover:text-brand-600"
              >
                All Shop Products
              </Link>

              <div className="pt-2 pb-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Categories</span>
                <div className="space-y-2 pl-2">
                  {categories.map((c) => (
                    <Link
                      key={c.id}
                      to={`/category/${c.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-600"
                    >
                      {c.name} ({c.productCount})
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/profile"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm font-bold text-slate-800 dark:text-slate-200"
                    >
                      My Profile ({user?.name})
                    </Link>
                    <Link
                      to="/orders"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm font-bold text-slate-800 dark:text-slate-200"
                    >
                      My Orders
                    </Link>
                    <Link
                      to="/addresses"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm font-bold text-slate-800 dark:text-slate-200"
                    >
                      Saved Addresses
                    </Link>
                  </>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full py-2.5 bg-brand-600 text-white font-bold text-center rounded-xl text-sm shadow-sm"
                  >
                    Sign In / Register
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
