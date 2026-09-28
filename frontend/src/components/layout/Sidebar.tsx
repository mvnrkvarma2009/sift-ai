import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SiftLogo } from '../brand/SiftLogo';
import { useAuth } from '../../hooks/useAuth';
import { notificationsApi } from '../../lib/api';
import {
  Layers,
  Wrench,
  Compass,
  Bookmark,
  Bell,
  LogOut,
  Cpu,
} from 'lucide-react';

interface SidebarProps {
  onCloseMobile?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onCloseMobile }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [unreadCount, setUnreadCount] = useState<number>(0);

  useEffect(() => {
    let isMounted = true;

    const fetchCount = async () => {
      try {
        const token = localStorage.getItem('sift_jwt');
        if (!token) {
          setUnreadCount(0);
          return;
        }
        const res = await notificationsApi.getUnreadCount();
        if (isMounted) {
          setUnreadCount(res.count || 0);
        }
      } catch {
        // Silently catch in polling
      }
    };

    fetchCount();
    const interval = setInterval(fetchCount, 30000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [location.pathname]);

  const navItems = [
    { label: 'Feed', href: '/dashboard', icon: Layers },
    { label: 'Tools', href: '/tools', icon: Wrench },
    { label: 'Models', href: '/models', icon: Cpu },
    { label: 'Discover', href: '/discover', icon: Compass },
    { label: 'Saved', href: '/saved', icon: Bookmark },
    {
      label: 'Alerts',
      href: '/alerts',
      icon: Bell,
      badge: unreadCount > 0 ? String(unreadCount) : undefined,
    },
  ];

  const handleNavClick = async (href: string) => {
    if (href === '/alerts') {
      try {
        await notificationsApi.markAllAsRead();
        setUnreadCount(0);
      } catch {
        // Handled silently
      }
    }
    navigate(href);
    if (onCloseMobile) onCloseMobile();
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const initials = user?.name
    ? user.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : 'B';

  return (
    <aside className="w-[240px] h-full bg-surface-card border-r border-border-hairline z-40 flex flex-col justify-between select-none">
      <div className="p-5">
        <Link
          to="/"
          className="flex items-center gap-3 pb-6 border-b border-border-hairline cursor-pointer group"
          onClick={onCloseMobile}
        >
          <SiftLogo size={28} />
          <span className="text-[20px] text-text-primary tracking-tight font-medium group-hover:text-accent-indigo transition-colors">
            Sift
          </span>
        </Link>
        <nav className="mt-6 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href.includes('?')
                ? location.pathname + location.search === item.href
                : location.pathname === item.href;

            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-surface-elevated text-text-primary font-medium'
                    : 'text-text-muted hover:bg-surface-elevated hover:text-text-primary'
                }`}
              >
                <span className="flex items-center gap-3">
                  <Icon className="w-[18px] h-[18px]" />
                  <span className="text-[12px]">{item.label}</span>
                </span>
                {item.badge && (
                  <span className="px-2 py-0.5 rounded-full bg-surface-elevated text-accent-indigo font-mono text-[10px] border border-border-hairline">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-border-hairline">
        <div className="flex items-center justify-between gap-3">
          <Link
            to="/profile"
            onClick={onCloseMobile}
            className="flex items-center gap-3 min-w-0 flex-1 hover:opacity-80 transition-opacity"
          >
            <div className="w-9 h-9 rounded-full bg-surface-elevated border border-border-hairline flex items-center justify-center shrink-0">
              <span className="font-mono text-[11px] text-text-primary font-semibold">
                {initials}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[12px] text-text-primary font-medium truncate">
                {user?.name || 'Builder'}
              </p>
            </div>
          </Link>
          <button
            onClick={handleLogout}
            title="Sign out"
            className="text-text-muted hover:text-status-alert p-1 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
