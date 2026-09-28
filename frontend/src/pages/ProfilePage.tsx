import React, { useState, useEffect } from 'react';
import { Layout } from '../components/layout/Layout';
import { useAuth } from '../hooks/useAuth';
import { ThemeToggle } from '../components/brand/ThemeToggle';
import { dashboardApi } from '../lib/api';
import { User, LogOut, CheckCircle2, Calendar, FileText, CheckCheck, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ProfilePage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState<any>(null);
  const [loadingStats, setLoadingStats] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoadingStats(true);
        const data = await dashboardApi.getStats();
        setStats(data);
      } catch (err) {
        console.error('Failed to load profile stats:', err);
      } finally {
        setLoadingStats(false);
      }
    };
    fetchStats();
  }, []);

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

  const displayUserId = user?.id || '00000000-0000-0000-0000-000000000001';

  const memberSince = user?.created_at
    ? new Date(user.created_at).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
      })
    : 'September 2026';

  return (
    <Layout showSidebar>
      <div className="p-6 lg:p-10 max-w-3xl mx-auto w-full space-y-8">
        <div>
          <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">
            ACCOUNT PROFILE
          </span>
          <h1 className="mt-2 text-[32px] font-semibold text-text-primary tracking-tight">
            User Settings & Preferences
          </h1>
        </div>

        {/* User Identity Card */}
        <div className="p-6 rounded-2xl bg-surface-card border border-border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-surface-elevated border border-border-hairline flex items-center justify-center text-text-primary font-mono text-[20px] font-semibold">
              {initials}
            </div>
            <div>
              <h2 className="text-[20px] font-medium text-text-primary">
                {user?.name || 'Builder'}
              </h2>
              <p className="text-[13px] text-text-muted font-mono">{user?.email || 'builder@sift.dev'}</p>
              <div className="mt-2 flex items-center gap-2 text-text-muted font-mono text-[11px]">
                <Calendar className="w-3.5 h-3.5 text-text-muted" />
                <span>Member since {memberSince}</span>
              </div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-border-hairline bg-surface-elevated text-status-alert hover:bg-status-alert/10 transition-colors font-mono text-[12px] cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign out</span>
          </button>
        </div>

        {/* Real Activity & Usage Counts from GET /api/dashboard/stats */}
        <div className="p-6 rounded-2xl bg-surface-card border border-border-hairline space-y-4">
          <h3 className="text-[16px] font-medium text-text-primary">Activity</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            <div className="p-4 rounded-xl bg-surface-elevated border border-border-hairline">
              <div className="flex items-center gap-2 text-text-muted text-[11px] font-mono uppercase tracking-wider mb-1.5">
                <FileText className="w-3.5 h-3.5 text-accent-indigo" />
                <span>Total Queries</span>
              </div>
              <p className="text-[22px] font-mono font-semibold text-text-primary">
                {loadingStats ? '—' : stats?.total_queries ?? 0}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-elevated border border-border-hairline">
              <div className="flex items-center gap-2 text-text-muted text-[11px] font-mono uppercase tracking-wider mb-1.5">
                <CheckCheck className="w-3.5 h-3.5 text-status-success" />
                <span>Tools Verified</span>
              </div>
              <p className="text-[22px] font-mono font-semibold text-text-primary">
                {loadingStats ? '—' : stats?.tools_verified ?? 0}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-elevated border border-border-hairline">
              <div className="flex items-center gap-2 text-text-muted text-[11px] font-mono uppercase tracking-wider mb-1.5">
                <Layers className="w-3.5 h-3.5 text-accent-copper" />
                <span>Audit Entries</span>
              </div>
              <p className="text-[22px] font-mono font-semibold text-text-primary">
                {loadingStats ? '—' : stats?.audit_entries ?? 0}
              </p>
            </div>
          </div>
        </div>

        {/* Display Settings */}
        <div className="p-6 rounded-2xl bg-surface-card border border-border-hairline space-y-4">
          <h3 className="text-[16px] font-medium text-text-primary">Appearance</h3>
          <div className="flex items-center justify-between pt-2">
            <div>
              <p className="text-[14px] text-text-primary">Theme</p>
              <p className="text-[12px] text-text-muted">
                Toggle between tailored dark and light themes.
              </p>
            </div>
            <ThemeToggle />
          </div>
        </div>

        {/* Security Section: 2FA coming soon, active sessions, delete account */}
        <div className="p-6 rounded-2xl bg-surface-card border border-border-hairline space-y-5">
          <h3 className="text-[16px] font-medium text-text-primary">Security</h3>
          
          {/* 2FA */}
          <div className="flex items-center justify-between py-2 border-b border-border-hairline">
            <div>
              <p className="text-[14px] text-text-primary">Two-Factor Authentication (2FA)</p>
              <p className="text-[12px] text-text-muted">Enhance account security with TOTP authentication apps.</p>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-accent-indigo/10 text-accent-indigo border border-accent-indigo/20">
              Coming soon
            </span>
          </div>

          {/* Active Sessions */}
          <div className="flex items-center justify-between py-2 border-b border-border-hairline">
            <div>
              <p className="text-[14px] text-text-primary">Active Sessions</p>
              <p className="text-[12px] text-text-muted">1 active session (Current device)</p>
            </div>
            <span className="font-mono text-[11px] text-status-success flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-status-success animate-pulse" />
              Active
            </span>
          </div>

          {/* Delete Account */}
          <div className="flex items-center justify-between pt-1">
            <div>
              <p className="text-[14px] text-status-alert">Delete Account</p>
              <p className="text-[12px] text-text-muted">Permanently erase account data, saved queries, and alert history.</p>
            </div>
            <button
              type="button"
              onClick={() => {
                if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
                  handleLogout();
                }
              }}
              className="px-3.5 py-1.5 rounded-lg border border-status-alert/30 text-status-alert hover:bg-status-alert/10 transition-colors text-[12px] font-mono cursor-pointer"
            >
              Delete account
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ProfilePage;
