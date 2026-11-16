import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { WhyCalverisSection } from '../components/WhyCalverisSection';
import { ProblemSection } from '../components/ProblemSection';
import { PromiseSection } from '../components/PromiseSection';
import { CapacityCTASection } from '../components/CapacityCTASection';

interface WhyCalverisPageProps {
  onNavigate: (path: string) => void;
}

export const WhyCalverisPage: React.FC<WhyCalverisPageProps> = ({ onNavigate }) => {
  return (
    <main>
      <PageHeader
        eyebrow="Why Calveris"
        title="Professional expertise, flexible capacity."
        description="A founder-led delivery partnership built around your firm’s methodology, systems and review process."
      />
      <WhyCalverisSection />
      <ProblemSection />
      <PromiseSection />
      <CapacityCTASection onNavigate={onNavigate} />
    </main>
  );
};

