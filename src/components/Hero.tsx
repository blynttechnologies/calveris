import React from 'react';
import { ArrowUpRight, ShieldCheck, Phone } from 'lucide-react';

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
      <section className="pattern-uk bg-[var(--deep)] pt-[4.5rem]">
        <div className="shell flex flex-col items-center text-center py-16 lg:py-24">
          {/* Authority: who stands behind the firm */}
          <p className="text-sm font-medium text-foreground/70">
            Founder-led by an <span className="font-semibold text-accent">ACCA-qualified</span> ex-top-10 auditor
          </p>

          {/* Clarity + outcome: what you get, in one line */}
          <h1 className="font-display mt-6 max-w-5xl text-5xl sm:text-6xl xl:text-7xl leading-[1.05] text-foreground">
            Add audit capacity <span className="text-accent">without hiring.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg sm:text-xl leading-relaxed text-foreground/80">
            Experienced UK audit and accounting professionals who work inside your systems, so your firm can take on more clients and meet every deadline.
          </p>

          {/* One primary action, low-friction secondary, risk reversal beneath */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 bg-accent px-9 py-4 text-base font-semibold text-accent-foreground shadow-lg hover:bg-gold-hover hover:-translate-y-0.5"
            >
              Build your team <ArrowUpRight className="size-5" />
            </button>
            <a
              href="tel:+447803061011"
              className="inline-flex items-center gap-2.5 border-2 border-accent bg-card px-8 py-[0.9rem] text-base font-semibold text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Phone className="size-5" /> +44 7803 061011
            </a>
          </div>
          <p className="mt-4 text-sm text-foreground/65">Free initial conversation · No obligation · Confidential</p>

          {/* Objection handling: the fears a practice owner has */}
          <ul className="mt-14 grid w-full max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['You keep your clients', 'We never contact them'],
              ['You keep signing authority', 'Your opinion, your sign-off'],
              ['No recruitment wait', 'Skip 3-month notice periods'],
              ['Works in your software', 'CCH, CaseWare, Xero'],
            ].map(([t, d]) => (
              <li key={t} className="rounded-2xl border border-hairline bg-card px-5 py-5 text-left shadow-sm">
                <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <ShieldCheck className="size-4 shrink-0 text-accent" /> {t}
                </p>
                <p className="mt-1 pl-6 text-sm text-foreground/65">{d}</p>
              </li>
            ))}
          </ul>
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

