import React from 'react';
import { accountingServices } from '../data/siteData';
import { ArrowUpRight } from 'lucide-react';

interface AccountingServicesProps {
  onNavigate?: (path: string) => void;
  showExtendedDetails?: boolean;
}

export const AccountingServicesSection: React.FC<AccountingServicesProps> = ({
  onNavigate,
  showExtendedDetails = false,
}) => {
  return (
    <section className="border-b border-hairline bg-background py-16 lg:py-24">
      <div className="shell">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="eyebrow flex items-center gap-3 text-accent font-semibold">
            <span aria-hidden="true" className="inline-block size-[6px] rotate-45 bg-accent" />
            <span>Accounting capacity</span>
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground mt-8 leading-[1.1]">
            More than audit capacity.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-foreground/80 font-light leading-relaxed max-w-2xl">
            Your firm's workload doesn't stop at audit. Calveris also provides ACCA-qualified and experienced accounting professionals to support your wider delivery team.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="mt-16 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3 border border-hairline shadow-md">
          {accountingServices.map((service) => (
            <div
              key={service.id}
              className="group relative bg-card p-8 lg:p-10 transition-colors duration-300 hover:bg-[var(--secondary)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="font-mono text-xs font-bold text-accent tracking-[0.2em]">{service.number}</span>
                  <ArrowUpRight className="size-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <h3 className="font-display text-2xl font-normal text-foreground mt-8 mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-foreground/75 leading-relaxed font-light">
                  {service.description}
                </p>

                {showExtendedDetails && (
                  <ul className="mt-6 pt-6 border-t border-hairline space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="text-xs text-foreground/75 flex items-center gap-2 font-light">
                        <span className="size-1 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {onNavigate && (
                <div className="mt-8 pt-4 border-t border-hairline">
                  <button
                    onClick={() => onNavigate('/contact')}
                    className="text-xs uppercase tracking-widest text-accent font-semibold flex items-center gap-1 group-hover:underline"
                  >
                    <span>Request Team</span>
                    <span>↗</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {onNavigate && (
          <div className="mt-14 text-center">
            <button
              onClick={() => onNavigate('/accounting-team')}
              className="inline-flex items-center gap-2 border border-accent bg-transparent text-accent px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] hover:bg-accent hover:text-accent-foreground transition-all rounded-sm shadow-sm"
            >
              <span>Explore Accounting Support</span>
              <ArrowUpRight className="size-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
