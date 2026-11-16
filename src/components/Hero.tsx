import React from 'react';
import { ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onNavigate: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-background text-foreground pt-28 pb-16">
      {/* Background Architectural Image with Mayfair Midnight Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}assets/hero-architecture.jpg`}
          alt="Modern British architecture symbolizing structure and precision"
          className="h-full w-full object-cover object-center opacity-[0.14] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-[color-mix(in_srgb,var(--background)_85%,transparent)] to-[color-mix(in_srgb,var(--background)_50%,transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-[color-mix(in_srgb,var(--background)_70%,transparent)]" />
      </div>

      <div className="shell relative z-10 py-12 lg:py-20">
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 border border-hairline bg-card px-3.5 py-1.5 mb-6 text-xs tracking-[0.18em] uppercase text-accent font-semibold rounded-sm">
            <span className="size-1.5 rotate-45 bg-accent" />
            <span>Your extended audit & accounting team — for UK firms</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-6xl lg:text-6xl font-normal tracking-tight text-foreground leading-[1.02]">
            Your audit team, <br />
            <span className="italic font-light text-accent/90">extended.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-foreground/85 font-light leading-relaxed max-w-2xl">
            Experienced audit and accounting professionals helping UK accountancy firms increase capacity, meet deadlines and grow — without the recruitment headache.
          </p>

          <p className="mt-4 text-sm sm:text-base text-foreground/65 leading-relaxed max-w-2xl font-light">
            From Audit Juniors to Audit Seniors and ACCA-qualified accounting professionals, Calveris gives your practice dedicated delivery capacity that works directly within your systems and methodology.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('/audit-team')}
              className="inline-flex items-center gap-2.5 bg-accent text-accent-foreground px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] shadow-lg hover:bg-gold-hover transition-all hover:translate-y-[-1px] rounded-sm"
            >
              <span>Explore Audit Support</span>
              <ArrowUpRight className="size-4" />
            </button>

            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 border border-hairline bg-transparent text-foreground px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] hover:border-accent hover:text-accent hover:bg-accent/10 transition-all rounded-sm"
            >
              <span>Speak with Sri (Founder)</span>
            </button>
          </div>

          {/* Trust points */}
          <div className="mt-12 pt-8 border-t border-hairline grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-2.5 text-xs text-foreground/80">
              <ShieldCheck className="size-4 text-accent shrink-0" />
              <span>You retain signing authority</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-foreground/80">
              <CheckCircle2 className="size-4 text-accent shrink-0" />
              <span>Embedded in your software</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-foreground/80">
              <span className="size-1.5 rotate-45 bg-accent shrink-0" />
              <span>ACCA-qualified founder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
