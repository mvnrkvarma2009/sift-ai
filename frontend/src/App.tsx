import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider';
import { AuthProvider } from './context/AuthContext';
import { SmoothScroll } from './components/common/SmoothScroll';
import { AppRouter } from './routes/AppRouter';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <SmoothScroll>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </SmoothScroll>
      </AuthProvider>
    </ThemeProvider>
  );
}
