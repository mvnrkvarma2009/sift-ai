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

  const [user, setUser] = useState<User | null>(null);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('sift_jwt');
    localStorage.removeItem('user');
    localStorage.removeItem('sift_user');
    localStorage.removeItem('sift_uid');
    localStorage.removeItem('sift_saved_items');
    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    if (token) {
      authApi
        .getMe()
        .then((res) => {
          if (res?.user) {
            setUser(res.user);
          }
        })
        .catch((err) => {
          console.warn('[AUTH] Session verification notice:', err?.message || err);
        });
    } else {
      setUser(null);
    }
  }, [token]);

  useEffect(() => {
    const handleStorageChange = () => {
      const currentToken = localStorage.getItem('sift_jwt') || localStorage.getItem('token');
      setToken(currentToken);
      if (!currentToken) {
        setUser(null);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const login = async (email: string, password?: string): Promise<boolean> => {
    const res = await authApi.login(email, password || 'Password123!');
    if (res && res.token) {
      localStorage.setItem('sift_jwt', res.token);
      setToken(res.token);
      setUser(res.user || null);
      return true;
    }
    throw new Error('Authentication failed: No token returned');
  };

  const register = async (name: string, email: string, password?: string): Promise<boolean> => {
    const res = await authApi.register(name, email, password || 'Password123!');
    if (res && res.token) {
      localStorage.setItem('sift_jwt', res.token);
      setToken(res.token);
      setUser(res.user || null);
      return true;
    }
    throw new Error('Registration failed: No token returned');
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
