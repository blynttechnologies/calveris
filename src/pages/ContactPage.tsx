import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ContactForm } from '../components/ContactForm';
import { PromiseSection } from '../components/PromiseSection';

export const ContactPage: React.FC = () => {
  return (
    <main>
      <PageHeader
        eyebrow="Contact"
        title="Let’s build your support team."
        description="Tell us the professional your firm needs — Audit Junior to Audit Manager or ACCA-qualified accountant — and speak directly to a Calveris founder."
      />
      <section className="border-b border-hairline bg-background py-20 lg:py-28">
        <div className="shell">
          <ContactForm />
        </div>
      </section>
      <PromiseSection />
    </main>
  );
};

