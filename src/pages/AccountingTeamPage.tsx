import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { AccountingServicesSection } from '../components/AccountingServicesSection';
import { WhyCalverisSection } from '../components/WhyCalverisSection';
import { CapacityCTASection } from '../components/CapacityCTASection';

interface AccountingTeamPageProps {
  onNavigate: (path: string) => void;
}

export const AccountingTeamPage: React.FC<AccountingTeamPageProps> = ({ onNavigate }) => {
  return (
    <main>
      <PageHeader
        eyebrow="Accounting outsourcing"
        title="Your accounting workload. Expert support."
        description="Build capacity across bookkeeping, year-end accounts, management reporting, VAT, tax preparation and payroll support. Our professionals work within your systems, with clear handovers and agreed review responsibilities."
      />
      <AccountingServicesSection onNavigate={onNavigate} showExtendedDetails={true} />
      <WhyCalverisSection />
      <CapacityCTASection onNavigate={onNavigate} />
    </main>
  );
};

