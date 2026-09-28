import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SiftLogo } from '../brand/SiftLogo';
import { ThemeToggle } from '../brand/ThemeToggle';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useAuth } from '../../hooks/useAuth';
import { User, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentScreen?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
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
          <div className="flex items-center gap-3 md:gap-5">
            {!isAuthenticated && (
              <div className="hidden md:flex items-center gap-5">
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
              </div>
            )}

            {isAuthenticated && (
              <Link
                to="/profile"
                className="w-9 h-9 md:w-8 md:h-8 rounded-full bg-surface-elevated border border-border-hairline flex items-center justify-center shrink-0 hover:border-accent-indigo transition-colors"
                title={user?.name || 'Account'}
              >
                <User className="w-[18px] h-[18px] text-text-primary" />
              </Link>
            )}
            <ThemeToggle />

            {/* Mobile Hamburger Button (< 768px) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-surface-elevated text-text-primary transition-colors cursor-pointer"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-surface-base flex flex-col justify-between p-6 md:hidden"
          >
            {/* Top row: Logo and Close button */}
            <div className="flex items-center justify-between h-[60px]">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="flex items-center gap-3 cursor-pointer"
              >
                <SiftLogo size={32} />
                <span className="text-[20px] text-text-primary tracking-tight font-medium">
                  Sift
                </span>
              </Link>
              <button
                type="button"
                onClick={closeMobileMenu}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-elevated text-text-primary transition-colors cursor-pointer"
                aria-label="Close mobile menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Vertical navigation links */}
            <div className="flex flex-col gap-6 my-auto py-8">
              <Link
                to="/dashboard"
                onClick={closeMobileMenu}
                className="text-[24px] font-medium text-text-primary hover:text-accent-indigo transition-colors"
              >
                Feed
              </Link>
              <Link
                to="/tools"
                onClick={closeMobileMenu}
                className="text-[24px] font-medium text-text-primary hover:text-accent-indigo transition-colors"
              >
                Tools
              </Link>
              <Link
                to="/models"
                onClick={closeMobileMenu}
                className="text-[24px] font-medium text-text-primary hover:text-accent-indigo transition-colors"
              >
                Models
              </Link>
              <Link
                to="/discover"
                onClick={closeMobileMenu}
                className="text-[24px] font-medium text-text-primary hover:text-accent-indigo transition-colors"
              >
                Discover
              </Link>
            </div>

            {/* Bottom actions */}
            <div className="flex flex-col gap-3 pt-6 border-t border-border-hairline">
              {!isAuthenticated ? (
                <>
                  <Link
                    to="/login"
                    onClick={closeMobileMenu}
                    className="w-full py-3 text-center text-[15px] font-medium text-text-primary rounded-xl border border-border-hairline hover:bg-surface-elevated transition-colors"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/register"
                    onClick={closeMobileMenu}
                    className="w-full py-3 text-center text-[15px] font-medium text-white bg-accent-indigo rounded-xl hover:bg-accent-indigo/90 transition-colors"
                  >
                    Get started
                  </Link>
                </>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link
                    to="/profile"
                    onClick={closeMobileMenu}
                    className="w-full py-3 text-center text-[15px] font-medium text-text-primary rounded-xl border border-border-hairline hover:bg-surface-elevated transition-colors"
                  >
                    Account ({user?.name || 'User'})
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      closeMobileMenu();
                      navigate('/login');
                    }}
                    className="w-full py-2.5 text-center text-[14px] text-text-muted hover:text-status-alert transition-colors cursor-pointer"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
