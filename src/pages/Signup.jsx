import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useUIStore } from '../store/uiStore';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Mail, Lock, User, Phone, UserPlus } from 'lucide-react';

export const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { signup } = useAuthStore();
  const { addToast } = useUIStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      addToast('Passwords do not match', 'error');
      return;
    }

    setIsLoading(true);
    const result = await signup({ name, email, phone, password });
    setIsLoading(false);

    if (result.success) {
      addToast('Account created successfully!', 'success');
      navigate('/profile');
    } else {
      addToast(result.message, 'error');
    }
  };

  return (
    <div className="max-w-md mx-auto w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-8 shadow-card space-y-6">
      
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
          Create Account
        </h1>
        <p className="text-xs text-slate-500">Join AURA for exclusive VIP perks & easy checkout</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Full Name"
          icon={User}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Alex Vance"
          required
        />

        <Input
          label="Email Address"
          type="email"
          icon={Mail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@example.com"
          required
        />

        <Input
          label="Phone Number"
          type="tel"
          icon={Phone}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+1 (555) 000-0000"
        />

        <Input
          label="Password"
          type="password"
          icon={Lock}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
        />

        <Input
          label="Confirm Password"
          type="password"
          icon={Lock}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="••••••••"
          required
        />

        <Button
          fullWidth
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isLoading}
          icon={UserPlus}
        >
          Create Free Account
        </Button>
      </form>

      <div className="text-center text-xs text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
        Already have an account?{' '}
        <Link to="/login" className="font-bold text-brand-600 dark:text-brand-400 hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  );
};
