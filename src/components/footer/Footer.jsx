import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ShieldCheck, Truck, RefreshCw, Headphones, ArrowRight, Check } from 'lucide-react';
import { useUIStore } from '../../store/uiStore';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { addToast } = useUIStore();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    addToast('Thank you for subscribing to AURA Newsletter!', 'success');
    setEmail('');
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800">
      
      {/* Customer Benefits Bar */}
      <div className="container mx-auto px-4 sm:px-6 pb-12 mb-12 border-b border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-950 text-brand-400 border border-brand-800/60 flex items-center justify-center shrink-0">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <h5 className="text-sm font-bold text-white">Free Global Express</h5>
            <p className="text-xs text-slate-400">On all orders over $100</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-950 text-brand-400 border border-brand-800/60 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h5 className="text-sm font-bold text-white">2-Year Warranty</h5>
            <p className="text-xs text-slate-400">Guaranteed authentic craft</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-950 text-brand-400 border border-brand-800/60 flex items-center justify-center shrink-0">
            <RefreshCw className="w-5 h-5" />
          </div>
          <div>
            <h5 className="text-sm font-bold text-white">30-Day Easy Returns</h5>
            <p className="text-xs text-slate-400">Hassle-free refund policy</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-950 text-brand-400 border border-brand-800/60 flex items-center justify-center shrink-0">
            <Headphones className="w-5 h-5" />
          </div>
          <div>
            <h5 className="text-sm font-bold text-white">24/7 VIP Support</h5>
            <p className="text-xs text-slate-400">Dedicated concierge care</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Col 1: Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-brand-600 text-white flex items-center justify-center font-black text-xl">A</div>
            <span className="text-2xl font-black text-white tracking-tight">AURA<span className="text-brand-400">.</span></span>
          </Link>
          <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
            AURA is a premium lifestyle store curated for modern connoisseurs. We combine timeless Scandinavian aesthetics with innovative engineering.
          </p>

          {/* Newsletter Form */}
          <div className="pt-2">
            <h6 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Subscribe to private journal</h6>
            <form onSubmit={handleSubscribe} className="flex max-w-md gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-brand-600 hover:bg-brand-500 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1 shrink-0"
              >
                {subscribed ? <Check className="w-4 h-4 text-emerald-400" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
          </div>
        </div>

        {/* Col 2: Shop links */}
        <div>
          <h6 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Shop Collections</h6>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li><Link to="/shop?category=electronics" className="hover:text-white transition-colors">Electronics & Audio</Link></li>
            <li><Link to="/shop?category=fashion" className="hover:text-white transition-colors">Apparel & Outerwear</Link></li>
            <li><Link to="/shop?category=shoes" className="hover:text-white transition-colors">Footwear & Boots</Link></li>
            <li><Link to="/shop?category=home-living" className="hover:text-white transition-colors">Home & Living</Link></li>
            <li><Link to="/shop?category=watches" className="hover:text-white transition-colors">Luxury Watches</Link></li>
            <li><Link to="/shop?filter=new" className="hover:text-white transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        {/* Col 3: Customer Care */}
        <div>
          <h6 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Customer Care</h6>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li><Link to="/orders" className="hover:text-white transition-colors">Order Tracking</Link></li>
            <li><Link to="/addresses" className="hover:text-white transition-colors">Shipping Information</Link></li>
            <li><Link to="/cart" className="hover:text-white transition-colors">Shopping Cart</Link></li>
            <li><Link to="/wishlist" className="hover:text-white transition-colors">Saved Wishlist</Link></li>
            <li><a href="#faq" className="hover:text-white transition-colors">FAQ & Support</a></li>
            <li><a href="#terms" className="hover:text-white transition-colors">Return Policy</a></li>
          </ul>
        </div>

        {/* Col 4: Account & Company */}
        <div>
          <h6 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Account & Studio</h6>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li><Link to="/profile" className="hover:text-white transition-colors">My Profile</Link></li>
            <li><Link to="/login" className="hover:text-white transition-colors">Sign In / Register</Link></li>
            <li><Link to="/settings" className="hover:text-white transition-colors">Account Settings</Link></li>
            <li><a href="#about" className="hover:text-white transition-colors">About AURA</a></li>
            <li><a href="#sustainability" className="hover:text-white transition-colors">Sustainability</a></li>
            <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

      </div>

      {/* Copyright & Payment Badges */}
      <div className="container mx-auto px-4 sm:px-6 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© 2026 AURA Studio Inc. All rights reserved. Designed for excellence.</p>
        <div className="flex items-center gap-3">
          <span className="bg-slate-800 px-2 py-1 rounded text-[10px] font-semibold text-slate-300">VISA</span>
          <span className="bg-slate-800 px-2 py-1 rounded text-[10px] font-semibold text-slate-300">MASTERCARD</span>
          <span className="bg-slate-800 px-2 py-1 rounded text-[10px] font-semibold text-slate-300">AMEX</span>
          <span className="bg-slate-800 px-2 py-1 rounded text-[10px] font-semibold text-slate-300">APPLE PAY</span>
          <span className="bg-slate-800 px-2 py-1 rounded text-[10px] font-semibold text-slate-300">UPI</span>
          <span className="bg-slate-800 px-2 py-1 rounded text-[10px] font-semibold text-slate-300">COD</span>
        </div>
      </div>
    </footer>
  );
};
