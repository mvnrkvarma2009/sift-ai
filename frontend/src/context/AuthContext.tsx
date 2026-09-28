import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authApi } from '../lib/api';

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
  login: (email: string, password?: string) => Promise<boolean>;
  register: (name: string, email: string, password?: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem('sift_jwt');
  });

  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('sift_user');
    if (savedUser) {
      try {
        return JSON.parse(savedUser);
      } catch {
        return null;
      }
    }
    // Default authenticated builder user if token exists
    if (localStorage.getItem('sift_jwt')) {
      const storedId = localStorage.getItem('sift_uid') || (typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : '00000000-0000-0000-0000-000000000001');
      return {
        id: storedId,
        name: 'Builder',
        email: 'builder@sift.dev',
      };
    }
    return null;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const currentToken = localStorage.getItem('sift_jwt');
      setToken(currentToken);
      const savedUser = localStorage.getItem('sift_user');
      if (savedUser) {
        try {
          setUser(JSON.parse(savedUser));
        } catch {
          setUser(null);
        }
      } else if (!currentToken) {
        setUser(null);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Demo auto-login: if no session exists, log in demo user against real backend
  useEffect(() => {
    const currentToken = localStorage.getItem('token') || localStorage.getItem('sift_jwt');
    if (!currentToken) {
      authApi.login('demo@sift.ai', 'demo1234')
        .then((res) => {
          if (res && res.token) {
            localStorage.setItem('token', res.token);
            localStorage.setItem('sift_jwt', res.token);
            localStorage.setItem('user', JSON.stringify(res.user));
            localStorage.setItem('sift_user', JSON.stringify(res.user));
            setToken(res.token);
            setUser(res.user);
          }
        })
        .catch((err) => {
          console.warn('[DEMO MODE] Auto-login error:', err.message);
        });
    }
  }, []);

  const login = async (email: string, password?: string): Promise<boolean> => {
    try {
      const res = await authApi.login(email, password || 'Password123!');
      if (res && res.token) {
        localStorage.setItem('token', res.token);
        localStorage.setItem('sift_jwt', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        localStorage.setItem('sift_user', JSON.stringify(res.user));
        setToken(res.token);
        setUser(res.user);
        return true;
      }
      return false;
    } catch (err: any) {
      console.warn('[AUTH] Login error:', err.message);
      return false;
    }
  };

  const register = async (name: string, email: string, password?: string): Promise<boolean> => {
    try {
      const res = await authApi.register(name, email, password || 'Password123!');
      if (res && res.token) {
        localStorage.setItem('token', res.token);
        localStorage.setItem('sift_jwt', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        localStorage.setItem('sift_user', JSON.stringify(res.user));
        setToken(res.token);
        setUser(res.user);
        return true;
      }
      return false;
    } catch (err: any) {
      console.warn('[AUTH] Register error:', err.message);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('sift_jwt');
    localStorage.removeItem('user');
    localStorage.removeItem('sift_user');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: Boolean(token),
        login,
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
