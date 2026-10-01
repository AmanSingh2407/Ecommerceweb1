import { create } from 'zustand';
import { getStorageItem, setStorageItem, removeStorageItem, STORAGE_KEYS } from '../utils/localStorage';

const defaultUser = {
  id: 'usr-101',
  name: 'Alex Vance',
  email: 'alex.vance@example.com',
  phone: '+1 (555) 234-5678',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  createdAt: '2026-01-15'
};

const defaultAddresses = [
  {
    id: 'addr-1',
    fullName: 'Alex Vance',
    phone: '+1 (555) 234-5678',
    house: 'Apt 4B, Lumina Towers',
    street: '742 Evergreen Terrace',
    city: 'San Francisco',
    state: 'California',
    postalCode: '94107',
    landmark: 'Near Financial District Park',
    type: 'Home',
    isDefault: true
  },
  {
    id: 'addr-2',
    fullName: 'Alex Vance (Office)',
    phone: '+1 (555) 987-6543',
    house: 'Suite 1200, AURA HQ',
    street: '500 Howard Street',
    city: 'San Francisco',
    state: 'California',
    postalCode: '94105',
    landmark: 'Silicon Valley Hub',
    type: 'Work',
    isDefault: false
  }
];

const initialUser = getStorageItem(STORAGE_KEYS.USER, defaultUser);
const initialAddresses = getStorageItem(STORAGE_KEYS.ADDRESSES, defaultAddresses);

export const useAuthStore = create((set, get) => ({
  user: initialUser,
  isAuthenticated: !!initialUser,
  addresses: initialAddresses,

  // Login action
  login: async (email, password) => {
    // Simulate API network request latency
    await new Promise((resolve) => setTimeout(resolve, 600));

    if (!email || !password) {
      return { success: false, message: 'Please enter both email and password' };
    }

    if (password.length < 4) {
      return { success: false, message: 'Password must be at least 4 characters long' };
    }

    const userData = {
      id: 'usr-' + Date.now().toString().slice(-4),
      name: email.split('@')[0].replace('.', ' ').toUpperCase(),
      email,
      phone: '+1 (555) 019-2834',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      createdAt: new Date().toISOString()
    };

    set({ user: userData, isAuthenticated: true });
    setStorageItem(STORAGE_KEYS.USER, userData);

    return { success: true, user: userData };
  },

  // Signup action
  signup: async ({ name, email, phone, password }) => {
    await new Promise((resolve) => setTimeout(resolve, 600));

    if (!name || !email || !password) {
      return { success: false, message: 'All required fields must be filled' };
    }

    const userData = {
      id: 'usr-' + Date.now().toString().slice(-4),
      name,
      email,
      phone: phone || '+1 (555) 000-0000',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      createdAt: new Date().toISOString()
    };

    set({ user: userData, isAuthenticated: true });
    setStorageItem(STORAGE_KEYS.USER, userData);

    return { success: true, user: userData };
  },

  // Logout
  logout: () => {
    set({ user: null, isAuthenticated: false });
    removeStorageItem(STORAGE_KEYS.USER);
  },

  // Update Profile
  updateProfile: (updatedData) => {
    const { user } = get();
    const newUserData = { ...user, ...updatedData };
    set({ user: newUserData });
    setStorageItem(STORAGE_KEYS.USER, newUserData);
  },

  // Address Management
  addAddress: (addressData) => {
    const { addresses } = get();
    const newAddress = {
      ...addressData,
      id: 'addr-' + Date.now(),
      isDefault: addresses.length === 0 ? true : addressData.isDefault || false
    };

    let updated = [...addresses];
    if (newAddress.isDefault) {
      updated = updated.map(a => ({ ...a, isDefault: false }));
    }
    updated.push(newAddress);

    set({ addresses: updated });
    setStorageItem(STORAGE_KEYS.ADDRESSES, updated);
    return newAddress;
  },

  updateAddress: (id, addressData) => {
    let updated = get().addresses.map(a => {
      if (a.id === id) {
        return { ...a, ...addressData };
      }
      if (addressData.isDefault) {
        return { ...a, isDefault: false };
      }
      return a;
    });

    set({ addresses: updated });
    setStorageItem(STORAGE_KEYS.ADDRESSES, updated);
  },

  deleteAddress: (id) => {
    const updated = get().addresses.filter(a => a.id !== id);
    if (updated.length > 0 && !updated.some(a => a.isDefault)) {
      updated[0].isDefault = true;
    }
    set({ addresses: updated });
    setStorageItem(STORAGE_KEYS.ADDRESSES, updated);
  },

  setDefaultAddress: (id) => {
    const updated = get().addresses.map(a => ({
      ...a,
      isDefault: a.id === id
    }));
    set({ addresses: updated });
    setStorageItem(STORAGE_KEYS.ADDRESSES, updated);
  }
}));
