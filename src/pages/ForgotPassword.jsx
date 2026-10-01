import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-8 shadow-card space-y-6">
      
      {submitted ? (
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold">Check Your Email</h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            We sent password reset instructions to <strong>{email}</strong>. Please check your inbox.
          </p>
          <div className="pt-2">
            <Link to="/login">
              <Button variant="outline" size="md" icon={ArrowLeft}>
                Back to Sign In
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-black text-slate-900 dark:text-slate-100">
              Reset Password
            </h1>
            <p className="text-xs text-slate-500">Enter your account email to receive a recovery link</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email Address"
              type="email"
              icon={Mail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              required
            />

            <Button fullWidth type="submit" variant="primary" size="lg">
              Send Recovery Link
            </Button>
          </form>

          <div className="text-center pt-2 border-t border-slate-100 dark:border-slate-800">
            <Link to="/login" className="text-xs font-bold text-slate-500 hover:text-slate-900 flex items-center justify-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Sign In
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
