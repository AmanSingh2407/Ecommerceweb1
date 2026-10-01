import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { useAuthStore } from '../store/authStore';
import { useOrderStore } from '../store/orderStore';
import { useUIStore } from '../store/uiStore';
import { AddressSelector } from '../components/checkout/AddressSelector';
import { PaymentSelector } from '../components/checkout/PaymentSelector';
import { OrderSummaryCheckout } from '../components/checkout/OrderSummaryCheckout';
import { CartSummary } from '../components/cart/CartSummary';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Button } from '../components/ui/Button';
import { ShieldCheck, Truck, ArrowRight, User } from 'lucide-react';

export const Checkout = () => {
  const { items, getTotals } = useCartStore();
  const { user, addresses } = useAuthStore();
  const { createOrder } = useOrderStore();
  const { addToast } = useUIStore();
  const navigate = useNavigate();

  const [selectedAddress, setSelectedAddress] = useState(
    addresses.find(a => a.isDefault) || addresses[0] || null
  );
  const [selectedPayment, setSelectedPayment] = useState('Credit/Debit Card');
  const [deliveryMethod, setDeliveryMethod] = useState('standard');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Button onClick={() => navigate('/shop')}>Continue Shopping</Button>
      </div>
    );
  }

  const handlePlaceOrder = async () => {
    if (!selectedAddress) {
      addToast('Please select or add a shipping address', 'error');
      return;
    }

    setIsSubmitting(true);
    try {
      const orderPayload = {
        items,
        totals: getTotals(),
        shippingAddress: selectedAddress,
        paymentMethod: selectedPayment,
        deliveryMethod
      };

      const createdOrder = await createOrder(orderPayload);
      addToast('Order placed successfully!', 'success');
      navigate('/order-success', { state: { order: createdOrder } });
    } catch (err) {
      addToast('Failed to process order', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 space-y-8">
      <Breadcrumb items={[{ label: 'Cart', link: '/cart' }, { label: 'Checkout' }]} />

      <div className="pb-4 border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
          Secure Checkout
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">Complete your shipping & payment details</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Main Steps Form */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Step 1: Account Info */}
          <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-subtle space-y-3">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-brand-600" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">1. Customer Contact</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Logged in as <strong className="text-slate-800 dark:text-slate-200">{user?.name || 'Aman Singh'}</strong> ({user?.email || 'aman.singh@example.com'})
            </p>
          </div>

          {/* Step 2: Shipping Address */}
          <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-subtle">
            <AddressSelector
              selectedAddress={selectedAddress}
              onSelectAddress={setSelectedAddress}
            />
          </div>

          {/* Step 3: Delivery Options */}
          <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-subtle space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Truck className="w-4 h-4 text-brand-600" /> Delivery Method
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                onClick={() => setDeliveryMethod('standard')}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  deliveryMethod === 'standard'
                    ? 'border-brand-600 bg-brand-50/50 dark:bg-brand-950/40 ring-2 ring-brand-500/20'
                    : 'border-slate-200 dark:border-slate-800'
                }`}
              >
                <div className="flex justify-between font-bold text-xs">
                  <span>Standard Express</span>
                  <span className="text-emerald-600">FREE</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">Delivered in 3-5 Business Days</p>
              </div>

              <div
                onClick={() => setDeliveryMethod('express')}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  deliveryMethod === 'express'
                    ? 'border-brand-600 bg-brand-50/50 dark:bg-brand-950/40 ring-2 ring-brand-500/20'
                    : 'border-slate-200 dark:border-slate-800'
                }`}
              >
                <div className="flex justify-between font-bold text-xs">
                  <span>VIP Priority Air</span>
                  <span>$15.00</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">Guaranteed 24-48 Hours Delivery</p>
              </div>
            </div>
          </div>

          {/* Step 4: Payment Selector */}
          <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-subtle">
            <PaymentSelector
              selectedPayment={selectedPayment}
              onSelectPayment={setSelectedPayment}
            />
          </div>

        </div>

        {/* Right Summary Column */}
        <div className="lg:col-span-1 space-y-6 sticky top-24">
          <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-subtle space-y-4">
            <OrderSummaryCheckout />
          </div>

          <CartSummary isCheckoutPage />

          <Button
            fullWidth
            variant="accent"
            size="lg"
            isLoading={isSubmitting}
            onClick={handlePlaceOrder}
            icon={ArrowRight}
            iconPosition="right"
          >
            Place Order Now
          </Button>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Simulated Frontend Order Security</span>
          </div>
        </div>

      </div>
    </div>
  );
};
