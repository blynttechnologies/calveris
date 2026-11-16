import React from 'react';
import { Quote } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export const FounderQuoteSection: React.FC = () => {
  return (
    <section className="bg-[var(--surface)] py-16 lg:py-24 text-foreground border-b border-hairline relative overflow-hidden">
      <div className="shell relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow inline-flex items-center gap-3 text-accent mb-8 font-semibold">
            <span aria-hidden="true" className="inline-block size-[6px] rotate-45 bg-accent" />
            <span>Founder message</span>
          </p>

          <Quote className="size-10 text-accent mx-auto mb-8 opacity-90" />

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-foreground mb-8">
            Built by an accountant who understands the pressure.
          </h2>

          <div className="space-y-6 text-lg sm:text-xl font-light text-foreground/90 leading-relaxed font-display italic">
            <p className="text-2xl sm:text-3xl text-foreground font-normal not-italic">
              "I know what it is like when the audit portfolio grows faster than the team."
            </p>
            <p>
              "Calveris was created to give UK accountancy firms access to experienced professionals without compromising control, quality or client relationships."
            </p>
            <p className="text-accent not-italic font-sans text-base sm:text-lg font-semibold tracking-wide">
              We're not here to take your clients. We're here to help you serve more of them.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-hairline inline-block">
            <p className="font-display text-xl font-normal text-foreground">{siteConfig.founder.name}</p>
            <p className="text-xs uppercase tracking-widest text-accent mt-1 font-semibold">
              Founder • Calveris Limited
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
