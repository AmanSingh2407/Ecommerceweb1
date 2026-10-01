import { create } from 'zustand';
import { getStorageItem, setStorageItem, STORAGE_KEYS } from '../utils/localStorage';
import { useCartStore } from './cartStore';

const initialWishlist = getStorageItem(STORAGE_KEYS.WISHLIST, []);

export const useWishlistStore = create((set, get) => ({
  items: initialWishlist,

  persist: () => {
    setStorageItem(STORAGE_KEYS.WISHLIST, get().items);
  },

  toggleWishlist: (product) => {
    const { items } = get();
    const exists = items.some(item => item.id === product.id);

    let updated;
    if (exists) {
      updated = items.filter(item => item.id !== product.id);
    } else {
      updated = [...items, product];
    }

    set({ items: updated });
    get().persist();
    return !exists; // returns true if added, false if removed
  },

  isInWishlist: (productId) => {
    return get().items.some(item => item.id === productId);
  },

  removeFromWishlist: (productId) => {
    const updated = get().items.filter(item => item.id !== productId);
    set({ items: updated });
    get().persist();
  },

  clearWishlist: () => {
    set({ items: [] });
    get().persist();
  },

  moveAllToCart: () => {
    const { items } = get();
    const cartAddItem = useCartStore.getState().addItem;

    items.forEach(product => {
      cartAddItem(product, 1);
    });

    set({ items: [] });
    get().persist();
  }
}));
