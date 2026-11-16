import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { AuditRolesSection } from '../components/AuditRolesSection';
import { ProcessStepsSection } from '../components/ProcessStepsSection';
import { CapacityCTASection } from '../components/CapacityCTASection';

interface AuditTeamPageProps {
  onNavigate: (path: string) => void;
}

export const AuditTeamPage: React.FC<AuditTeamPageProps> = ({ onNavigate }) => {
  return (
    <main>
      <PageHeader
        eyebrow="Specialist audit outsourcing"
        title="Your audit standards. Our backend support."
        description="From planning schedules and assigned testing to working papers and completion support, we work under your direction. Your firm retains the engagement, final review, audit opinion and signing responsibility."
      />
      <AuditRolesSection onNavigate={onNavigate} showExtendedDetails={true} />
      <ProcessStepsSection showFullDetails={true} />
      <CapacityCTASection onNavigate={onNavigate} />
    </main>
  );
};



