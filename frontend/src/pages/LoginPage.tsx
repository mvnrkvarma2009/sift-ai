import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SiftLogo } from '../components/brand/SiftLogo';
import { useAuth } from '../hooks/useAuth';
import { ThemeToggle } from '../components/brand/ThemeToggle';
import { ArrowRight, AlertCircle, Sparkles } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const { login, loginWithGoogle, continueAsGuest } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    setError('');
    setGoogleLoading(true);
    try {
      await loginWithGoogle();
    } catch (err: any) {
      console.error('[AUTH] Google sign-in error:', err);
      setError(
        err?.message ||
          'Google OAuth not configured yet in Supabase Dashboard. Please use demo credentials or Continue as Guest.'
      );
      setGoogleLoading(false);
    }
  };

  const handleDemoSignIn = async () => {
    setError('');
    setEmail('demo@sift.ai');
    setPassword('demo1234');
    setLoading(true);
    try {
      await login('demo@sift.ai', 'demo1234');
      navigate('/dashboard');
    } catch (err: any) {
      setError(err?.message || 'Failed to sign in with demo credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleGuestAccess = () => {
    continueAsGuest();
    navigate('/dashboard');
  };

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

          {/* Google Sign-in */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={googleLoading || loading}
            className="w-full h-11 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-700 text-[14px] font-medium rounded-lg transition-colors flex items-center justify-center gap-3 cursor-pointer shadow-sm disabled:opacity-50"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            <span>{googleLoading ? 'Connecting to Google...' : 'Continue with Google'}</span>
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border-hairline" />
            </div>
            <div className="relative flex justify-center text-[11px] font-mono uppercase tracking-wider text-text-muted">
              <span className="bg-surface-card px-3">or continue with email</span>
            </div>
          </div>

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
              disabled={loading || googleLoading}
              className="w-full mt-6 h-11 bg-accent-indigo text-white text-[14px] font-medium rounded-lg hover:bg-accent-indigo/90 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
            >
              <span>{loading ? 'Authenticating...' : 'Sign in with Email'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Instant Demo Sign-in */}
            <button
              type="button"
              onClick={handleDemoSignIn}
              disabled={loading || googleLoading}
              className="w-full mt-2 py-2.5 px-3 bg-surface-elevated hover:bg-surface-elevated/80 border border-border-hairline rounded-lg text-[13px] font-medium text-accent-indigo flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent-indigo" />
              <span>Instant Demo Access (demo@sift.ai)</span>
            </button>

            {/* Continue as Guest */}
            <button
              type="button"
              onClick={handleGuestAccess}
              className="w-full py-2 text-[12px] text-text-muted hover:text-text-primary flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Continue as Guest (No account needed) →</span>
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
