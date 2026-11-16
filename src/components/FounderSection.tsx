import React from 'react';
import { siteConfig } from '../data/siteData';
import { ArrowUpRight, Award, Briefcase } from 'lucide-react';

export const FounderSection: React.FC = () => {
  const { founder } = siteConfig;

  return (
    <section className="border-b border-hairline bg-background py-16 lg:py-24">
      <div className="shell">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="eyebrow flex items-center gap-3 text-accent font-semibold">
            <span aria-hidden="true" className="inline-block size-[6px] rotate-45 bg-accent" />
            <span>The founder</span>
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground mt-8 leading-[1.1] max-w-[20ch]">
            Meet the founder behind Calveris.
          </h2>
        </div>

        {/* Founder Card & Story Grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Photo Column */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden bg-card border border-hairline shadow-xl group rounded-sm">
              <img
                src={founder.image}
                alt={`${founder.name}, ${founder.title}`}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-[1.05]"
              />
              <div className="absolute bottom-0 inset-x-0 dark-zone bg-transparent bg-gradient-to-t from-[var(--deep)] via-[color-mix(in_srgb,var(--deep)_60%,transparent)] to-transparent p-6 text-foreground">
                <span className="eyebrow text-[0.7rem] tracking-[0.2em] text-accent font-bold uppercase">
                  Founder & Managing Director
                </span>
                <p className="font-display text-2xl font-normal mt-1 text-foreground">{founder.name}</p>
                <p className="text-xs text-foreground/80">{founder.title}</p>
              </div>
            </div>
          </div>

          {/* Bio & Details Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="eyebrow text-accent text-xs tracking-[0.2em] font-semibold">
                ACCA Qualified Professional
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-normal text-foreground mt-2">
                {founder.name}
              </h3>
              <p className="text-sm font-medium text-muted-foreground mt-1">
                {founder.title}
              </p>
            </div>

            <p className="text-base sm:text-lg text-foreground/85 font-light leading-relaxed">
              {founder.bio}
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-6 border-t border-hairline">
              <div className="flex items-start gap-3 p-4 bg-card border border-hairline rounded-sm">
                <Award className="size-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Top 10 UK Audit Background
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Rigorous standards and working paper discipline
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-card border border-hairline rounded-sm">
                <Briefcase className="size-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Commercial Business Owner
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Understands operational margin and client deadlines
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-accent bg-transparent px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-accent hover:bg-accent hover:text-accent-foreground transition-all rounded-sm shadow-sm"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
