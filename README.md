# AURA Store | Production-Quality E-Commerce Platform

A modern, high-performance, frontend-only e-commerce web application built with **React**, **Vite**, **Tailwind CSS**, **Zustand**, **Lucide React**, and **localStorage**.

---

## 🌟 Key Features

- 🛍️ **Comprehensive Product Catalog**: Over 40+ realistic products across 10 categories with color/size variants, specifications, stock counts, and high-resolution visuals.
- ⚡ **API-Ready Architecture**: Full service abstraction layer (`productService`, `orderService`, `authService`) returning Promises with simulated network latency to enable instant backend integration.
- 🔍 **Live Search & Autocomplete**: Global search bar supporting real-time product, category, and brand suggestions with recent search memory.
- 🎛️ **Advanced Filtering & Sorting**: Filter by category, subcategory, brand, price range, star rating, and stock availability. Sort by Featured, Newest, Price, Rating, and Discounts.
- 🛒 **Full Cart & Coupon System**: Accurate cart total calculations (subtotal, shipping tiers, 8% tax, coupon discounts like `WELCOME20`, `SAVE10`, `FLAT50`). Includes "Save for Later".
- 💳 **Simulated Checkout**: Multi-step checkout with saved address selection, new address form, express/standard delivery options, and payment method simulations (Card, UPI, Wallet, COD).
- 📦 **Order Management & Tracking**: Real-time order generation, persistent order history, visual status timeline tracking (Confirmed ➔ Packed ➔ Shipped ➔ Delivered), re-ordering, and order cancellation.
- 💖 **Persistent Wishlist**: Wishlist management with one-click "Move All to Cart" functionality.
- 🌙 **Dark Mode Support**: Seamless dark/light theme switching persisted across sessions.
- 🔔 **Interactive Toast & Notification System**: Non-intrusive action toasts and notification drawer.
- 📱 **Mobile-First Responsive Design**: Optimized bottom navigation bar for mobile screens, filter drawers, quick view modals, and responsive product grids.

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 6
- **Language**: JavaScript (ES6+)
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **State Management**: Zustand v5
- **Routing**: React Router DOM v6
- **Persistence**: Centralized `localStorage` Utility

---

## 🚀 Quick Start & Local Execution

### Prerequisites
Make sure you have **Node.js** (v18+) and **npm** installed on your system.

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```

---

## 📂 Project Architecture

```
src/
├── assets/             # Static assets
├── components/         # Reusable UI components
│   ├── cart/           # CartItem, CartSummary, CouponForm
│   ├── checkout/       # AddressSelector, PaymentSelector, OrderSummaryCheckout
│   ├── common/         # ImageWithFallback, LoadingSkeleton, EmptyState, ToastContainer, Breadcrumb, Pagination
│   ├── footer/         # Footer
│   ├── navbar/         # Navbar, SearchBar, NotificationBell, ThemeToggle, MobileBottomNav
│   ├── product/        # ProductCard, ProductGrid, ProductFilterSidebar, QuickViewModal, ReviewSection
│   └── ui/             # Button, Input, Modal, Drawer, Badge, Rating, Price, QuantitySelector
├── data/               # Separated Mock Datasets
│   ├── banners.js      # Hero slides & promotional banners
│   ├── brands.js       # Partner brands data
│   ├── categories.js   # 10 realistic categories
│   ├── coupons.js      # Promo codes (WELCOME20, SAVE10, FLAT50, FREESHIP)
│   ├── products.js     # 40 detailed mock products
│   └── reviews.js      # Product customer reviews
├── hooks/              # Custom React hooks
├── layouts/            # MainLayout & AuthLayout
├── pages/              # 18 Full Page Views
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── Category.jsx
│   ├── ProductDetails.jsx
│   ├── Search.jsx
│   ├── Cart.jsx
│   ├── Wishlist.jsx
│   ├── Checkout.jsx
│   ├── OrderSuccess.jsx
│   ├── Orders.jsx
│   ├── OrderDetails.jsx
│   ├── Profile.jsx
│   ├── Addresses.jsx
│   ├── Settings.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── ForgotPassword.jsx
│   └── NotFound.jsx
├── services/           # Service Abstraction Layer (productService, authService, orderService)
├── store/              # Zustand Stores (cartStore, wishlistStore, authStore, orderStore, uiStore)
├── utils/              # localStorage helper & formatters
├── App.jsx             # React Router configuration
├── main.jsx            # Entry point
└── index.css           # Tailwind directives & global styles
```

---

## 💾 LocalStorage Persistence Keys

All persistent user data is stored using safe keys:
- `aura_ecommerce_cart`: Shopping cart items & applied coupons
- `aura_ecommerce_wishlist`: Saved wishlist products
- `aura_ecommerce_user`: User profile authentication data
- `aura_ecommerce_orders`: Generated order history & tracking
- `aura_ecommerce_addresses`: User delivery addresses
- `aura_ecommerce_recently_viewed`: Product view history (up to 8 items)
- `aura_ecommerce_theme`: Selected theme preference (`light` / `dark`)

---

## 🎟️ Test Coupons

Try these codes in the Cart or Checkout:
- `WELCOME20`: 20% OFF on orders over $50 (Max $100)
- `SAVE10`: 10% OFF on orders over $30
- `FLAT50`: Flat $50 OFF on orders over $250
- `FREESHIP`: Waives standard shipping cost

---

## 🔌 Connecting a Real Backend Later

The application is architected with a strict decoupling of UI components from data sourcing. To integrate a real API (e.g., Express/Node.js, Supabase, or Laravel):

1. Open `src/services/productService.js`.
2. Replace local JavaScript filtering in `getProducts()` with `fetch('/api/products?...')` or `axios.get()`.
3. Update `src/services/authService.js` to call your backend auth endpoint `POST /api/login`.
4. Update `src/store/orderStore.js` `createOrder()` to call `POST /api/orders`.

No changes to UI components, cards, pages, or store subscriptions will be required!
