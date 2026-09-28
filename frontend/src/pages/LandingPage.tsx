import React, { useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/landing/Hero';
import { ProductShowcase } from '../components/landing/ProductShowcase';
import { WhichAIForWhat } from '../components/landing/WhichAIForWhat';
import { ModelsDirectorySection } from '../components/landing/ModelsDirectorySection';
import { VerificationEngine } from '../components/landing/VerificationEngine';
import { FeedPreview } from '../components/landing/FeedPreview';
import { HowItWorks } from '../components/landing/HowItWorks';
import { StatsStrip } from '../components/landing/StatsStrip';
import { Footer } from '../components/layout/Footer';

export const LandingPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Sift — Daily Intelligence for Builders';
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-surface-base text-text-primary">
      <Navbar />
      <main className="w-full pt-[72px] bg-surface-base">
        <div className="flex flex-col w-full">
          <Hero />
          <ProductShowcase />
          <WhichAIForWhat />
          <ModelsDirectorySection />
          <VerificationEngine />
          <FeedPreview />
          <HowItWorks />
          <StatsStrip />
        </div>
      </main>
      <Footer />
    </div>
  );
};
