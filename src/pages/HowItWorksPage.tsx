import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ProcessStepsSection } from '../components/ProcessStepsSection';
import { PromiseSection } from '../components/PromiseSection';
import { CapacityCTASection } from '../components/CapacityCTASection';

interface HowItWorksPageProps {
  onNavigate: (path: string) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate }) => {
  return (
    <main>
      <PageHeader
        eyebrow="How it works"
        title="From brief to embedded in four steps."
        description="A considered start makes delivery smoother. Together we agree the scope, people, confidentiality arrangements, system access and review process before work begins."
      />
      <ProcessStepsSection showFullDetails={true} />
      <PromiseSection />
      <CapacityCTASection onNavigate={onNavigate} />
    </main>
  );
};

