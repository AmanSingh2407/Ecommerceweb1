/**
 * Centralized localStorage utility with safe error handling
 */

export const STORAGE_KEYS = {
  CART: 'aura_ecommerce_cart',
  WISHLIST: 'aura_ecommerce_wishlist',
  USER: 'aura_ecommerce_user',
  ORDERS: 'aura_ecommerce_orders',
  ADDRESSES: 'aura_ecommerce_addresses',
  RECENTLY_VIEWED: 'aura_ecommerce_recently_viewed',
  THEME: 'aura_ecommerce_theme',
  NOTIFICATIONS: 'aura_ecommerce_notifications',
};

export const getStorageItem = (key, fallbackValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallbackValue;
  } catch (error) {
    console.error(`Error reading key "${key}" from localStorage:`, error);
    return fallbackValue;
  }
};

export const setStorageItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Error saving key "${key}" to localStorage:`, error);
    return false;
  }
};

export const removeStorageItem = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`Error removing key "${key}" from localStorage:`, error);
    return false;
  }
};

export const clearAllStorage = () => {
  try {
    Object.values(STORAGE_KEYS).forEach((key) => localStorage.removeItem(key));
    return true;
  } catch (error) {
    console.error('Error clearing localStorage:', error);
    return false;
  }
};
