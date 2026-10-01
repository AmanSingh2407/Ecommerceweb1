import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import { MainLayout } from './layouts/MainLayout';
import { AuthLayout } from './layouts/AuthLayout';

// Pages
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Category } from './pages/Category';
import { ProductDetails } from './pages/ProductDetails';
import { Search } from './pages/Search';
import { Cart } from './pages/Cart';
import { Wishlist } from './pages/Wishlist';
import { Checkout } from './pages/Checkout';
import { OrderSuccess } from './pages/OrderSuccess';
import { Orders } from './pages/Orders';
import { OrderDetails } from './pages/OrderDetails';
import { Profile } from './pages/Profile';
import { Addresses } from './pages/Addresses';
import { Settings } from './pages/Settings';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { ForgotPassword } from './pages/ForgotPassword';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <Router>
      <Routes>
        {/* Main Application Layout Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<OrderDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addresses" element={<Addresses />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/404" element={<NotFound />} />
        </Route>

        {/* Auth Layout Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>

        {/* Catch-all 404 Fallback Route */}
        <Route path="*" element={<MainLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
