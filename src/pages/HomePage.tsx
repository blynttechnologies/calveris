import React from 'react';
import { Hero } from '../components/Hero';
import { ModelSection } from '../components/ModelSection';
import { ProblemSection } from '../components/ProblemSection';
import { AuditRolesSection } from '../components/AuditRolesSection';
import { AccountingServicesSection } from '../components/AccountingServicesSection';
import { PromiseSection } from '../components/PromiseSection';
import { ProcessStepsSection } from '../components/ProcessStepsSection';
import { WhyCalverisSection } from '../components/WhyCalverisSection';
import { FounderSection } from '../components/FounderSection';
import { FounderQuoteSection } from '../components/FounderQuoteSection';
import { CapacityCTASection } from '../components/CapacityCTASection';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <main>
      <Hero onNavigate={onNavigate} />
      <ModelSection />
      <ProblemSection />
      <AuditRolesSection onNavigate={onNavigate} />
      <AccountingServicesSection onNavigate={onNavigate} />
      <PromiseSection />
      <ProcessStepsSection />
      <WhyCalverisSection />
      <FounderSection />
      <FounderQuoteSection />
      <CapacityCTASection onNavigate={onNavigate} />
    </main>
  );
};



