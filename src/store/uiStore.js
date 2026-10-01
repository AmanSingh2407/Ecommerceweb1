import { create } from 'zustand';
import { getStorageItem, setStorageItem, STORAGE_KEYS } from '../utils/localStorage';

const initialTheme = getStorageItem(STORAGE_KEYS.THEME, 'light');

// Apply theme class to document element initially
if (typeof window !== 'undefined') {
  if (initialTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

const initialNotifications = getStorageItem(STORAGE_KEYS.NOTIFICATIONS, [
  {
    id: 'n-1',
    title: 'Welcome to AURA Store!',
    message: 'Use code WELCOME20 to get 20% off your first order.',
    date: new Date().toISOString(),
    read: false,
    type: 'promo'
  },
  {
    id: 'n-2',
    title: 'Autumn Sale Live',
    message: 'Up to 40% discount on electronics and lifestyle products.',
    date: new Date().toISOString(),
    read: false,
    type: 'system'
  }
]);

export const useUIStore = create((set, get) => ({
  theme: initialTheme,
  mobileMenuOpen: false,
  filterDrawerOpen: false,
  quickViewProduct: null,
  notifications: initialNotifications,
  toasts: [],

  // Theme action
  toggleTheme: () => {
    const nextTheme = get().theme === 'light' ? 'dark' : 'light';
    set({ theme: nextTheme });
    setStorageItem(STORAGE_KEYS.THEME, nextTheme);

    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },

  setTheme: (theme) => {
    set({ theme });
    setStorageItem(STORAGE_KEYS.THEME, theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },

  // Mobile menu
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),

  // Filter drawer
  setFilterDrawerOpen: (open) => set({ filterDrawerOpen: open }),

  // Quick View Modal
  setQuickViewProduct: (product) => set({ quickViewProduct: product }),
  closeQuickView: () => set({ quickViewProduct: null }),

  // Notifications
  markNotificationAsRead: (id) => {
    const updated = get().notifications.map(n => n.id === id ? { ...n, read: true } : n);
    set({ notifications: updated });
    setStorageItem(STORAGE_KEYS.NOTIFICATIONS, updated);
  },

  markAllNotificationsAsRead: () => {
    const updated = get().notifications.map(n => ({ ...n, read: true }));
    set({ notifications: updated });
    setStorageItem(STORAGE_KEYS.NOTIFICATIONS, updated);
  },

  // Toast System
  addToast: (message, type = 'info', duration = 3000) => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    const toast = { id, message, type };
    set((state) => ({ toasts: [...state.toasts, toast] }));

    setTimeout(() => {
      get().removeToast(id);
    }, duration);
  },

  removeToast: (id) => {
    set((state) => ({ toasts: state.toasts.filter(t => t.id !== id) }));
  }
}));
