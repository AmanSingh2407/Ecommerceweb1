import React, { useState } from 'react';
import { useAuthStore } from '../../store/authStore';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { MapPin, Plus, Check } from 'lucide-react';

export const AddressSelector = ({ selectedAddress, onSelectAddress }) => {
  const { addresses, addAddress } = useAuthStore();
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    house: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    landmark: '',
    type: 'Home'
  });

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const created = addAddress(formData);
    onSelectAddress(created);
    setShowAddForm(false);
    setFormData({
      fullName: '',
      phone: '',
      house: '',
      street: '',
      city: '',
      state: '',
      postalCode: '',
      landmark: '',
      type: 'Home'
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-brand-600" /> Shipping Address
        </h4>
        <button
          type="button"
          onClick={() => setShowAddForm(!showAddForm)}
          className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1"
        >
          <Plus className="w-3.5 h-3.5" />
          {showAddForm ? 'Cancel' : 'Add New Address'}
        </button>
      </div>

      {showAddForm ? (
        <form onSubmit={handleAddSubmit} className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input
              label="Full Name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
            />
            <Input
              label="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input
              label="Flat / Building / House No."
              value={formData.house}
              onChange={(e) => setFormData({ ...formData, house: e.target.value })}
              required
            />
            <Input
              label="Street / Area / Locality"
              value={formData.street}
              onChange={(e) => setFormData({ ...formData, street: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Input
              label="City"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              required
            />
            <Input
              label="State"
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              required
            />
            <Input
              label="Postal Code"
              value={formData.postalCode}
              onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
              required
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button type="submit" variant="primary" size="sm">
              Save & Use Address
            </Button>
          </div>
        </form>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {addresses.map((addr) => {
            const isSelected = selectedAddress?.id === addr.id;
            return (
              <div
                key={addr.id}
                onClick={() => onSelectAddress(addr)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'border-brand-600 bg-brand-50/50 dark:bg-brand-950/40 ring-2 ring-brand-500/20'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-xs text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                    {addr.fullName}
                    <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 px-1.5 py-0.5 rounded font-normal">
                      {addr.type}
                    </span>
                  </span>
                  {isSelected && <Check className="w-4 h-4 text-brand-600" />}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {addr.house}, {addr.street}, {addr.city}, {addr.state} - {addr.postalCode}
                </p>
                <span className="text-[11px] text-slate-400 block mt-1">Phone: {addr.phone}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
