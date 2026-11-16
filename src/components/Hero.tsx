import React, { useEffect, useRef, useState } from 'react';
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


// Counts up to a number once it scrolls into view; non-numeric values show as-is
const CountUp: React.FC<{ value: string }> = ({ value }) => {
  const m = value.match(/^(\d+)(.*)$/);
  const ref = useRef<HTMLParagraphElement>(null);
  const [n, setN] = useState(m ? 0 : -1);
  useEffect(() => {
    if (!m || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { if (m) setN(+m[1]); return; }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const end = +m[1], t0 = performance.now();
      const tick = (t: number) => {
        const k = Math.min((t - t0) / 1200, 1);
        setN(Math.round(end * (1 - Math.pow(1 - k, 3))));
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return <p ref={ref} className="font-display text-5xl sm:text-6xl text-[#e3c993] [font-variant-numeric:lining-nums]">{m ? `${n}${m[2]}` : value}</p>;
};

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
          <h1 className="font-display mt-6 max-w-5xl text-5xl sm:text-6xl xl:text-[5rem] leading-[1.12] text-foreground">
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

      <section className="bg-[#14213d] text-white">
        <div className="shell grid grid-cols-2 gap-y-10 py-14 lg:grid-cols-4 lg:divide-x lg:divide-white/15">
          {stats.map((s) => (
            <div key={s.l} className="px-4 text-center">
              <CountUp value={s.v} />
              <p className="mt-3 text-sm sm:text-base text-white/80">{s.l}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

