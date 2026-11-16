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
        <div>
          <div className="relative overflow-hidden shell flex flex-col items-center text-center justify-center py-20 lg:py-32">
            <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl leading-[1.03] max-w-5xl text-foreground">
              Your audit team, <span className="text-accent">extended.</span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Experienced UK audit and accounting professionals who work inside your systems, so your firm can take on more clients without the recruitment headache.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
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
            <ul className="mt-14 pt-8 border-t border-hairline grid w-full gap-4 text-sm text-foreground/85 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
              {['Audit Junior to Manager', 'ACCA-qualified accountants', 'Works in CCH, CaseWare & Xero', 'You keep signing authority'].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <ShieldCheck className="size-4 shrink-0 text-accent" /> {t}
                </li>
              ))}
            </ul>
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

