import React from 'react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

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
      <section className="dark-zone bg-[var(--deep)] pt-[4.5rem]">
        <div className="grid lg:grid-cols-2 lg:min-h-[calc(100vh-4.5rem)]">
          <div className="relative overflow-hidden flex flex-col justify-center px-6 py-16 sm:px-12 lg:pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] lg:pr-16 lg:py-24">
            <svg aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-24 w-[26rem] opacity-60" viewBox="0 0 400 400" fill="none" stroke="#c5a880" strokeOpacity=".3" strokeWidth="1.5">
              {[70, 120, 170, 220, 270].map((r) => <circle key={r} cx="0" cy="400" r={r} />)}
            </svg>
            <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl leading-[1.05] text-foreground">
              Your audit team, <span className="text-accent">extended.</span>
            </h1>
            <p className="mt-7 text-lg sm:text-xl text-foreground/80 leading-relaxed max-w-xl">
              Experienced UK audit and accounting professionals who work inside your systems, so your firm can take on more clients without the recruitment headache.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <button
                onClick={() => onNavigate('/contact')}
                className="inline-flex items-center gap-2 bg-accent px-8 py-4 text-base font-semibold text-accent-foreground hover:bg-gold-hover"
              >
                Build your team <ArrowUpRight className="size-5" />
              </button>
              <a href="tel:+447803061011" className="text-base font-semibold text-foreground hover:text-accent">
                or call +44 7803 061011
              </a>
            </div>
            <ul className="mt-10 grid gap-3 text-sm text-foreground/85 sm:grid-cols-2 max-w-xl">
              {['Audit Junior to Manager', 'ACCA-qualified accountants', 'Works in CCH, CaseWare & Xero', 'You keep signing authority'].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <ShieldCheck className="size-4 shrink-0 text-accent" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[18rem] lg:min-h-0 border-l-4 border-accent">
            <img
              src={`${import.meta.env.BASE_URL}assets/hero-architecture.jpg`}
              alt="Modern British architecture symbolizing structure and precision"
              className="absolute inset-0 h-full w-full object-cover"
            />
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

