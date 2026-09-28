import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import { useReducedMotion } from '../hooks/useReducedMotion';

import { LandingPage } from '../pages/LandingPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { DashboardPage } from '../pages/DashboardPage';
import { QueryPage } from '../pages/QueryPage';
import { ResultPage } from '../pages/ResultPage';
import { AuditPage } from '../pages/AuditPage';
import { ToolsPage } from '../pages/ToolsPage';
import { ToolsComparePage } from '../pages/ToolsComparePage';
import { SavedPage } from '../pages/SavedPage';
import { DiscoverPage } from '../pages/DiscoverPage';
import { ModelsPage } from '../pages/ModelsPage';
import { ModelsComparePage } from '../pages/ModelsComparePage';
import { ModelDetailPage } from '../pages/ModelDetailPage';
import { ProfilePage } from '../pages/ProfilePage';
import { AlertsPage } from '../pages/AlertsPage';
import { NotFoundPage } from '../pages/NotFoundPage';

// Protected Route Component: Redirects to /login if unauthenticated
export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const token = typeof window !== 'undefined' ? (localStorage.getItem('sift_jwt') || localStorage.getItem('token')) : null;

  if (!isAuthenticated && !token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

// Animated Page Wrapper for 0.3s fade transitions
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="w-full h-full flex flex-col flex-1"
    >
      {children}
    </motion.div>
  );
};

export const AppRouter: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <PageWrapper>
              <LandingPage />
            </PageWrapper>
          }
        />
        <Route
          path="/login"
          element={
            <PageWrapper>
              <LoginPage />
            </PageWrapper>
          }
        />
        <Route
          path="/register"
          element={
            <PageWrapper>
              <RegisterPage />
            </PageWrapper>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <PageWrapper>
                <DashboardPage />
              </PageWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/query"
          element={
            <ProtectedRoute>
              <PageWrapper>
                <QueryPage />
              </PageWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/result"
          element={
            <ProtectedRoute>
              <PageWrapper>
                <ResultPage />
              </PageWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/result/:id"
          element={
            <ProtectedRoute>
              <PageWrapper>
                <ResultPage />
              </PageWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/audit"
          element={
            <ProtectedRoute>
              <PageWrapper>
                <AuditPage />
              </PageWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/audit/:id"
          element={
            <ProtectedRoute>
              <PageWrapper>
                <AuditPage />
              </PageWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/alerts"
          element={
            <ProtectedRoute>
              <PageWrapper>
                <AlertsPage />
              </PageWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/tools"
          element={
            <ProtectedRoute>
              <PageWrapper>
                <ToolsPage />
              </PageWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/tools/compare"
          element={
            <ProtectedRoute>
              <PageWrapper>
                <ToolsComparePage />
              </PageWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/saved"
          element={
            <ProtectedRoute>
              <PageWrapper>
                <SavedPage />
              </PageWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/discover"
          element={
            <ProtectedRoute>
              <PageWrapper>
                <DiscoverPage />
              </PageWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/models"
          element={
            <PageWrapper>
              <ModelsPage />
            </PageWrapper>
          }
        />
        <Route
          path="/models/compare"
          element={
            <PageWrapper>
              <ModelsComparePage />
            </PageWrapper>
          }
        />
        <Route
          path="/models/:id"
          element={
            <PageWrapper>
              <ModelDetailPage />
            </PageWrapper>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <PageWrapper>
                <ProfilePage />
              </PageWrapper>
            </ProtectedRoute>
          }
        />

        {/* 404 Catch-All */}
        <Route
          path="*"
          element={
            <PageWrapper>
              <NotFoundPage />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};
