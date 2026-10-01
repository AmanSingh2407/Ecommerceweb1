import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useOrderStore } from '../store/orderStore';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { EmptyState } from '../components/common/EmptyState';
import { formatCurrency, formatDate } from '../utils/formatters';
import { Package, ArrowRight, RotateCcw } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Orders = () => {
  const { orders, reorder } = useOrderStore();
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredOrders = statusFilter === 'All'
    ? orders
    : orders.filter(o => o.status.toLowerCase() === statusFilter.toLowerCase());

  if (orders.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'My Orders' }]} />
        <EmptyState
          icon={Package}
          title="No Orders Found"
          description="You haven't placed any orders yet. Start shopping to create your first order!"
          actionText="Start Shopping"
          actionLink="/shop"
        />
      </div>
    );
  }

  const statuses = ['All', 'Delivered', 'Shipped', 'Confirmed', 'Processing'];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 space-y-8">
      <Breadcrumb items={[{ label: 'My Orders' }]} />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
            My Order History ({orders.length})
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">Track and manage your previous orders</p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto py-1">
          {statuses.map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 ${
                statusFilter === st
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {filteredOrders.length === 0 ? (
          <div className="p-8 text-center text-sm text-slate-500 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80">
            No orders found with status "{statusFilter}"
          </div>
        ) : (
          filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-subtle space-y-4"
            >
              {/* Card Top Info */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800 text-xs">
                <div>
                  <span className="text-slate-400 block">Order ID</span>
                  <span className="font-bold text-slate-900 dark:text-slate-100">{order.id}</span>
                </div>

                <div>
                  <span className="text-slate-400 block">Date Placed</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{formatDate(order.createdAt)}</span>
                </div>

                <div>
                  <span className="text-slate-400 block">Total Amount</span>
                  <span className="font-extrabold text-brand-600 dark:text-brand-400">{formatCurrency(order.total)}</span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-1">Status</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                    order.status === 'Delivered'
                      ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                      : order.status === 'Shipped'
                      ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300'
                      : 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>

              {/* Items Preview */}
              <div className="space-y-3">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between gap-4 text-xs">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.product.thumbnail}
                        alt={item.product.name}
                        className="w-12 h-12 rounded-xl object-cover"
                      />
                      <div>
                        <h5 className="font-bold text-slate-800 dark:text-slate-200">{item.product.name}</h5>
                        <span className="text-[11px] text-slate-400">Qty: {item.quantity}</span>
                      </div>
                    </div>
                    <span className="font-bold text-slate-900 dark:text-slate-100">
                      {formatCurrency(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => reorder(order.id)}
                  className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reorder Items
                </button>

                <Link to={`/orders/${order.id}`}>
                  <Button variant="outline" size="sm" icon={ArrowRight} iconPosition="right">
                    View Details & Track
                  </Button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
