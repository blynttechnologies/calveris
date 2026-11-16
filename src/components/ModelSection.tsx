import React from 'react';
import { Check } from 'lucide-react';
import { modelComparison } from '../data/siteData';

export const ModelSection: React.FC = () => {
  return (
    <section className="bg-vector border-b border-hairline bg-background py-16 lg:py-24">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left Column: Heading & Theme */}
        <div className="lg:col-span-6">
          <p className="eyebrow flex items-center gap-3 text-accent font-semibold">
            <span aria-hidden="true" className="inline-block size-[6px] rotate-45 bg-accent" />
            <span>The model</span>
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground mt-8 leading-[1.1]">
            You provide the client. <br />
            <span className="italic font-light text-accent">We provide the capacity.</span>
          </h2>
          <div className="mt-8 h-px w-2/3 bg-hairline" />

          {/* Core Pills */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {['Your client.', 'Your relationship.', 'Your control.', 'Our people.'].map((pill, idx) => (
              <span
                key={idx}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider ${
                  idx === 3
                    ? 'bg-accent text-accent-foreground font-bold shadow-sm'
                    : 'bg-card text-foreground border border-hairline'
                }`}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Narrative & Clear Division of Responsibility */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <p className="text-base sm:text-lg text-foreground/80 font-light leading-relaxed">
            Finding experienced Audit Seniors is difficult. Finding them when you actually need them is even harder. Calveris helps UK accountancy firms strengthen their existing teams with experienced audit and accounting professionals.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 pt-8 border-t border-hairline">
            {/* Appointing Firm Retains */}
            <div className="bg-card p-6 border border-hairline">
              <h4 className="eyebrow text-xs text-foreground/70 mb-4 tracking-wider">
                Your Firm Retains
              </h4>
              <ul className="space-y-3">
                {modelComparison.yourFirm.map((item, i) => (
                  <li key={i} className="text-xs text-foreground/80 flex items-start gap-2.5 font-light">
                    <span className="size-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Calveris Delivers */}
            <div className="bg-card p-6 border border-accent/40 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-bl-full pointer-events-none" />
              <h4 className="eyebrow text-xs text-accent mb-4 tracking-wider">
                Calveris Delivers
              </h4>
              <ul className="space-y-3">
                {modelComparison.calveris.map((item, i) => (
                  <li key={i} className="text-xs text-foreground/80 flex items-start gap-2.5 font-light">
                    <Check className="size-3.5 text-accent mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
