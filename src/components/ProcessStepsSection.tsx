import React from 'react';
import { processSteps } from '../data/siteData';
import { CheckCircle2 } from 'lucide-react';

interface ProcessStepsProps {
  showFullDetails?: boolean;
}

export const ProcessStepsSection: React.FC<ProcessStepsProps> = ({ showFullDetails = false }) => {
  return (
    <section className="bg-vector border-b border-hairline bg-[var(--surface)] py-16 lg:py-24">
      <div className="shell">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="eyebrow flex items-center gap-3 text-accent font-semibold">
            <span aria-hidden="true" className="inline-block size-[6px] rotate-45 bg-accent" />
            <span>How it works</span>
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground mt-8 leading-[1.1]">
            From brief to embedded in four steps.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-foreground/80 font-light leading-relaxed max-w-2xl">
            A considered start makes delivery smoother. Together we agree the scope, people, confidentiality arrangements, system access and review process before work begins.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col justify-between bg-card border border-hairline rounded-2xl p-7 shadow-sm card-lift group"
            >
              <div>
                <span className="font-mono text-accent text-sm font-bold tracking-[0.2em] block mb-6">
                  {step.number}
                </span>

                <h3 className="font-display text-2xl font-normal text-foreground mb-3 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm font-medium text-foreground/80 leading-snug mb-3">
                  {step.description}
                </p>

                {showFullDetails && (
                  <p className="text-xs text-foreground/60 leading-relaxed font-light mt-3 pt-3 border-t border-hairline">
                    {step.details}
                  </p>
                )}
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="size-3.5 text-accent" />
                <span>Agreed milestones</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
