import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useUIStore } from '../store/uiStore';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Mail, Lock, LogIn, Eye, EyeOff } from 'lucide-react';

export const Login = () => {
  const [email, setEmail] = useState('alex.vance@example.com');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuthStore();
  const { addToast } = useUIStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const result = await login(email, password);
    setIsLoading(false);

    if (result.success) {
      addToast(`Welcome back, ${result.user.name}!`, 'success');
      navigate('/profile');
    } else {
      addToast(result.message, 'error');
    }
  };

  return (
    <div className="max-w-md mx-auto w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-8 shadow-card space-y-6">
      
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
          Welcome Back
        </h1>
        <p className="text-xs text-slate-500">Sign in to your AURA account to view orders & wishlist</p>
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

        <div>
          <div className="relative">
            <Input
              label="Password"
              type={showPassword ? 'text' : 'password'}
              icon={Lock}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-8 text-slate-400 hover:text-slate-600"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          <div className="flex justify-end mt-1">
            <Link to="/forgot-password" className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline">
              Forgot password?
            </Link>
          </div>
        </div>

        <Button
          fullWidth
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isLoading}
          icon={LogIn}
        >
          Sign In
        </Button>
      </form>

      <div className="text-center text-xs text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
        Don't have an account?{' '}
        <Link to="/signup" className="font-bold text-brand-600 dark:text-brand-400 hover:underline">
          Create Account
        </Link>
      </div>
    </div>
  );
};
