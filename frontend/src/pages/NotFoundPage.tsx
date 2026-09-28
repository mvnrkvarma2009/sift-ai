import React from 'react';
import { Link } from 'react-router-dom';
import { SiftLogo } from '../components/brand/SiftLogo';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface-base flex flex-col items-center justify-center p-6 text-center">
      <SiftLogo size={44} />
      <span className="mt-6 font-mono text-[12px] text-text-muted tracking-widest uppercase">
        404 ERROR
      </span>
      <h1 className="mt-2 text-[36px] font-serif font-normal text-text-primary tracking-tight">
        Page Not Found
      </h1>
      <p className="mt-3 text-[15px] text-text-secondary max-w-md">
        The signal could not be located at this endpoint. It may have been moved, archived, or is unindexed.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-indigo text-white text-[13px] font-medium hover:bg-accent-indigo/90 transition-colors shadow-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to home</span>
      </Link>
    </div>
  );
};
