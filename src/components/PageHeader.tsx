import React from 'react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ eyebrow, title, description }) => {
  return (
    <section className="bg-ink pb-20 pt-36 lg:pb-24 lg:pt-40 text-ink-foreground border-b border-hairline-light relative overflow-hidden">
      <div className="shell relative z-10">
        <div className="max-w-3xl">
          <p className="eyebrow flex items-center gap-3 text-ink-foreground/60 mb-6">
            <span aria-hidden="true" className="inline-block size-[6px] rotate-45 bg-accent" />
            <span>{eyebrow}</span>
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.08] text-white">
            {title}
          </h1>
          <p className="mt-6 text-base sm:text-lg text-ink-foreground/75 font-light leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

