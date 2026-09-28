import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SiftLogo } from '../components/brand/SiftLogo';
import { useAuth } from '../hooks/useAuth';
import { ThemeToggle } from '../components/brand/ThemeToggle';
import { ArrowRight, AlertCircle } from 'lucide-react';

export const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password) {
      setError('Please complete all required fields.');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must contain at least 6 characters.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      await register(name, email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface-base flex flex-col justify-between p-6">
      <header className="flex items-center justify-between max-w-5xl mx-auto w-full">
        <Link to="/" className="flex items-center gap-3">
          <SiftLogo size={32} />
          <span className="text-[20px] text-text-primary tracking-tight font-medium">Sift</span>
        </Link>
        <ThemeToggle />
      </header>

      <main className="flex-1 flex items-center justify-center py-12">
        <div className="w-full max-w-md bg-surface-card border border-border-hairline rounded-2xl p-8 sm:p-10 shadow-sm">
          <div className="text-center space-y-2 mb-8">
            <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">
              INITIALIZE WORKSPACE
            </span>
            <h1 className="text-[28px] font-serif font-normal text-text-primary tracking-tight">
              Create your account
            </h1>
            <p className="text-[14px] text-text-secondary">
              Get full access to daily intelligence and verification audits.
            </p>
          </div>

          {error && (
            <div className="mb-6 p-3 rounded-lg bg-status-alert/10 border border-status-alert/20 text-status-alert text-[13px] flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-mono text-[11px] uppercase tracking-wider text-text-muted mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Rivera"
                className="w-full h-11 px-3.5 bg-surface-elevated border border-border-hairline rounded-lg text-text-primary placeholder:text-text-muted text-[14px] focus:outline-none focus:border-accent-indigo transition-colors"
              />
            </div>

            <div>
              <label className="block font-mono text-[11px] uppercase tracking-wider text-text-muted mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@organization.com"
                className="w-full h-11 px-3.5 bg-surface-elevated border border-border-hairline rounded-lg text-text-primary placeholder:text-text-muted text-[14px] focus:outline-none focus:border-accent-indigo transition-colors"
              />
            </div>

            <div>
              <label className="block font-mono text-[11px] uppercase tracking-wider text-text-muted mb-2">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full h-11 px-3.5 bg-surface-elevated border border-border-hairline rounded-lg text-text-primary placeholder:text-text-muted text-[14px] focus:outline-none focus:border-accent-indigo transition-colors"
              />
            </div>

            <div>
              <label className="block font-mono text-[11px] uppercase tracking-wider text-text-muted mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full h-11 px-3.5 bg-surface-elevated border border-border-hairline rounded-lg text-text-primary placeholder:text-text-muted text-[14px] focus:outline-none focus:border-accent-indigo transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 h-11 bg-accent-indigo text-white text-[14px] font-medium rounded-lg hover:bg-accent-indigo/90 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
            >
              <span>{loading ? 'Creating account...' : 'Create account'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-border-hairline text-center text-[13px] text-text-muted">
            Already have an account?{' '}
            <Link to="/login" className="text-accent-indigo font-medium hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </main>

      <footer className="text-center font-mono text-[11px] text-text-muted">
        TERMINAL ATTESTED · 256-BIT CRYPTOGRAPHIC CONSENSUS
      </footer>
    </div>
  );
};
