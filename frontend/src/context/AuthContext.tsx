import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authApi } from '../lib/api';
import { supabase, signInWithGoogle } from '../lib/supabaseClient';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  created_at?: string;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  authLoading: boolean;
  login: (email: string, password?: string) => Promise<boolean>;
  loginWithGoogle: () => Promise<void>;
  continueAsGuest: () => void;
  register: (name: string, email: string, password?: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem('sift_jwt');
  });

  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('sift_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return null;
      }
    }
    return null;
  });

  const [authLoading, setAuthLoading] = useState<boolean>(true);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('sift_jwt');
    localStorage.removeItem('user');
    localStorage.removeItem('sift_user');
    localStorage.removeItem('sift_uid');
    localStorage.removeItem('sift_saved_items');
    setToken(null);
    setUser(null);
    supabase.auth.signOut().catch(() => {});
  };

  // Sync Supabase Auth session (for Google OAuth redirects and active sessions)
  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        if (session?.user) {
          const supaUser: User = {
            id: session.user.id,
            email: session.user.email || '',
            name:
              session.user.user_metadata?.full_name ||
              session.user.user_metadata?.name ||
              session.user.email?.split('@')[0] ||
              'User',
            avatar: session.user.user_metadata?.avatar_url || session.user.user_metadata?.picture,
          };
          setUser(supaUser);
          setToken(session.access_token);
          localStorage.setItem('sift_jwt', session.access_token);
          localStorage.setItem('sift_user', JSON.stringify(supaUser));
        }
      })
      .catch((err) => {
        console.warn('[AUTH] Error reading initial session:', err);
      })
      .finally(() => {
        setAuthLoading(false);
      });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const supaUser: User = {
          id: session.user.id,
          email: session.user.email || '',
          name:
            session.user.user_metadata?.full_name ||
            session.user.user_metadata?.name ||
            session.user.email?.split('@')[0] ||
            'User',
          avatar: session.user.user_metadata?.avatar_url || session.user.user_metadata?.picture,
        };
        setUser(supaUser);
        setToken(session.access_token);
        localStorage.setItem('sift_jwt', session.access_token);
        localStorage.setItem('sift_user', JSON.stringify(supaUser));
      } else if (_event === 'SIGNED_OUT') {
        setUser(null);
        setToken(null);
        localStorage.removeItem('sift_jwt');
        localStorage.removeItem('sift_user');
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // Validate session against API if token exists and user not yet populated
  useEffect(() => {
    if (token && !user) {
      authApi
        .getMe()
        .then((res) => {
          if (res?.user) {
            setUser(res.user);
            localStorage.setItem('sift_user', JSON.stringify(res.user));
          }
        })
        .catch((err) => {
          console.warn('[AUTH] Session verification notice:', err?.message || err);
        });
    }
  }, [token, user]);

  const loginWithGoogle = async (): Promise<void> => {
    await signInWithGoogle();
  };

  const continueAsGuest = () => {
    const guestUser: User = {
      id: '00000000-0000-0000-0000-000000000003',
      name: 'Guest Explorer',
      email: 'guest@sift.dev',
    };
    const guestToken = 'sift_guest_session_token';
    localStorage.setItem('sift_jwt', guestToken);
    localStorage.setItem('sift_user', JSON.stringify(guestUser));
    setToken(guestToken);
    setUser(guestUser);
  };

  // Manual Email & Password login: Supports Supabase Auth directly + backend API
  const login = async (email: string, password?: string): Promise<boolean> => {
    const pwd = password || 'Password123!';

    // 1. Direct Supabase Auth login
    const { data: supaData, error: supaError } = await supabase.auth.signInWithPassword({
      email,
      password: pwd,
    });

    if (!supaError && supaData?.session) {
      const supaUser: User = {
        id: supaData.session.user.id,
        email: supaData.session.user.email || email,
        name:
          supaData.session.user.user_metadata?.full_name ||
          supaData.session.user.user_metadata?.name ||
          email.split('@')[0],
        avatar: supaData.session.user.user_metadata?.avatar_url,
      };
      localStorage.setItem('sift_jwt', supaData.session.access_token);
      localStorage.setItem('sift_user', JSON.stringify(supaUser));
      setToken(supaData.session.access_token);
      setUser(supaUser);
      return true;
    }

    // 2. Also try custom backend API if available
    try {
      const res = await authApi.login(email, pwd);
      if (res && res.token) {
        localStorage.setItem('sift_jwt', res.token);
        localStorage.setItem('sift_user', JSON.stringify(res.user));
        setToken(res.token);
        setUser(res.user || null);
        return true;
      }
    } catch {
      // Backend is optional when Supabase is primary
    }

    // 3. Fallback for demo credentials
    if (email.toLowerCase().includes('demo') || email.toLowerCase() === 'builder@sift.dev') {
      const demoUser: User = {
        id: 'b5f20b41-2504-4a47-9a16-c626aab39d1d',
        name: 'Demo User',
        email: email,
      };
      const demoToken = 'sift_demo_session_token';
      localStorage.setItem('sift_jwt', demoToken);
      localStorage.setItem('sift_user', JSON.stringify(demoUser));
      setToken(demoToken);
      setUser(demoUser);
      return true;
    }

    if (supaError) {
      throw new Error(supaError.message || 'Invalid email or password.');
    }
    throw new Error('Invalid email or password. Please verify your credentials.');
  };

  // Manual Email & Password registration
  const register = async (name: string, email: string, password?: string): Promise<boolean> => {
    const pwd = password || 'Password123!';

    // 1. Direct Supabase Auth registration
    const { data: supaData, error: supaError } = await supabase.auth.signUp({
      email,
      password: pwd,
      options: {
        data: { name, full_name: name },
      },
    });

    if (!supaError && supaData?.user) {
      const supaUser: User = {
        id: supaData.user.id,
        email: supaData.user.email || email,
        name: name,
      };
      const authToken = supaData.session?.access_token || 'sift_session_' + supaData.user.id;
      localStorage.setItem('sift_jwt', authToken);
      localStorage.setItem('sift_user', JSON.stringify(supaUser));
      setToken(authToken);
      setUser(supaUser);
      return true;
    }

    // 2. Fallback to API registration
    try {
      const res = await authApi.register(name, email, pwd);
      if (res && res.token) {
        localStorage.setItem('sift_jwt', res.token);
        localStorage.setItem('sift_user', JSON.stringify(res.user));
        setToken(res.token);
        setUser(res.user || null);
        return true;
      }
    } catch {
      // ignore
    }

    if (supaError) {
      throw new Error(supaError.message || 'Registration failed.');
    }
    throw new Error('Registration failed.');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: Boolean(token),
        authLoading,
        login,
        loginWithGoogle,
        continueAsGuest,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default AuthContext;
