import React from 'react';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Users, BadgeCheck } from 'lucide-react';

interface HeroProps {
  onNavigate: (path: string) => void;
}

const stats = [
  { v: '4', l: 'Audit roles, Junior to Manager' },
  { v: '6', l: 'Accounting services' },
  { v: 'ACCA', l: 'Qualified founder' },
  { v: '100%', l: 'Your clients stay yours' },
];

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <>
      <section className="relative overflow-hidden bg-background pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div aria-hidden="true" className="absolute -top-32 -right-32 size-[34rem] rounded-full bg-accent/10 blur-3xl" />
        <div className="shell relative grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-card px-4 py-1.5 text-xs font-semibold text-accent">
              <BadgeCheck className="size-4" /> Audit &amp; accounting support for UK firms
            </span>
            <h1 className="font-display mt-6 text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-foreground">
              Your audit team, <span className="text-accent">extended.</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed max-w-xl">
              Experienced audit and accounting professionals who work inside your systems, so your firm can add capacity, meet deadlines and grow — without the recruitment headache.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('/audit-team')}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg hover:bg-gold-hover hover:-translate-y-0.5"
              >
                Explore audit support <ArrowUpRight className="size-4" />
              </button>
              <button
                onClick={() => onNavigate('/contact')}
                className="inline-flex items-center rounded-xl border border-hairline-light bg-card px-7 py-3.5 text-sm font-semibold text-foreground hover:border-accent hover:text-accent"
              >
                Speak with Sri
              </button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/70">
              <li className="flex items-center gap-2"><ShieldCheck className="size-4 text-accent" />You keep signing authority</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-accent" />Works in your software</li>
            </ul>
          </div>

          <div className="relative lg:col-span-6">
            <div className="overflow-hidden rounded-3xl shadow-[0_30px_70px_rgba(20,32,28,0.22)] aspect-[4/3]">
              <img
                src={`${import.meta.env.BASE_URL}assets/hero-architecture.jpg`}
                alt="Modern British architecture symbolizing structure and precision"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 sm:-left-8 flex items-center gap-3 rounded-2xl bg-card p-4 shadow-xl border border-hairline">
              <span className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent"><Users className="size-5" /></span>
              <div>
                <p className="text-sm font-semibold text-foreground">Junior to Manager</p>
                <p className="text-xs text-foreground/60">UK audit professionals</p>
              </div>
            </div>
            <div className="absolute -top-5 -right-2 sm:-right-6 rounded-2xl bg-card px-5 py-4 shadow-xl border border-hairline">
              <p className="text-xs text-foreground/60">CCH · CaseWare · Xero</p>
              <p className="text-sm font-semibold text-foreground">Embedded in your stack</p>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-zone bg-[var(--deep)]">
        <div className="shell grid grid-cols-2 gap-8 py-10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="text-center lg:text-left">
              <p className="font-display text-3xl text-accent">{s.v}</p>
              <p className="mt-1 text-sm text-foreground/70">{s.l}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

