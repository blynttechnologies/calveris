import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { FounderSection } from '../components/FounderSection';
import { ModelSection } from '../components/ModelSection';
import { FounderQuoteSection } from '../components/FounderQuoteSection';
import { CapacityCTASection } from '../components/CapacityCTASection';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <main>
      <PageHeader
        eyebrow="About us"
        title="Meet the founder behind Calveris."
        description="Calveris Limited was founded by Sri Sivalingam, an ACCA-qualified professional with audit, accounting and real business experience in the UK."
      />
      <FounderSection />
      <ModelSection />
      <FounderQuoteSection />
      <CapacityCTASection onNavigate={onNavigate} />
    </main>
  );
};

