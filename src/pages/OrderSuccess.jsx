import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { CheckCircle2, Package, Truck, ArrowRight, Home } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { formatCurrency, formatDate } from '../utils/formatters';

export const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state?.order;

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-xl font-bold mb-4">No order details found</h2>
        <Button onClick={() => navigate('/shop')}>Go to Shop</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 max-w-3xl space-y-8">
      
      {/* Top Banner Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-8 shadow-card text-center space-y-4">
        <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-500 rounded-full flex items-center justify-center mx-auto animate-pulse">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest block">
          Order Confirmed
        </span>
        <h1 className="text-3xl font-black text-slate-900 dark:text-slate-100">
          Thank you for your order!
        </h1>
        <p className="text-sm text-slate-500 max-w-md mx-auto">
          Your order <strong className="text-slate-800 dark:text-slate-200">{order.id}</strong> has been successfully placed. We will notify you when it ships.
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-2xl text-xs font-bold text-slate-700 dark:text-slate-300">
          <Truck className="w-4 h-4 text-brand-600" />
          <span>Estimated Delivery: <strong>{formatDate(order.estimatedDelivery)}</strong></span>
        </div>
      </div>

      {/* Details Breakdown */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-subtle space-y-6">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 pb-3 border-b border-slate-100 dark:border-slate-800">
          Order Summary & Delivery Details
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
          <div>
            <h5 className="font-bold text-slate-400 uppercase tracking-wider mb-2">Shipping Address</h5>
            <p className="font-bold text-slate-800 dark:text-slate-200">{order.shippingAddress.fullName}</p>
            <p className="text-slate-600 dark:text-slate-400">
              {order.shippingAddress.house}, {order.shippingAddress.street}
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.postalCode}
            </p>
            <p className="text-slate-400 mt-1">Phone: {order.shippingAddress.phone}</p>
          </div>

          <div>
            <h5 className="font-bold text-slate-400 uppercase tracking-wider mb-2">Payment Details</h5>
            <p className="text-slate-800 dark:text-slate-200">Method: <strong>{order.paymentMethod}</strong></p>
            <p className="text-slate-800 dark:text-slate-200 mt-1">Total Paid: <strong className="text-base text-brand-600">{formatCurrency(order.total)}</strong></p>
            <span className="inline-block mt-2 px-2.5 py-1 bg-emerald-50 text-emerald-700 font-bold rounded-md">
              {order.paymentStatus}
            </span>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Ordered Items ({order.items.length})</h5>
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {order.items.map((item) => (
              <div key={item.id} className="py-2.5 flex items-center justify-between text-xs">
                <div>
                  <h6 className="font-bold text-slate-800 dark:text-slate-200">{item.product.name}</h6>
                  <span className="text-[11px] text-slate-400">Qty: {item.quantity}</span>
                </div>
                <span className="font-bold text-slate-900 dark:text-slate-100">
                  {formatCurrency(item.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          variant="primary"
          size="md"
          onClick={() => navigate(`/orders/${order.id}`)}
          icon={Package}
        >
          Track & View Order
        </Button>

        <Button
          variant="outline"
          size="md"
          onClick={() => navigate('/shop')}
          icon={Home}
        >
          Continue Shopping
        </Button>
      </div>

    </div>
  );
};
