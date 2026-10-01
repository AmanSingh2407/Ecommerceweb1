import React, { useState } from 'react';
import { Bell, CheckCheck } from 'lucide-react';
import { useUIStore } from '../../store/uiStore';

export const NotificationBell = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { notifications, markNotificationAsRead, markAllNotificationsAsRead } = useUIStore();

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-floating z-50 overflow-hidden animate-slide-up">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">Notifications</h4>
              {unreadCount > 0 && (
                <button
                  onClick={markAllNotificationsAsRead}
                  className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1"
                >
                  <CheckCheck className="w-3.5 h-3.5" />
                  Mark all read
                </button>
              )}
            </div>

            <div className="max-h-80 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800">
              {notifications.length === 0 ? (
                <div className="p-6 text-center text-xs text-slate-400">No notifications</div>
              ) : (
                notifications.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => markNotificationAsRead(item.id)}
                    className={`p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors ${
                      !item.read ? 'bg-brand-50/30 dark:bg-brand-950/20' : ''
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h5 className="text-xs font-bold text-slate-800 dark:text-slate-200">{item.title}</h5>
                      {!item.read && <span className="w-2 h-2 rounded-full bg-brand-500" />}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-1">
                      {item.message}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
