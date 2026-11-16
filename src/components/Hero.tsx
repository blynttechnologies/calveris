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
          <div className="relative flex items-center justify-center bg-[#0d1815] px-6 py-12 lg:py-0 border-l border-[rgba(197,168,128,0.2)]">
            <svg viewBox="0 0 600 560" role="img" aria-label="Illustration of audit documents, a growth chart and a verification shield" className="w-full max-w-[34rem]">
              <g fill="none" stroke="#c5a880" strokeOpacity=".16" strokeWidth="1.5">
                {[110, 180, 250, 320].map((r) => <circle key={r} cx="380" cy="290" r={r} />)}
              </g>
              <g stroke="#c5a880" strokeOpacity=".5" strokeWidth="1.5" strokeDasharray="4 6" fill="none">
                <path d="M330 150 L470 105" /><path d="M360 330 L505 260" />
              </g>
              {/* document card */}
              <rect x="70" y="90" width="270" height="350" rx="20" fill="#13231e" stroke="#c5a880" strokeOpacity=".4" />
              <rect x="96" y="118" width="110" height="14" rx="7" fill="#c5a880" />
              <rect x="96" y="144" width="170" height="8" rx="4" fill="#f5f3ef" fillOpacity=".25" />
              {[196, 256, 316, 376].map((y, i) => (
                <g key={y}>
                  <circle cx="114" cy={y} r="15" fill={i < 3 ? '#c5a880' : 'none'} stroke="#c5a880" strokeWidth="2" />
                  {i < 3 && <path d={`M106 ${y} l6 6 l10 -12`} fill="none" stroke="#0d1815" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />}
                  <rect x="146" y={y - 9} width={150 - i * 12} height="10" rx="5" fill="#f5f3ef" fillOpacity=".75" />
                  <rect x="146" y={y + 7} width={110 - i * 8} height="7" rx="3.5" fill="#f5f3ef" fillOpacity=".22" />
                </g>
              ))}
              {/* chart card */}
              <rect x="290" y="250" width="250" height="210" rx="20" fill="#18302a" stroke="#c5a880" strokeOpacity=".45" />
              {[0, 1, 2, 3, 4].map((i) => (
                <rect key={i} x={318 + i * 44} y={420 - (40 + i * 28)} width="26" height={40 + i * 28} rx="6" fill="#c5a880" fillOpacity={0.35 + i * 0.16} />
              ))}
              <path d="M326 372 L370 346 L414 330 L458 296 L502 276" fill="none" stroke="#f5f3ef" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="502" cy="276" r="7" fill="#f5f3ef" />
              <rect x="318" y="270" width="80" height="9" rx="4.5" fill="#f5f3ef" fillOpacity=".5" />
              {/* shield badge */}
              <circle cx="480" cy="120" r="70" fill="#c5a880" fillOpacity=".12" />
              <circle cx="480" cy="120" r="52" fill="#c5a880" />
              <path d="M480 86 L508 97 V122 C508 140 496 152 480 158 C464 152 452 140 452 122 V97 Z" fill="#0d1815" />
              <path d="M467 122 l10 10 l18 -20" fill="none" stroke="#c5a880" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="330" cy="150" r="6" fill="#c5a880" /><circle cx="360" cy="330" r="6" fill="#c5a880" />
            </svg>
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

