import React from 'react';
import { auditRoles } from '../data/siteData';
import { ArrowRight, Check } from 'lucide-react';

interface AuditRolesProps {
  onNavigate?: (path: string) => void;
  showExtendedDetails?: boolean;
}

export const AuditRolesSection: React.FC<AuditRolesProps> = ({
  onNavigate,
  showExtendedDetails = false,
}) => {
  return (
    <section className="bg-[var(--surface)] py-16 lg:py-24 text-foreground border-b border-hairline relative">
      <div className="shell">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="eyebrow flex items-center gap-3 text-accent font-semibold">
            <span aria-hidden="true" className="inline-block size-[6px] rotate-45 bg-accent" />
            <span>Audit capacity</span>
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal mt-8 leading-[1.1] text-foreground">
            Add the audit experience your firm needs.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-foreground/80 font-light leading-relaxed max-w-2xl">
            Whether you need additional support during busy season or want to strengthen your team permanently, Calveris provides experienced audit professionals who work alongside your existing team.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {auditRoles.map((role) => (
            <div
              key={role.id}
              className="group relative flex flex-col justify-between border border-hairline bg-[var(--card)] p-8 transition-all duration-300 card-lift hover:bg-[var(--secondary)] rounded-sm shadow-md"
            >
              <div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="font-mono text-xs font-bold text-accent tracking-[0.2em]">{role.number}</span>
                  <ArrowRight className="size-4 text-accent transition-transform duration-300 group-hover:translate-x-1" />
                </div>

                <h3 className="font-display text-2xl font-normal text-foreground mt-8 mb-3 group-hover:text-accent transition-colors">
                  {role.title}
                </h3>

                <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-4">
                  {role.seniority}
                </p>

                <p className="text-sm text-foreground/75 leading-relaxed font-light">
                  {role.description}
                </p>

                {/* Extended responsibilities on subpage or detailed view */}
                {showExtendedDetails && (
                  <div className="mt-6 pt-6 border-t border-hairline">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                      Core Workflows:
                    </p>
                    <ul className="space-y-2">
                      {role.responsibilities.map((r, i) => (
                        <li key={i} className="text-xs text-foreground/75 flex items-start gap-2 font-light">
                          <Check className="size-3 text-accent shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {onNavigate && (
                <div className="mt-8 pt-4 border-t border-hairline">
                  <button
                    onClick={() => onNavigate('/contact')}
                    className="text-xs uppercase tracking-widest text-foreground/80 font-semibold group-hover:text-accent transition-colors flex items-center gap-1.5"
                  >
                    <span>Request Role</span>
                    <span aria-hidden="true">→</span>
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
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] shadow-lg hover:bg-gold-hover transition-all rounded-sm"
            >
              <span>Find Your Audit Professional</span>
              <ArrowRight className="size-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
