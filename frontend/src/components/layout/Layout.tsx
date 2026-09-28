import React, { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { ThemeToggle } from '../brand/ThemeToggle';
import { User, Menu, X, Layers, Wrench, Cpu, Bookmark, Bell } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  showRightSidebar?: boolean;
  rightSidebarContent?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  showSidebar = true,
  showRightSidebar = false,
  rightSidebarContent,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHealthy, setIsHealthy] = useState<boolean>(true);
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const bottomTabs = [
    { label: 'Feed', href: '/dashboard', icon: Layers },
    { label: 'Tools', href: '/tools', icon: Wrench },
    { label: 'Models', href: '/models', icon: Cpu },
    { label: 'Saved', href: '/saved', icon: Bookmark },
    { label: 'Alerts', href: '/alerts', icon: Bell },
  ];

  const isTabActive = (href: string) => {
    if (href === '/dashboard') return location.pathname === '/dashboard';
    return location.pathname.startsWith(href);
  };

  useEffect(() => {
    let isMounted = true;
    const checkHealth = async () => {
      try {
        const res = await fetch('/health');
        if (isMounted) {
          setIsHealthy(res.ok);
        }
      } catch {
        if (isMounted) setIsHealthy(false);
      }
    };
    checkHealth();
    const interval = setInterval(checkHealth, 30000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-surface-base text-text-primary antialiased selection:bg-accent-indigo selection:text-white flex flex-col">
      {/* Mobile & Tablet Header Bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-surface-base/95 backdrop-blur-sm border-b border-border-hairline z-50 flex items-center justify-between px-4">
        {showSidebar && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hidden md:flex lg:hidden p-1.5 text-text-primary hover:bg-surface-card rounded-md transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        )}
        <Link to="/" className="font-serif text-lg font-normal text-text-primary">
          Sift
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/profile"
            className="w-7 h-7 rounded-full bg-surface-elevated border border-border-hairline flex items-center justify-center text-text-primary"
          >
            <User className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      {/* Desktop Top Status Bar */}
      {showSidebar && (
        <header
          className={`hidden lg:flex fixed top-0 h-14 bg-surface-base/95 backdrop-blur-md border-b border-border-hairline z-30 items-center justify-between px-6 left-[240px] ${
            showRightSidebar ? 'right-[360px]' : 'right-0'
          }`}
        >
          <div className="flex items-center gap-2 font-mono text-[10px] text-text-muted">
            <span className="text-text-secondary uppercase tracking-wider">SYSTEM STATUS:</span>
            <span className={`inline-block w-1.5 h-1.5 rounded-full ${isHealthy ? 'bg-status-success animate-pulse' : 'bg-status-alert'}`}></span>
            <span className={`font-medium ${isHealthy ? 'text-status-success' : 'text-status-alert'}`}>
              {isHealthy ? 'OPERATIONAL' : 'DEGRADED'}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              to="/profile"
              className="w-7 h-7 rounded-full bg-surface-elevated border border-border-hairline flex items-center justify-center hover:border-accent-indigo transition-colors"
              title={user?.name || 'Profile'}
            >
              <User className="w-4 h-4 text-text-primary" />
            </Link>
          </div>
        </header>
      )}

      {/* Desktop Fixed Sidebar */}
      {showSidebar && (
        <div className="hidden lg:block fixed left-0 top-0 bottom-0 w-[240px] z-40">
          <Sidebar />
        </div>
      )}

      {/* Tablet Drawer Sidebar (768px - 1023px) */}
      {showSidebar && mobileMenuOpen && (
        <div className="hidden md:flex lg:hidden fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative w-[240px] h-full bg-surface-card z-50">
            <Sidebar onCloseMobile={() => setMobileMenuOpen(false)} />
          </div>
        </div>
      )}

      {/* Desktop Fixed Right Sidebar */}
      {showRightSidebar && (
        <aside className="hidden lg:flex fixed right-0 top-0 bottom-0 w-[360px] bg-surface-card border-l border-border-hairline z-40 flex-col p-6 overflow-y-auto">
          {rightSidebarContent}
        </aside>
      )}

      {/* Main Content Area */}
      <div
        className={`flex-1 pt-14 lg:pt-14 ${
          showSidebar ? 'pb-[72px] md:pb-0 lg:pl-[240px]' : ''
        } ${showRightSidebar ? 'lg:pr-[360px]' : ''}`}
      >
        <main className="relative min-h-[calc(100vh-56px)]">{children}</main>
        {/* On mobile screens, show the right sidebar content stacked below the main content */}
        {showRightSidebar && (
          <aside className="lg:hidden p-6 bg-surface-card border-t border-border-hairline">
            {rightSidebarContent}
          </aside>
        )}
      </div>

      {/* Bottom Tab Bar (Mobile only, < 768px) */}
      {showSidebar && (
        <nav
          aria-label="Mobile Navigation"
          className="fixed bottom-0 left-0 right-0 h-[64px] bg-surface-base/95 backdrop-blur-md border-t border-border-hairline z-40 flex items-center justify-around px-2 md:hidden"
        >
          {bottomTabs.map((tab) => {
            const Icon = tab.icon;
            const active = isTabActive(tab.href);
            return (
              <button
                key={tab.label}
                type="button"
                onClick={() => navigate(tab.href)}
                className={`flex flex-col items-center justify-center flex-1 h-full py-1 gap-1 transition-colors cursor-pointer ${
                  active
                    ? 'text-accent-indigo font-medium'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[11px] leading-none">{tab.label}</span>
              </button>
            );
          })}
        </nav>
      )}
    </div>
  );
};
