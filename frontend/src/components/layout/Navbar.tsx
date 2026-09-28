import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SiftLogo } from '../brand/SiftLogo';
import { ThemeToggle } from '../brand/ThemeToggle';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useAuth } from '../../hooks/useAuth';
import { User, LogIn, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentScreen?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }
      }
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'navbar-scrolled' : 'navbar-transparent'
      }`}
    >
      <div className="h-[72px] max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 cursor-pointer group">
          <SiftLogo size={32} />
          <span className="text-[20px] text-text-primary tracking-tight font-medium group-hover:text-accent-indigo transition-colors">
            Sift
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/dashboard"
            className="text-[14px] text-text-muted hover:text-text-primary transition-colors cursor-pointer"
          >
            Feed
          </Link>
          <Link
            to="/tools"
            className="text-[14px] text-text-muted hover:text-text-primary transition-colors cursor-pointer"
          >
            Tools
          </Link>
          <Link
            to="/models"
            className="text-[14px] text-text-muted hover:text-text-primary transition-colors cursor-pointer"
          >
            Models
          </Link>
          <Link
            to="/discover"
            className="text-[14px] text-text-muted hover:text-text-primary transition-colors cursor-pointer"
          >
            Discover
          </Link>
        </nav>
        <div className="flex items-center gap-5">
          {!isAuthenticated && (
            <>
              <Link
                to="/login"
                className="text-[14px] text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="bg-accent-indigo text-white text-[12px] px-4 py-2 rounded-full font-medium hover:bg-accent-indigo/90 transition-colors cursor-pointer"
              >
                Get started
              </Link>
            </>
          )}

          {isAuthenticated && (
            <Link
              to="/profile"
              className="w-8 h-8 rounded-full bg-surface-elevated border border-border-hairline flex items-center justify-center shrink-0 hover:border-accent-indigo transition-colors"
              title={user?.name || 'Account'}
            >
              <User className="w-[18px] h-[18px] text-text-primary" />
            </Link>
          )}
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
};
