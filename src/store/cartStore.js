import { create } from 'zustand';
import { getStorageItem, setStorageItem, STORAGE_KEYS } from '../utils/localStorage';
import { coupons } from '../data/coupons';

const initialCartState = getStorageItem(STORAGE_KEYS.CART, {
  items: [],
  savedForLater: [],
  coupon: null
});

const calculateCartTotals = (items, coupon) => {
  const subtotal = items.reduce((sum, item) => sum.reduce ? 0 : sum + (item.price * item.quantity), 0);
  
  let discountAmount = 0;
  let shippingCost = subtotal > 100 || subtotal === 0 ? 0 : 15.00;

  if (coupon) {
    if (coupon.type === 'percentage') {
      discountAmount = (subtotal * coupon.value) / 100;
      if (coupon.maxDiscount && discountAmount > coupon.maxDiscount) {
        discountAmount = coupon.maxDiscount;
      }
    } else if (coupon.type === 'flat') {
      discountAmount = coupon.value;
    } else if (coupon.type === 'shipping') {
      shippingCost = 0;
    }
  }

  // Tax calculation (e.g., 8%)
  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const taxCost = taxableAmount * 0.08;
  const total = Math.max(0, subtotal - discountAmount + shippingCost + taxCost);

  return {
    subtotal,
    discount: discountAmount,
    shipping: shippingCost,
    tax: taxCost,
    total
  };
};

export const useCartStore = create((set, get) => ({
  items: initialCartState.items || [],
  savedForLater: initialCartState.savedForLater || [],
  coupon: initialCartState.coupon || null,

  // Save helper
  persist: () => {
    const { items, savedForLater, coupon } = get();
    setStorageItem(STORAGE_KEYS.CART, { items, savedForLater, coupon });
  },

  // Add Item to Cart
  addItem: (product, quantity = 1, selectedColor = null, selectedSize = null) => {
    const { items } = get();
    const color = selectedColor || (product.colors?.[0]?.name || null);
    const size = selectedSize || (product.sizes?.[0] || null);

    const existingIndex = items.findIndex(
      (item) => item.product.id === product.id && item.selectedColor === color && item.selectedSize === size
    );

    let updatedItems = [...items];

    if (existingIndex > -1) {
      const currentQty = updatedItems[existingIndex].quantity;
      const newQty = Math.min(currentQty + quantity, product.stock || 99);
      updatedItems[existingIndex] = {
        ...updatedItems[existingIndex],
        quantity: newQty
      };
    } else {
      updatedItems.push({
        id: `${product.id}-${color || 'default'}-${size || 'default'}`,
        product,
        price: product.price,
        quantity: Math.min(quantity, product.stock || 99),
        selectedColor: color,
        selectedSize: size
      });
    }

    set({ items: updatedItems });
    get().persist();
  },

  // Remove Item
  removeItem: (itemId) => {
    const updated = get().items.filter(item => item.id !== itemId);
    set({ items: updated });
    get().persist();
  },

  // Update Quantity
  updateQuantity: (itemId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(itemId);
      return;
    }

    const updated = get().items.map(item => {
      if (item.id === itemId) {
        const maxStock = item.product.stock || 99;
        return { ...item, quantity: Math.min(quantity, maxStock) };
      }
      return item;
    });

    set({ items: updated });
    get().persist();
  },

  // Clear Cart
  clearCart: () => {
    set({ items: [], coupon: null });
    get().persist();
  },

  // Coupon Application
  applyCoupon: (couponCode) => {
    const code = couponCode.trim().toUpperCase();
    const foundCoupon = coupons.find(c => c.code === code && c.active);

    if (!foundCoupon) {
      return { success: false, message: 'Invalid or expired coupon code' };
    }

    const subtotal = get().items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (subtotal < foundCoupon.minPurchase) {
      return { 
        success: false, 
        message: `Minimum order value of $${foundCoupon.minPurchase} required for this coupon` 
      };
    }

    set({ coupon: foundCoupon });
    get().persist();
    return { success: true, message: `Coupon "${foundCoupon.code}" applied successfully!`, coupon: foundCoupon };
  },

  removeCoupon: () => {
    set({ coupon: null });
    get().persist();
  },

  // Save for Later
  saveForLater: (itemId) => {
    const itemToSave = get().items.find(i => i.id === itemId);
    if (!itemToSave) return;

    const updatedItems = get().items.filter(i => i.id !== itemId);
    const updatedSaved = [...get().savedForLater, itemToSave];

    set({ items: updatedItems, savedForLater: updatedSaved });
    get().persist();
  },

  moveToCart: (itemId) => {
    const itemToMove = get().savedForLater.find(i => i.id === itemId);
    if (!itemToMove) return;

    const updatedSaved = get().savedForLater.filter(i => i.id !== itemId);
    const updatedItems = [...get().items, itemToMove];

    set({ items: updatedItems, savedForLater: updatedSaved });
    get().persist();
  },

  // Calculations getter
  getTotals: () => {
    const { items, coupon } = get();
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    let discountAmount = 0;
    let shippingCost = subtotal > 100 || subtotal === 0 ? 0 : 15.00;

    if (coupon) {
      if (coupon.type === 'percentage') {
        discountAmount = (subtotal * coupon.value) / 100;
        if (coupon.maxDiscount && discountAmount > coupon.maxDiscount) {
          discountAmount = coupon.maxDiscount;
        }
      } else if (coupon.type === 'flat') {
        discountAmount = coupon.value;
      } else if (coupon.type === 'shipping') {
        shippingCost = 0;
      }
    }

    const taxableAmount = Math.max(0, subtotal - discountAmount);
    const taxCost = taxableAmount * 0.08;
    const total = Math.max(0, subtotal - discountAmount + shippingCost + taxCost);

    return {
      subtotal,
      discount: discountAmount,
      shipping: shippingCost,
      tax: taxCost,
      total,
      itemCount: items.reduce((count, item) => count + item.quantity, 0)
    };
  }
}));
