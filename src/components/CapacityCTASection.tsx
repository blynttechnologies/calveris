import React from 'react';
import { ArrowUpRight, Phone, Mail } from 'lucide-react';
import { siteConfig } from '../data/siteData';

interface CapacityCTAProps {
  onNavigate: (path: string) => void;
}

export const CapacityCTASection: React.FC<CapacityCTAProps> = ({ onNavigate }) => {
  return (
    <section className="dark-zone bg-[var(--deep)] py-16 lg:py-24 text-foreground border-b border-hairline relative">
      <div className="shell text-center">
        <div className="max-w-2xl mx-auto">
          <p className="eyebrow inline-flex items-center gap-3 text-accent mb-6 font-semibold">
            <span aria-hidden="true" className="inline-block size-[6px] rotate-45 bg-accent" />
            <span>Next step</span>
          </p>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground leading-tight">
            Need more capacity?
          </h2>

          <p className="mt-6 text-base sm:text-lg text-foreground/80 font-light leading-relaxed">
            Tell us the professional you need. We'll help you build the team.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2.5 bg-accent text-accent-foreground px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] shadow-xl hover:bg-gold-hover transition-all hover:scale-[1.02] rounded-sm"
            >
              <span>Build Your Team</span>
              <ArrowUpRight className="size-4" />
            </button>

            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center gap-2 border border-hairline bg-transparent text-foreground px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] hover:border-accent hover:text-accent hover:bg-accent/10 transition-all rounded-sm"
            >
              <Phone className="size-3.5 text-accent" />
              <span>Speak to a Founder</span>
            </a>
          </div>

          {/* Direct lines */}
          <div className="mt-12 pt-8 border-t border-hairline flex flex-wrap items-center justify-center gap-8 text-xs text-foreground/60">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="hover:text-accent flex items-center gap-2 transition-colors"
            >
              <Mail className="size-3.5 text-accent" />
              <span>{siteConfig.contact.email}</span>
            </a>
            <span className="hidden sm:inline opacity-30">•</span>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="hover:text-accent flex items-center gap-2 transition-colors"
            >
              <Phone className="size-3.5 text-accent" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
