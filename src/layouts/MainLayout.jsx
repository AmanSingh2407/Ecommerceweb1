import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navbar/Navbar';
import { MobileBottomNav } from '../components/navbar/MobileBottomNav';
import { Footer } from '../components/footer/Footer';
import { ToastContainer } from '../components/common/ToastContainer';
import { QuickViewModal } from '../components/product/QuickViewModal';
import { ScrollToTop } from '../components/common/ScrollToTop';

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pb-16 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomNav />
      <ToastContainer />
      <QuickViewModal />
    </div>
  );
};
