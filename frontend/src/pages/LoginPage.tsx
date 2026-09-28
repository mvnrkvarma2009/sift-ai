import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SiftLogo } from '../components/brand/SiftLogo';
import { useAuth } from '../hooks/useAuth';
import { ThemeToggle } from '../components/brand/ThemeToggle';
import { ArrowRight, AlertCircle } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please provide both email and password.');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err?.message || 'Failed to sign in. Please verify your credentials.');
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
              SECURE ACCESS
            </span>
            <h1 className="text-[28px] font-serif font-normal text-text-primary tracking-tight">
              Sign in to Sift
            </h1>
            <p className="text-[14px] text-text-secondary">
              Enter your credentials to access your intelligence feed.
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
              <div className="flex items-center justify-between mb-2">
                <label className="block font-mono text-[11px] uppercase tracking-wider text-text-muted">
                  Password
                </label>
                <a href="#forgot" className="text-[12px] text-text-muted hover:text-accent-indigo transition-colors">
                  Forgot?
                </a>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full h-11 px-3.5 bg-surface-elevated border border-border-hairline rounded-lg text-text-primary placeholder:text-text-muted text-[14px] focus:outline-none focus:border-accent-indigo transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 h-11 bg-accent-indigo text-white text-[14px] font-medium rounded-lg hover:bg-accent-indigo/90 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
            >
              <span>{loading ? 'Authenticating...' : 'Sign in'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-border-hairline text-center text-[13px] text-text-muted">
            Don't have an account?{' '}
            <Link to="/register" className="text-accent-indigo font-medium hover:underline">
              Create account
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
