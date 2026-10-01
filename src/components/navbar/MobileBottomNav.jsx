import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Grid, Heart, ShoppingBag, User } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { useWishlistStore } from '../../store/wishlistStore';
import { useAuthStore } from '../../store/authStore';

export const MobileBottomNav = () => {
  const { getTotals } = useCartStore();
  const { items: wishlistItems } = useWishlistStore();
  const { isAuthenticated } = useAuthStore();

  const cartCount = getTotals().itemCount;
  const wishlistCount = wishlistItems.length;

  const navItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Shop', path: '/shop', icon: Grid },
    { label: 'Wishlist', path: '/wishlist', icon: Heart, badge: wishlistCount },
    { label: 'Cart', path: '/cart', icon: ShoppingBag, badge: cartCount },
    { label: 'Account', path: isAuthenticated ? '/profile' : '/login', icon: User }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-slate-200/80 dark:border-slate-800/80 px-2 py-2 shadow-floating">
      <div className="flex items-center justify-around">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) => `
              relative flex flex-col items-center justify-center w-14 py-1 rounded-xl transition-all ${
                isActive
                  ? 'text-brand-600 dark:text-brand-400 font-bold scale-105'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }
            `}
          >
            {({ isActive }) => (
              <>
                <div className="relative">
                  <item.icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-[1.8px]'}`} />
                  {!!item.badge && item.badge > 0 && (
                    <span className="absolute -top-1.5 -right-2 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className="text-[10px] mt-1 tracking-tight">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
