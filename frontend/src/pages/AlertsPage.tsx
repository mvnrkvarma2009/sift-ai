import React, { useState, useEffect } from 'react';
import { Layout } from '../components/layout/Layout';
import { notificationsApi, NotificationItem } from '../lib/api';
import { Bell, CheckCheck, Trash2, X, Sparkles, AlertCircle, Info, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AlertsPage: React.FC = () => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await notificationsApi.getNotifications(100);
      setNotifications(res.notifications || []);
    } catch (err: any) {
      console.error('Failed to load notifications:', err);
      if (err.response?.status === 401 || err.message?.includes('401') || err.message?.includes('Unauthorized')) {
        if (typeof window !== 'undefined' && window.location.pathname !== '/login') {
          window.location.href = '/login';
        }
        return;
      }
      setError('Could not load notifications. Try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleMarkAllAsRead = async () => {
    try {
      await notificationsApi.markAllAsRead();
      setNotifications((prev) =>
        prev.map((n) => ({ ...n, read_at: n.read_at || new Date().toISOString() }))
      );
    } catch (err: any) {
      console.error('Failed to mark all as read:', err);
    }
  };

  const handleMarkAsRead = async (id: string) => {
    try {
      await notificationsApi.markAsRead(id);
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, read_at: new Date().toISOString() } : n))
      );
    } catch (err: any) {
      console.error('Failed to mark notification as read:', err);
    }
  };

  const handleDelete = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    try {
      await notificationsApi.deleteNotification(id);
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    } catch (err: any) {
      console.error('Failed to delete notification:', err);
    }
  };

  const handleClearAll = async () => {
    try {
      await notificationsApi.clearAll();
      setNotifications([]);
    } catch (err: any) {
      console.error('Failed to clear notifications:', err);
    }
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'welcome':
        return <Sparkles className="w-4 h-4 text-accent-indigo" />;
      case 'verdict_ready':
        return <CheckCheck className="w-4 h-4 text-status-success" />;
      case 'feed_update':
        return <Bell className="w-4 h-4 text-accent-indigo" />;
      default:
        return <Info className="w-4 h-4 text-text-muted" />;
    }
  };

  const formatTimestamp = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      const now = new Date();
      const diffMs = now.getTime() - d.getTime();
      const diffMins = Math.floor(diffMs / 60000);
      if (diffMins < 1) return 'Just now';
      if (diffMins < 60) return `${diffMins}m ago`;
      const diffHours = Math.floor(diffMins / 60);
      if (diffHours < 24) return `${diffHours}h ago`;
      const diffDays = Math.floor(diffHours / 24);
      return `${diffDays}d ago`;
    } catch {
      return dateStr;
    }
  };

  const unreadCount = notifications.filter((n) => !n.read_at).length;

  return (
    <Layout showSidebar={true} showRightSidebar={false}>
      <div className="w-full max-w-[820px] mx-auto p-6 lg:p-10 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border-hairline">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-[28px] font-serif text-text-primary tracking-tight">
                Notifications
              </h1>
              {unreadCount > 0 && (
                <span className="px-2 py-0.5 rounded-full text-[11px] font-mono font-medium bg-accent-indigo/15 text-accent-indigo border border-accent-indigo/20">
                  {unreadCount} new
                </span>
              )}
            </div>
            <p className="text-[13px] text-text-muted mt-1">
              Deterministic verifications, daily feed dispatches, and system activity logs.
            </p>
          </div>

          {notifications.length > 0 && unreadCount > 0 && (
            <button
              onClick={handleMarkAllAsRead}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-hairline hover:border-accent-indigo/40 bg-surface-card hover:bg-surface-elevated text-[12px] font-mono text-text-secondary hover:text-accent-indigo transition-all cursor-pointer select-none shrink-0"
            >
              <CheckCheck className="w-3.5 h-3.5" />
              <span>Mark all as read</span>
            </button>
          )}
        </div>

        {/* Content */}
        {loading ? (
          <div className="py-16 text-center text-text-muted text-[13px] font-mono">
            Loading notifications...
          </div>
        ) : error ? (
          <div className="p-4 rounded-lg bg-status-alert/10 border border-status-alert/20 text-status-alert text-[13px] flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        ) : notifications.length === 0 ? (
          <div className="py-20 text-center flex flex-col items-center justify-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-surface-card border border-border-hairline flex items-center justify-center text-text-muted">
              <Bell className="w-5 h-5 opacity-40" />
            </div>
            <p className="text-[15px] font-serif italic text-text-primary">
              You're all caught up.
            </p>
            <p className="text-[12px] text-text-muted max-w-[280px]">
              No unread alerts or background logs. New verifications will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {notifications.map((n) => {
              const isUnread = !n.read_at;
              return (
                <div
                  key={n.id}
                  onClick={() => isUnread && handleMarkAsRead(n.id)}
                  className={`group relative p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isUnread
                      ? 'bg-accent-indigo/[0.05] border-accent-indigo/30 hover:border-accent-indigo/50'
                      : 'bg-surface-card border-border-hairline hover:border-[#3A3A4A]'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 p-2 rounded-lg bg-surface-elevated border border-border-hairline shrink-0">
                      {getNotificationIcon(n.type)}
                    </div>

                    <div className="flex-1 min-w-0 pr-6">
                      <div className="flex items-center justify-between gap-2">
                        <h4
                          className={`text-[14px] leading-snug truncate ${
                            isUnread
                              ? 'font-medium text-text-primary'
                              : 'font-normal text-text-secondary'
                          }`}
                        >
                          {n.title}
                        </h4>
                        <span className="font-mono text-[10px] text-text-muted whitespace-nowrap shrink-0">
                          {formatTimestamp(n.created_at)}
                        </span>
                      </div>

                      {n.body && (
                        <p className="text-[12px] text-text-muted leading-relaxed mt-1 line-clamp-2">
                          {n.body}
                        </p>
                      )}

                      {n.link_url && (
                        <div className="mt-2.5">
                          <Link
                            to={n.link_url}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 font-mono text-[11px] text-accent-indigo hover:underline"
                          >
                            <span>Open details</span>
                            <ExternalLink className="w-3 h-3" />
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Dismiss button on hover */}
                    <button
                      onClick={(e) => handleDelete(e, n.id)}
                      title="Dismiss notification"
                      className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-surface-elevated text-text-muted hover:text-status-alert transition-all cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Clear all footer button */}
            <div className="pt-6 flex justify-center">
              <button
                onClick={handleClearAll}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono text-text-muted hover:text-status-alert transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear all notifications</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};
export default AlertsPage;
