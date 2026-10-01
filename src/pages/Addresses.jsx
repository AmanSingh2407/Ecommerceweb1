import React, { useState } from 'react';
import { useAuthStore } from '../store/authStore';
import { useUIStore } from '../store/uiStore';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { ConfirmDialog } from '../components/common/ConfirmDialog';
import { MapPin, Plus, Trash2, Edit2, CheckCircle2 } from 'lucide-react';

export const Addresses = () => {
  const { addresses, addAddress, updateAddress, deleteAddress, setDefaultAddress } = useAuthStore();
  const { addToast } = useUIStore();

  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    house: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    landmark: '',
    type: 'Home',
    isDefault: false
  });

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData({
      fullName: '',
      phone: '',
      house: '',
      street: '',
      city: '',
      state: '',
      postalCode: '',
      landmark: '',
      type: 'Home',
      isDefault: addresses.length === 0
    });
    setShowModal(true);
  };

  const handleOpenEdit = (addr) => {
    setEditingId(addr.id);
    setFormData(addr);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      updateAddress(editingId, formData);
      addToast('Address updated', 'success');
    } else {
      addAddress(formData);
      addToast('New address saved', 'success');
    }
    setShowModal(false);
  };

  const handleDelete = () => {
    deleteAddress(deletingId);
    addToast('Address deleted', 'info');
    setDeletingId(null);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 space-y-8">
      <Breadcrumb items={[{ label: 'Profile', link: '/profile' }, { label: 'Address Management' }]} />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
            Saved Delivery Addresses
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">Manage shipping locations for faster checkout</p>
        </div>

        <Button variant="primary" size="sm" icon={Plus} onClick={handleOpenAdd}>
          Add New Address
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className={`p-6 rounded-3xl border transition-all flex flex-col justify-between ${
              addr.isDefault
                ? 'bg-white dark:bg-slate-900 border-brand-500 shadow-card ring-2 ring-brand-500/20'
                : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 shadow-subtle'
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-brand-600" />
                  {addr.fullName}
                  <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 px-2 py-0.5 rounded font-normal">
                    {addr.type}
                  </span>
                </span>
                {addr.isDefault && (
                  <span className="text-[10px] bg-brand-50 text-brand-700 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Default
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                {addr.house}, {addr.street}<br />
                {addr.city}, {addr.state} - {addr.postalCode}
              </p>
              <p className="text-xs text-slate-400">Phone: {addr.phone}</p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold mt-4">
              {!addr.isDefault && (
                <button
                  onClick={() => setDefaultAddress(addr.id)}
                  className="text-brand-600 dark:text-brand-400 hover:underline"
                >
                  Set as Default
                </button>
              )}
              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={() => handleOpenEdit(addr)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDeletingId(addr.id)}
                  className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Dialog Form */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-lg w-full shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="font-bold text-lg">{editingId ? 'Edit Address' : 'Add New Address'}</h3>
            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
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
              <Input
                label="Building / House No."
                value={formData.house}
                onChange={(e) => setFormData({ ...formData, house: e.target.value })}
                required
              />
              <Input
                label="Street / Locality"
                value={formData.street}
                onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                required
              />
              <div className="grid grid-cols-3 gap-2">
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

              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline" size="sm" onClick={() => setShowModal(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" size="sm">
                  Save Address
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ConfirmDialog
        isOpen={!!deletingId}
        onClose={() => setDeletingId(null)}
        onConfirm={handleDelete}
        title="Delete Address"
        message="Are you sure you want to remove this saved address?"
      />
    </div>
  );
};
