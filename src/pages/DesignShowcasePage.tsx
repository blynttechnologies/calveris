import React, { useState } from 'react';
import { redesignConcepts, DesignConcept } from '../data/siteData';
import { PageHeader } from '../components/PageHeader';
import { Check, Sparkles, ArrowRight, Download, Eye, Palette, FileText, CheckCircle2 } from 'lucide-react';

interface DesignShowcaseProps {
  currentTheme: string;
  onThemeChange: (theme: string) => void;
  onNavigate: (path: string) => void;
}

export const DesignShowcasePage: React.FC<DesignShowcaseProps> = ({
  currentTheme,
  onThemeChange,
  onNavigate,
}) => {
  // Default to Concept 02: Mayfair Heritage (User-selected finalized design)
  const [selectedConcept, setSelectedConcept] = useState<DesignConcept>(
    redesignConcepts.find((c) => c.id === 'concept-2') || redesignConcepts[0]
  );
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const handleApplyTheme = (themeKey: string) => {
    onThemeChange(themeKey);
  };

  return (
    <main className="bg-background min-h-screen">
      <PageHeader
        eyebrow="Redesign Selection & Strategy"
        title="5 Redesign Concepts for Calveris"
        description="Explore 5 distinct architectural and visual directions tailored specifically for UK accounting and audit outsourcing. Select your favorite concept, preview it live on the site, or download the executive PDF design book."
      />

      {/* Action Bar */}
      <section className="bg-card border-b border-hairline py-6 sticky top-20 z-30 backdrop-blur-md">
        <div className="shell flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="size-5 text-accent" />
            <span className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Design Selection Studio
            </span>
            <span className="text-xs text-muted-foreground hidden sm:inline">
              (Choose your preferred direction)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/Calveris-5-Redesign-Concepts.pdf"
              download
              className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider shadow hover:bg-accent/90 transition-all rounded-sm"
            >
              <Download className="size-4" />
              <span>Download PDF Presentation</span>
            </a>

            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 border border-hairline bg-background text-foreground px-4 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-secondary transition-all rounded-sm"
            >
              <FileText className="size-4 text-muted-foreground" />
              <span>Print Design Book</span>
            </button>
          </div>
        </div>
      </section>

      {/* Concept Selector Tabs */}
      <section className="py-12 border-b border-hairline bg-background">
        <div className="shell">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {redesignConcepts.map((concept) => {
              const isSelected = selectedConcept.id === concept.id;
              const isActiveTheme = currentTheme === concept.themeKey;

              return (
                <div
                  key={concept.id}
                  onClick={() => setSelectedConcept(concept)}
                  className={`cursor-pointer p-5 border transition-all relative flex flex-col justify-between ${
                    isSelected
                      ? 'border-accent bg-card shadow-lg ring-1 ring-accent'
                      : 'border-hairline bg-secondary/30 hover:bg-card hover:border-foreground/20'
                  }`}
                >
                  {/* Top Bar with Number & Active Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-3 gap-1">
                      <span className="font-mono text-xs font-bold text-accent">
                        [{concept.number}]
                      </span>
                      <div className="flex items-center gap-1">
                        {concept.id === 'concept-2' && (
                          <span className="text-[0.6rem] uppercase tracking-wider bg-accent/20 border border-accent text-accent px-1.5 py-0.5 rounded font-bold">
                            Selected
                          </span>
                        )}
                        {isActiveTheme && (
                          <span className="text-[0.6rem] uppercase tracking-wider bg-accent text-accent-foreground px-1.5 py-0.5 rounded font-bold">
                            Active
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="size-3.5 rounded-full border border-white/20 shrink-0"
                        style={{ backgroundColor: concept.primaryColor }}
                      />
                      <h3 className="font-display text-lg font-medium text-foreground">
                        {concept.title}
                      </h3>
                    </div>

                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {concept.tagline}
                    </p>
                  </div>

                  {/* Bottom selection pill */}
                  <div className="mt-4 pt-3 border-t border-hairline/60 flex items-center justify-between text-xs">
                    <span className="text-[0.7rem] uppercase tracking-wider text-muted-foreground font-semibold">
                      {concept.category}
                    </span>
                    <span className="text-accent font-bold">
                      {isSelected ? 'Viewing' : 'Inspect →'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deep-Dive on Selected Concept */}
      <section className="py-16 lg:py-24 border-b border-hairline bg-background">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            {/* Left Column: Concept Overview & Live Activation */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider mb-4">
                  <span>Concept {selectedConcept.number}</span>
                  <span>•</span>
                  <span>{selectedConcept.category}</span>
                </div>

                <h2 className="font-display text-4xl sm:text-5xl font-normal text-foreground leading-[1.08]">
                  {selectedConcept.title}
                </h2>

                <p className="font-display text-xl italic text-foreground/80 mt-2">
                  {selectedConcept.tagline}
                </p>

                <p className="text-sm sm:text-base text-foreground/75 font-light leading-relaxed mt-6">
                  {selectedConcept.overview}
                </p>
              </div>

              {/* Target practice fit */}
              <div className="bg-secondary/60 p-6 border border-hairline">
                <h4 className="eyebrow text-xs text-foreground/70 mb-2">
                  Target UK Firm Profile:
                </h4>
                <p className="text-xs text-foreground/80 leading-relaxed font-medium">
                  {selectedConcept.targetFirms}
                </p>
              </div>

              {/* Action: Apply Live Theme */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleApplyTheme(selectedConcept.themeKey)}
                  className="inline-flex items-center justify-center gap-2.5 bg-accent text-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] shadow-lg hover:bg-accent/90 transition-all"
                >
                  <Eye className="size-4" />
                  <span>
                    {currentTheme === selectedConcept.themeKey
                      ? 'Currently Active on Site'
                      : 'Apply Theme to Live Site'}
                  </span>
                </button>

                <button
                  onClick={() => {
                    handleApplyTheme(selectedConcept.themeKey);
                    onNavigate('/');
                  }}
                  className="inline-flex items-center justify-center gap-2 border border-hairline bg-card text-foreground px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] hover:bg-secondary transition-all"
                >
                  <span>Preview Full Homepage</span>
                  <ArrowRight className="size-3.5" />
                </button>
              </div>

              {/* Key Strengths */}
              <div className="pt-6 border-t border-hairline">
                <h4 className="eyebrow text-xs text-muted-foreground mb-4">
                  Strategic Advantages:
                </h4>
                <ul className="space-y-3">
                  {selectedConcept.strengths.map((str, i) => (
                    <li key={i} className="text-xs sm:text-sm text-foreground/80 flex items-start gap-3">
                      <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Visual Design Board & Palette */}
            <div className="lg:col-span-7 space-y-8">
              {/* Interactive Color Palette */}
              <div className="bg-card border border-hairline p-8 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Palette className="size-4 text-accent" />
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-foreground">
                      Curated Color System
                    </h4>
                  </div>
                  <span className="text-[0.7rem] text-muted-foreground">
                    (Click swatch to copy HEX)
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {selectedConcept.palette.map((color, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleCopyHex(color.hex)}
                      className="cursor-pointer group flex flex-col p-3 border border-hairline bg-background hover:border-accent transition-all rounded"
                    >
                      <div
                        className="h-16 w-full rounded border border-black/10 shadow-inner mb-3 transition-transform group-hover:scale-105"
                        style={{ backgroundColor: color.hex }}
                      />
                      <p className="text-xs font-bold text-foreground truncate">{color.name}</p>
                      <p className="text-[0.7rem] font-mono text-muted-foreground mt-0.5">
                        {copiedHex === color.hex ? 'Copied!' : color.hex}
                      </p>
                      <p className="text-[0.65rem] text-muted-foreground/80 mt-1 uppercase tracking-wider">
                        {color.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography Pairing Card */}
              <div className="bg-card border border-hairline p-8 shadow-sm">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-foreground mb-6">
                  Typography Hierarchy
                </h4>
                <div className="space-y-4">
                  {selectedConcept.typography.map((font, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-background border border-hairline gap-3"
                    >
                      <div>
                        <span className="text-xs uppercase tracking-wider text-accent font-semibold">
                          {font.role}
                        </span>
                        <p className="font-display text-xl text-foreground mt-0.5">{font.family}</p>
                        <p className="text-xs text-muted-foreground font-light">{font.usage}</p>
                      </div>
                      <span className="text-xs font-mono bg-secondary px-2.5 py-1 text-foreground/80 self-start sm:self-center border border-hairline">
                        {font.weight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Design Features & Architecture */}
              <div className="bg-card border border-hairline p-8 shadow-sm">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-foreground mb-4">
                  Signature Architectural Features
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {selectedConcept.designFeatures.map((feat, i) => (
                    <div key={i} className="p-4 bg-background border border-hairline text-xs">
                      <span className="text-accent font-mono font-bold block mb-1">
                        0{i + 1}
                      </span>
                      <p className="text-foreground/80 font-medium leading-relaxed">{feat}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className="py-20 lg:py-28 border-b border-hairline bg-secondary/30">
        <div className="shell">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow flex items-center gap-3 text-muted-foreground">
              <span aria-hidden="true" className="inline-block size-[6px] rotate-45 bg-accent" />
              <span>Comparative Strategy</span>
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-normal text-foreground mt-6 leading-tight">
              Design Selection Matrix
            </h2>
            <p className="mt-4 text-base text-foreground/75 font-light">
              Compare the 5 directions against key business goals for Calveris Limited.
            </p>
          </div>

          <div className="overflow-x-auto border border-hairline bg-card shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-background border-b border-hairline text-foreground/80 eyebrow">
                  <th className="p-4 sm:p-5">Concept Name</th>
                  <th className="p-4 sm:p-5">Aesthetic Vibe</th>
                  <th className="p-4 sm:p-5">Target Firms</th>
                  <th className="p-4 sm:p-5">Partner Trust Rating</th>
                  <th className="p-4 sm:p-5">Primary Accent</th>
                  <th className="p-4 sm:p-5">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                {redesignConcepts.map((c) => (
                  <tr
                    key={c.id}
                    className={`transition-colors hover:bg-secondary/40 ${
                      selectedConcept.id === c.id ? 'bg-secondary/60' : ''
                    }`}
                  >
                    <td className="p-4 sm:p-5 font-display text-base sm:text-lg font-medium text-foreground">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-accent font-bold">[{c.number}]</span>
                        <span>{c.title}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-muted-foreground">{c.vibe}</td>
                    <td className="p-4 sm:p-5 text-foreground/80 max-w-xs">{c.targetFirms}</td>
                    <td className="p-4 sm:p-5">
                      <div className="flex items-center gap-1 text-amber-500 font-bold">
                        ★★★★★
                      </div>
                    </td>
                    <td className="p-4 sm:p-5">
                      <div className="flex items-center gap-2">
                        <span
                          className="size-3.5 rounded-full border border-black/20"
                          style={{ backgroundColor: c.primaryColor }}
                        />
                        <span className="font-mono text-xs text-foreground/80">
                          {c.primaryColor}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5">
                      <button
                        onClick={() => {
                          setSelectedConcept(c);
                          handleApplyTheme(c.themeKey);
                        }}
                        className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-accent text-white hover:bg-accent/90 rounded transition-all"
                      >
                        Choose & Apply
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PDF Download Banner */}
      <section className="bg-ink py-20 text-ink-foreground border-b border-hairline-light">
        <div className="shell text-center">
          <div className="max-w-2xl mx-auto">
            <span className="eyebrow text-accent font-bold tracking-widest block mb-4">
              Decision Package
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-normal text-white leading-tight">
              Ready to Choose? Get the PDF Design Book
            </h2>
            <p className="mt-6 text-base sm:text-lg text-ink-foreground/80 font-light leading-relaxed">
              We have generated a PDF presentation detailing all 5 designs, color palettes, and strategy rationales for you to review and share with stakeholders.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/Calveris-5-Redesign-Concepts.pdf"
                download
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] shadow-lg hover:bg-accent/90 transition-all"
              >
                <Download className="size-4" />
                <span>Download Calveris-5-Redesign-Concepts.pdf</span>
              </a>

              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 border border-hairline-light bg-ink-foreground/[0.08] text-ink-foreground px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-white hover:text-ink transition-all"
              >
                <FileText className="size-4" />
                <span>Print Document</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

