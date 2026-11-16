import React from 'react';
import { capacityPressures } from '../data/siteData';
import { AlertCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="border-b border-hairline bg-background py-16 lg:py-24">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
        {/* Left Column */}
        <div className="lg:col-span-5">
          <p className="eyebrow flex items-center gap-3 text-accent font-semibold">
            <span aria-hidden="true" className="inline-block size-[6px] rotate-45 bg-accent" />
            <span>The real problem</span>
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground mt-8 leading-[1.1] max-w-[14ch]">
            Good Audit Seniors are hard to find.
          </h2>
          <p className="mt-8 font-display text-2xl font-light italic text-accent/80">
            There is another way to build capacity.
          </p>
          <div className="mt-8 text-sm text-foreground/60 leading-relaxed max-w-md font-light">
            The traditional UK recruitment cycle takes 3–6 months with high agency fees and zero delivery guarantees during peak deadline windows.
          </div>
        </div>

        {/* Right Column: Capacity Pressures List */}
        <div className="lg:col-span-7 lg:pt-4">
          <p className="eyebrow text-muted-foreground mb-6">
            Common capacity pressures include:
          </p>
          <div className="border-t border-hairline divide-y divide-hairline">
            {capacityPressures.map((pressure, idx) => (
              <div
                key={idx}
                className="group flex items-center justify-between py-5 transition-colors hover:bg-card px-3 rounded-sm"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs font-bold text-accent">
                    0{idx + 1}
                  </span>
                  <span className="text-base sm:text-lg font-light text-foreground group-hover:text-accent transition-colors">
                    {pressure}
                  </span>
                </div>
                <AlertCircle className="size-4 text-muted-foreground/40 group-hover:text-accent transition-colors shrink-0 ml-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
