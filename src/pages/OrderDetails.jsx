import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useOrderStore } from '../store/orderStore';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Button } from '../components/ui/Button';
import { ConfirmDialog } from '../components/common/ConfirmDialog';
import { formatCurrency, formatDate } from '../utils/formatters';
import { Package, Check, RotateCcw, XCircle, ArrowLeft } from 'lucide-react';
import { useUIStore } from '../store/uiStore';

export const OrderDetails = () => {
  const { id: orderId } = useParams();
  const { getOrderById, cancelOrder, reorder } = useOrderStore();
  const { addToast } = useUIStore();
  const navigate = useNavigate();
  const [showCancelDialog, setShowCancelDialog] = useState(false);

  const order = getOrderById(orderId);

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-xl font-bold mb-4">Order not found</h2>
        <Button onClick={() => navigate('/orders')}>Back to Orders</Button>
      </div>
    );
  }

  const handleCancel = () => {
    cancelOrder(order.id);
    addToast('Order cancelled successfully', 'info');
  };

  const handleReorder = () => {
    reorder(order.id);
    addToast('Items added to cart', 'success');
    navigate('/cart');
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 space-y-8">
      <Breadcrumb items={[{ label: 'Orders', link: '/orders' }, { label: order.id }]} />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <button
            onClick={() => navigate('/orders')}
            className="text-xs font-bold text-slate-500 hover:text-slate-900 flex items-center gap-1 mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Orders
          </button>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
            Order {order.id}
          </h1>
          <p className="text-xs text-slate-500 mt-1">Placed on {formatDate(order.createdAt)}</p>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" icon={RotateCcw} onClick={handleReorder}>
            Reorder
          </Button>

          {order.status !== 'Cancelled' && order.status !== 'Delivered' && (
            <Button variant="danger" size="sm" icon={XCircle} onClick={() => setShowCancelDialog(true)}>
              Cancel Order
            </Button>
          )}
        </div>
      </div>

      {/* Visual Tracking Progress Timeline */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-subtle space-y-6">
        <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">Order Progress Timeline</h3>
        
        {order.status === 'Cancelled' ? (
          <div className="p-4 bg-rose-50 dark:bg-rose-950/60 text-rose-600 rounded-2xl text-xs font-bold flex items-center gap-2">
            <XCircle className="w-5 h-5" /> This order has been cancelled.
          </div>
        ) : (
          <div className="relative flex flex-col md:flex-row justify-between gap-6 md:gap-0">
            {order.tracking.map((step, idx) => (
              <div key={idx} className="flex md:flex-col items-center gap-3 md:gap-2 flex-1 relative z-10">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  step.completed
                    ? 'bg-brand-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                }`}>
                  {step.completed ? <Check className="w-4 h-4" /> : idx + 1}
                </div>
                <div className="md:text-center">
                  <h5 className={`text-xs font-bold ${step.completed ? 'text-slate-900 dark:text-slate-100' : 'text-slate-400'}`}>
                    {step.status}
                  </h5>
                  <span className="text-[10px] text-slate-400 block">{step.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Breakdown Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left: Ordered Items */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-subtle space-y-4">
          <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 pb-3 border-b border-slate-100 dark:border-slate-800">
            Items in Order ({order.items.length})
          </h4>
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {order.items.map((item) => (
              <div key={item.id} className="py-3 flex items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-3">
                  <img
                    src={item.product.thumbnail}
                    alt={item.product.name}
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                  <div>
                    <h5 className="font-bold text-slate-800 dark:text-slate-200">{item.product.name}</h5>
                    <span className="text-[11px] text-slate-400">Qty: {item.quantity}</span>
                  </div>
                </div>
                <span className="font-extrabold text-slate-900 dark:text-slate-100">
                  {formatCurrency(item.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Address & Payment Summary */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-subtle space-y-3 text-xs">
            <h4 className="font-bold text-slate-900 dark:text-slate-100 pb-2 border-b border-slate-100 dark:border-slate-800">
              Shipping Address
            </h4>
            <p className="font-bold text-slate-800 dark:text-slate-200">{order.shippingAddress.fullName}</p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {order.shippingAddress.house}, {order.shippingAddress.street}<br />
              {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.postalCode}
            </p>
            <p className="text-slate-400">Phone: {order.shippingAddress.phone}</p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-subtle space-y-3 text-xs">
            <h4 className="font-bold text-slate-900 dark:text-slate-100 pb-2 border-b border-slate-100 dark:border-slate-800">
              Payment Summary
            </h4>
            <div className="flex justify-between text-slate-600 dark:text-slate-400">
              <span>Subtotal</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">{formatCurrency(order.subtotal)}</span>
            </div>
            {order.discount > 0 && (
              <div className="flex justify-between text-emerald-600 font-bold">
                <span>Discount</span>
                <span>-{formatCurrency(order.discount)}</span>
              </div>
            )}
            <div className="flex justify-between text-slate-600 dark:text-slate-400">
              <span>Shipping</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">{formatCurrency(order.shipping)}</span>
            </div>
            <div className="flex justify-between text-slate-600 dark:text-slate-400">
              <span>Tax (8%)</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">{formatCurrency(order.tax)}</span>
            </div>
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-between font-extrabold text-sm text-slate-900 dark:text-slate-100">
              <span>Total Amount</span>
              <span className="text-brand-600 dark:text-brand-400">{formatCurrency(order.total)}</span>
            </div>
          </div>
        </div>

      </div>

      <ConfirmDialog
        isOpen={showCancelDialog}
        onClose={() => setShowCancelDialog(false)}
        onConfirm={handleCancel}
        title="Cancel Order"
        message="Are you sure you want to cancel this order? This action cannot be undone."
        confirmText="Yes, Cancel Order"
      />
    </div>
  );
};
