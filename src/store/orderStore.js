import { create } from 'zustand';
import { getStorageItem, setStorageItem, STORAGE_KEYS } from '../utils/localStorage';
import { generateOrderId } from '../utils/formatters';
import { useCartStore } from './cartStore';

const defaultMockOrders = [
  {
    id: 'AUR-940128-4821',
    createdAt: '2026-09-24T14:32:00.000Z',
    status: 'Delivered',
    paymentMethod: 'Credit/Debit Card',
    paymentStatus: 'Paid',
    items: [
      {
        id: 'lumina-pro-wireless-headphones-Space Gray-null',
        product: {
          id: 'lumina-pro-wireless-headphones',
          name: 'Lumina Pro Wireless Headphones',
          brand: 'Lumina Audio',
          thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
          price: 299.99
        },
        price: 299.99,
        quantity: 1,
        selectedColor: 'Space Gray',
        selectedSize: null
      }
    ],
    subtotal: 299.99,
    discount: 29.99,
    shipping: 0.00,
    tax: 21.60,
    total: 291.60,
    shippingAddress: {
      fullName: 'Aman Singh',
      phone: '+1 (555) 234-5678',
      house: 'Apt 4B, Lumina Towers',
      street: '742 Evergreen Terrace',
      city: 'San Francisco',
      state: 'California',
      postalCode: '94107'
    },
    tracking: [
      { status: 'Order Confirmed', date: '2026-09-24 14:32', completed: true },
      { status: 'Packed', date: '2026-09-25 09:15', completed: true },
      { status: 'Shipped', date: '2026-09-25 16:40', completed: true },
      { status: 'Out for Delivery', date: '2026-09-27 08:30', completed: true },
      { status: 'Delivered', date: '2026-09-27 11:45', completed: true }
    ],
    estimatedDelivery: '2026-09-27'
  },
  {
    id: 'AUR-821945-1204',
    createdAt: '2026-09-29T10:15:00.000Z',
    status: 'Shipped',
    paymentMethod: 'UPI / Digital Wallet',
    paymentStatus: 'Paid',
    items: [
      {
        id: 'aura-minimalist-overcoat-Camel Tan-M',
        product: {
          id: 'aura-overcoat-wool',
          name: 'AURA Minimalist Italian Wool Overcoat',
          brand: 'AURA Studio',
          thumbnail: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80',
          price: 349.00
        },
        price: 349.00,
        quantity: 1,
        selectedColor: 'Camel Tan',
        selectedSize: 'M'
      }
    ],
    subtotal: 349.00,
    discount: 50.00,
    shipping: 0.00,
    tax: 23.92,
    total: 322.92,
    shippingAddress: {
      fullName: 'Aman Singh',
      phone: '+1 (555) 234-5678',
      house: 'Apt 4B, Lumina Towers',
      street: '742 Evergreen Terrace',
      city: 'San Francisco',
      state: 'California',
      postalCode: '94107'
    },
    tracking: [
      { status: 'Order Confirmed', date: '2026-09-29 10:15', completed: true },
      { status: 'Packed', date: '2026-09-29 18:20', completed: true },
      { status: 'Shipped', date: '2026-09-30 08:45', completed: true },
      { status: 'Out for Delivery', date: '2026-10-02 09:00', completed: false },
      { status: 'Delivered', date: '2026-10-02 14:00', completed: false }
    ],
    estimatedDelivery: '2026-10-02'
  }
];

const initialOrders = getStorageItem(STORAGE_KEYS.ORDERS, defaultMockOrders);

export const useOrderStore = create((set, get) => ({
  orders: initialOrders,

  persist: () => {
    setStorageItem(STORAGE_KEYS.ORDERS, get().orders);
  },

  createOrder: async (orderPayload) => {
    // Simulate network processing
    await new Promise((resolve) => setTimeout(resolve, 800));

    const orderId = generateOrderId();
    const now = new Date();
    const estDate = new Date(now.valueOf() + 3 * 24 * 60 * 60 * 1000);

    const newOrder = {
      id: orderId,
      createdAt: now.toISOString(),
      status: 'Confirmed',
      paymentMethod: orderPayload.paymentMethod || 'Credit Card',
      paymentStatus: orderPayload.paymentMethod === 'Cash on Delivery' ? 'Pending' : 'Paid',
      items: orderPayload.items,
      subtotal: orderPayload.totals.subtotal,
      discount: orderPayload.totals.discount,
      shipping: orderPayload.totals.shipping,
      tax: orderPayload.totals.tax,
      total: orderPayload.totals.total,
      shippingAddress: orderPayload.shippingAddress,
      tracking: [
        { status: 'Order Confirmed', date: now.toLocaleString(), completed: true },
        { status: 'Packed', date: 'Processing', completed: false },
        { status: 'Shipped', date: 'Pending', completed: false },
        { status: 'Out for Delivery', date: 'Pending', completed: false },
        { status: 'Delivered', date: 'Pending', completed: false }
      ],
      estimatedDelivery: estDate.toISOString().split('T')[0]
    };

    const updatedOrders = [newOrder, ...get().orders];
    set({ orders: updatedOrders });
    get().persist();

    // Clear cart after placing order
    useCartStore.getState().clearCart();

    return newOrder;
  },

  getOrderById: (orderId) => {
    return get().orders.find(o => o.id === orderId);
  },

  cancelOrder: (orderId) => {
    const updated = get().orders.map(o => {
      if (o.id === orderId) {
        return {
          ...o,
          status: 'Cancelled',
          tracking: o.tracking.map(t => ({ ...t, completed: false }))
        };
      }
      return o;
    });

    set({ orders: updated });
    get().persist();
  },

  reorder: (orderId) => {
    const order = get().getOrderById(orderId);
    if (!order) return;

    const cartAddItem = useCartStore.getState().addItem;
    order.items.forEach(item => {
      cartAddItem(item.product, item.quantity, item.selectedColor, item.selectedSize);
    });
  }
}));
