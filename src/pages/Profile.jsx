import React, { useState } from 'react';
import { useAuthStore } from '../store/authStore';
import { useOrderStore } from '../store/orderStore';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useUIStore } from '../store/uiStore';
import { User, Package, MapPin, Settings as SettingsIcon, LogOut, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const Profile = () => {
  const { user, updateProfile, logout } = useAuthStore();
  const { orders } = useOrderStore();
  const { addToast } = useUIStore();
  const navigate = useNavigate();

  const [name, setName] = useState(user?.name || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveProfile = (e) => {
    e.preventDefault();
    updateProfile({ name, phone });
    addToast('Profile updated successfully', 'success');
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
    addToast('Logged out of account', 'info');
    navigate('/login');
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 space-y-8">
      <Breadcrumb items={[{ label: 'My Account Profile' }]} />

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-4">
          <img
            src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
            alt={user?.name}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-brand-500 shadow-md"
          />
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
              {user?.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">{user?.email}</p>
          </div>
        </div>

        <Button variant="outline" size="sm" icon={LogOut} onClick={handleLogout}>
          Sign Out
        </Button>
      </div>

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Link
          to="/orders"
          className="p-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-subtle hover:border-brand-500 transition-all text-center space-y-2"
        >
          <Package className="w-6 h-6 text-brand-600 mx-auto" />
          <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">My Orders</h4>
          <span className="text-xs text-slate-400">{orders.length} Orders</span>
        </Link>

        <Link
          to="/wishlist"
          className="p-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-subtle hover:border-brand-500 transition-all text-center space-y-2"
        >
          <Heart className="w-6 h-6 text-rose-500 mx-auto" />
          <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">Wishlist</h4>
          <span className="text-xs text-slate-400">View Saved</span>
        </Link>

        <Link
          to="/addresses"
          className="p-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-subtle hover:border-brand-500 transition-all text-center space-y-2"
        >
          <MapPin className="w-6 h-6 text-emerald-600 mx-auto" />
          <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">Addresses</h4>
          <span className="text-xs text-slate-400">Manage Saved</span>
        </Link>

        <Link
          to="/settings"
          className="p-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-subtle hover:border-brand-500 transition-all text-center space-y-2"
        >
          <SettingsIcon className="w-6 h-6 text-indigo-600 mx-auto" />
          <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">Settings</h4>
          <span className="text-xs text-slate-400">Theme & Prefs</span>
        </Link>
      </div>

      {/* Edit Personal Info */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-subtle max-w-2xl space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <h3 className="font-bold text-slate-900 dark:text-slate-100">Personal Account Details</h3>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline"
          >
            {isEditing ? 'Cancel' : 'Edit Details'}
          </button>
        </div>

        {isEditing ? (
          <form onSubmit={handleSaveProfile} className="space-y-4">
            <Input
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              label="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <div className="flex justify-end gap-2 pt-2">
              <Button type="submit" variant="primary" size="sm">
                Save Changes
              </Button>
            </div>
          </form>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-slate-400 block mb-1">Full Name</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">{user?.name}</span>
            </div>

            <div>
              <span className="text-slate-400 block mb-1">Email Address</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">{user?.email}</span>
            </div>

            <div>
              <span className="text-slate-400 block mb-1">Phone Number</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">{user?.phone}</span>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};
