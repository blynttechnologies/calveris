import React from 'react';
import { Shield, Lock, Eye, Users } from 'lucide-react';

export const PromiseSection: React.FC = () => {
  const promises = [
    {
      title: "Your clients remain your clients.",
      description: "We work entirely under your banner and methodology. We do not solicit, contact or approach your clients directly.",
      icon: Users,
    },
    {
      title: "Your firm remains responsible.",
      description: "You hold the statutory engagement, lead partner oversight, audit opinion and official filing rights at all times.",
      icon: Shield,
    },
    {
      title: "Your relationship stays with you.",
      description: "Client trust, commercial negotiations and fee arrangements remain 100% between your practice and your client.",
      icon: Lock,
    },
    {
      title: "Behind-the-scenes capacity.",
      description: "Calveris provides the professional horsepower, testing, and file preparation so your partners can focus on growth.",
      icon: Eye,
    },
  ];

  return (
    <section className="bg-[#060c0a] py-24 lg:py-36 text-foreground border-b border-hairline">
      <div className="shell">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="eyebrow flex items-center gap-3 text-accent font-semibold">
            <span aria-hidden="true" className="inline-block size-[6px] rotate-45 bg-accent" />
            <span>The promise that matters most</span>
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground mt-8 leading-[1.1] max-w-[18ch]">
            We don't replace your firm. We strengthen it.
          </h2>
          <p className="mt-8 font-display text-2xl font-light italic text-accent md:text-3xl">
            Your firm remains in control.
          </p>
        </div>

        {/* 2x2 Grid of Promises */}
        <div className="mt-16 grid border-t border-l border-hairline md:grid-cols-2">
          {promises.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-5 border-r border-b border-hairline p-8 lg:p-12 transition-colors duration-500 hover:bg-[#101c18]"
              >
                <div className="p-3 bg-accent/15 border border-accent/40 text-accent shrink-0 rounded-sm">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-normal text-foreground mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-foreground/75 leading-relaxed font-light">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <p className="text-base sm:text-lg text-foreground/70 italic font-display">
            "We're an extension of your team — not another firm competing for your clients."
          </p>
        </div>
      </div>
    </section>
  );
};
