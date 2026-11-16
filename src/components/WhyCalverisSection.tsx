import React from 'react';
import { valueProps } from '../data/siteData';
import { Sparkles } from 'lucide-react';

export const WhyCalverisSection: React.FC = () => {
  return (
    <section className="border-b border-hairline bg-background py-16 lg:py-24">
      <div className="shell">
        {/* Header Grid */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow flex items-center gap-3 text-accent font-semibold">
              <span aria-hidden="true" className="inline-block size-[6px] rotate-45 bg-accent" />
              <span>Why Calveris</span>
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground mt-8 leading-[1.1] max-w-[16ch]">
              Professional expertise, flexible capacity.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-2">
            <p className="text-base sm:text-lg text-foreground/75 font-light leading-relaxed border-l-2 border-accent pl-5">
              A trusted delivery partner for firms that need people — not another provider to manage.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((prop) => (
            <div
              key={prop.number}
              className="bg-card border border-hairline p-8 transition-all duration-300 hover:border-accent hover:shadow-lg flex flex-col justify-between group rounded-sm"
            >
              <div>
                <span className="font-mono text-accent text-xs font-bold tracking-[0.2em] block mb-6">
                  {prop.number}
                </span>

                <h3 className="font-display text-2xl font-normal text-foreground mb-3 group-hover:text-accent transition-colors">
                  {prop.title}
                </h3>

                <p className="text-sm text-foreground/75 leading-relaxed font-light mb-6">
                  {prop.description}
                </p>
              </div>

              <div className="pt-4 border-t border-hairline flex items-center gap-2 text-xs font-semibold text-accent">
                <Sparkles className="size-3.5 shrink-0" />
                <span>{prop.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
