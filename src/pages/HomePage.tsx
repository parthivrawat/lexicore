import React from 'react';
import { AppShell } from '@/components/shared/AppShell';
import { LearningTips } from '@/components/features';
import { HeroSection } from '@/components/features/HomePage/HeroSection';
import { StatisticsDashboard } from '@/components/features/HomePage/StatisticsDashboard';
import { QuickSearchBar } from '@/components/features/HomePage/QuickSearchBar';
import { FeaturedWord } from '@/components/features/HomePage/FeaturedWord';
import { FeatureCards } from '@/components/features/HomePage/FeatureCards';
import { CategoryQuickAccess } from '@/components/features/HomePage/CategoryQuickAccess';
import { SampleContentPreview } from '@/components/features/HomePage/SampleContentPreview';
import { AboutSection } from '@/components/features/HomePage/AboutSection';
import { HOME_PAGE_LEARNING_TIPS } from '@/constants';

const HomePage: React.FC = () => {
  return (
    <AppShell>
      <div className="space-y-12">
        <HeroSection />
        <QuickSearchBar />
        <StatisticsDashboard />
        <FeaturedWord />
        <FeatureCards />
        <CategoryQuickAccess />
        <SampleContentPreview />
        <div className="animate-slide-up" style={{ animationDelay: '0.35s' }}>
          <LearningTips tips={HOME_PAGE_LEARNING_TIPS} theme="amber" />
        </div>
        <AboutSection />
      </div>
    </AppShell>
  );
};

export default HomePage;
