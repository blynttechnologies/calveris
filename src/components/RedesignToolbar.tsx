import React, { useState } from 'react';
import { Palette, Layers, ChevronDown, ChevronUp, Sparkles, FileText, Check, ArrowRight } from 'lucide-react';
import { redesignConcepts } from '../data/siteData';

interface RedesignToolbarProps {
  currentTheme: string;
  onThemeChange: (theme: string) => void;
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const RedesignToolbar: React.FC<RedesignToolbarProps> = ({
  currentTheme,
  onThemeChange,
  currentPath,
  onNavigate,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWireframe, setShowWireframe] = useState(false);

  const toggleWireframe = () => {
    setShowWireframe(!showWireframe);
    document.body.classList.toggle('wireframe-mode');
  };

  const allThemes = [
    {
      id: 'default',
      number: '00',
      name: 'Original Editorial',
      desc: 'Warm cream, deep ink & rich crimson',
      color: '#9a2b29',
    },
    ...redesignConcepts.map((c) => ({
      id: c.themeKey,
      number: c.number,
      name: c.title,
      desc: c.tagline,
      color: c.primaryColor,
    })),
  ];

  return (
    <aside aria-label="Redesign Studio Controls" className="fixed bottom-5 right-5 z-50 no-print">
      {/* Floating Pill Button */}
      <div className="flex items-center gap-2 shadow-2xl rounded-full p-1.5 bg-ink/95 backdrop-blur-md border border-hairline-light text-ink-foreground">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase text-white hover:text-accent transition-colors"
        >
          <Palette className="size-4 text-accent" />
          <span>5 Redesign Concepts</span>
          {isOpen ? <ChevronDown className="size-3.5" /> : <ChevronUp className="size-3.5" />}
        </button>

        <span className="text-xs text-ink-foreground/40">|</span>

        {/* Quick theme dot indicator */}
        <div className="flex items-center gap-1.5 pr-2">
          {allThemes.map((t) => (
            <button
              key={t.id}
              onClick={() => onThemeChange(t.id)}
              title={`${t.number}: ${t.name}`}
              className={`size-4 rounded-full transition-all ${
                currentTheme === t.id
                  ? 'ring-2 ring-white scale-125'
                  : 'opacity-60 hover:opacity-100 hover:scale-110'
              }`}
              style={{ backgroundColor: t.color }}
            />
          ))}
        </div>
      </div>

      {/* Expanded Redesign Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-84 sm:w-[420px] max-h-[85vh] overflow-y-auto bg-ink/95 backdrop-blur-xl border border-hairline-light shadow-2xl p-6 text-ink-foreground rounded-2xl mb-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-4 border-b border-hairline-light">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-accent" />
              <h3 className="text-sm font-semibold text-white">5 New Redesign Concepts</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xs text-ink-foreground/60 hover:text-white"
            >
              Close
            </button>
          </div>

          {/* Quick PDF & Showcase Buttons */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                onNavigate('/designs');
                setIsOpen(false);
              }}
              className="flex items-center justify-center gap-1.5 bg-accent text-white py-2.5 px-3 text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-accent/90 transition-all text-center"
            >
              <span>Compare 5 Designs</span>
              <ArrowRight className="size-3.5" />
            </button>

            <a
              href="/Calveris-5-Redesign-Concepts.pdf"
              download
              className="flex items-center justify-center gap-1.5 border border-hairline-light bg-white/10 text-white py-2.5 px-3 text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-white hover:text-ink transition-all text-center"
            >
              <FileText className="size-3.5" />
              <span>Download PDF</span>
            </a>
          </div>

          {/* Theme Selector */}
          <div className="mt-5">
            <label className="text-xs uppercase tracking-wider font-semibold text-ink-foreground/60 block mb-2.5">
              Live Theme Preview (Click to apply)
            </label>
            <div className="space-y-2">
              {allThemes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => onThemeChange(t.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg border text-left transition-all ${
                    currentTheme === t.id
                      ? 'border-accent bg-accent/20 text-white shadow-md'
                      : 'border-hairline-light/50 bg-ink-foreground/[0.04] text-ink-foreground/80 hover:bg-ink-foreground/[0.08]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="size-4 rounded-full shrink-0 border border-white/20"
                      style={{ backgroundColor: t.color }}
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[0.65rem] font-mono text-accent font-bold">
                          {t.number}
                        </span>
                        <p className="text-xs font-semibold">{t.name}</p>
                        {t.id === 'mayfair-heritage' && (
                          <span className="text-[0.58rem] uppercase tracking-wider text-accent border border-accent/40 bg-accent/10 px-1 py-0.5 rounded font-semibold">
                            Chosen
                          </span>
                        )}
                      </div>
                      <p className="text-[0.7rem] text-ink-foreground/60 line-clamp-1">{t.desc}</p>
                    </div>
                  </div>
                  {currentTheme === t.id ? (
                    <span className="flex items-center gap-1 text-[0.65rem] uppercase tracking-wider bg-accent px-2 py-0.5 text-white font-bold rounded">
                      <Check className="size-2.5" />
                      Active
                    </span>
                  ) : null}
                </button>
              ))}
            </div>
          </div>

          {/* Wireframe Grid Helper */}
          <div className="mt-5 pt-4 border-t border-hairline-light flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layers className="size-4 text-ink-foreground/70" />
              <div>
                <p className="text-xs font-medium text-white">Layout Bounds Helper</p>
                <p className="text-[0.7rem] text-ink-foreground/50">Outline section containers & grid</p>
              </div>
            </div>
            <button
              onClick={toggleWireframe}
              className={`px-3 py-1 text-xs font-semibold rounded border transition-colors ${
                showWireframe
                  ? 'bg-accent text-white border-accent'
                  : 'bg-ink-foreground/10 text-ink-foreground border-hairline-light hover:bg-ink-foreground/20'
              }`}
            >
              {showWireframe ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};
