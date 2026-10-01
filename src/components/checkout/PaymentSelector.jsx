import React from 'react';
import { CreditCard, Banknote, Smartphone, Wallet, Check } from 'lucide-react';

export const PaymentSelector = ({ selectedPayment, onSelectPayment }) => {
  const methods = [
    {
      id: 'Credit/Debit Card',
      title: 'Credit or Debit Card',
      desc: 'Pay securely using Visa, Mastercard, or Amex',
      icon: CreditCard
    },
    {
      id: 'UPI / Digital Wallet',
      title: 'UPI / Instant Pay',
      desc: 'Pay using GPay, PhonePe, Paytm, or Apple Pay',
      icon: Smartphone
    },
    {
      id: 'Wallet',
      title: 'Digital Wallet',
      desc: 'Use store credit or digital wallet balance',
      icon: Wallet
    },
    {
      id: 'Cash on Delivery',
      title: 'Cash on Delivery (COD)',
      desc: 'Pay in cash upon doorstep delivery',
      icon: Banknote
    }
  ];

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-3">Select Payment Method</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {methods.map((m) => {
          const isSelected = selectedPayment === m.id;
          const Icon = m.icon;
          return (
            <div
              key={m.id}
              onClick={() => onSelectPayment(m.id)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                isSelected
                  ? 'border-brand-600 bg-brand-50/50 dark:bg-brand-950/40 ring-2 ring-brand-500/20'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300'
              }`}
            >
              <div className={`p-2.5 rounded-xl shrink-0 ${isSelected ? 'bg-brand-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h5 className="font-bold text-xs text-slate-900 dark:text-slate-100">{m.title}</h5>
                  {isSelected && <Check className="w-4 h-4 text-brand-600" />}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-normal">{m.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
