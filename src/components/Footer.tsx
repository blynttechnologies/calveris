import React from 'react';
import { siteConfig } from '../data/siteData';
import { ArrowUpRight, MessageSquare, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="dark-zone bg-[var(--deep)] text-foreground border-t border-hairline">
      <div className="shell py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand & Purpose Column */}
          <div className="lg:col-span-4">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="flex items-baseline gap-2 group cursor-pointer"
            >
              <span className="font-display text-2xl font-normal tracking-[0.34em] text-foreground">
                {siteConfig.name}
              </span>
              <span
                aria-hidden="true"
                className="inline-block size-[7px] rotate-45 bg-accent shadow-[0_0_8px_rgba(138,106,47,0.6)]"
              />
            </a>
            <p className="mt-4 font-display text-lg italic text-accent/90">
              {siteConfig.subTagline}
            </p>
            <p className="mt-4 text-sm text-foreground/60 leading-relaxed max-w-sm font-light">
              Specialist backend audit and accounting support for UK firms. Your methodology. Your relationships. Our delivery support.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 border border-hairline bg-[var(--card)] px-3.5 py-1.5 text-xs text-foreground/80 rounded-sm">
              <span className="size-1.5 rounded-full bg-accent animate-pulse" />
              <span>Founder-level access, always</span>
            </div>
          </div>

          {/* Capacity Links */}
          <div className="lg:col-span-2">
            <h4 className="eyebrow text-xs tracking-[0.2em] mb-6">
              Capacity
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href="/audit-team"
                  onClick={(e) => handleLinkClick(e, '/audit-team')}
                  className="text-foreground/75 hover:text-accent transition-colors cursor-pointer font-light"
                >
                  Audit Support
                </a>
              </li>
              <li>
                <a
                  href="/accounting-team"
                  onClick={(e) => handleLinkClick(e, '/accounting-team')}
                  className="text-foreground/75 hover:text-accent transition-colors cursor-pointer font-light"
                >
                  Accounting Support
                </a>
              </li>
              <li>
                <a
                  href="/how-it-works"
                  onClick={(e) => handleLinkClick(e, '/how-it-works')}
                  className="text-foreground/75 hover:text-accent transition-colors cursor-pointer font-light"
                >
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Firm Links */}
          <div className="lg:col-span-2">
            <h4 className="eyebrow text-xs tracking-[0.2em] mb-6">
              Firm
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href="/why-calveris"
                  onClick={(e) => handleLinkClick(e, '/why-calveris')}
                  className="text-foreground/75 hover:text-accent transition-colors cursor-pointer font-light"
                >
                  Why Calveris
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleLinkClick(e, '/about')}
                  className="text-foreground/75 hover:text-accent transition-colors cursor-pointer font-light"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleLinkClick(e, '/contact')}
                  className="text-foreground/75 hover:text-accent transition-colors cursor-pointer font-light"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Enquiries & Office Column */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h4 className="eyebrow text-xs tracking-[0.2em] mb-4">
                Enquiries
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-2 text-foreground/85 hover:text-accent transition-colors"
                  >
                    <Mail className="size-4 text-accent" />
                    <span>{siteConfig.contact.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center gap-2 text-foreground/85 hover:text-accent transition-colors"
                  >
                    <Phone className="size-4 text-accent" />
                    <span>{siteConfig.contact.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-accent hover:text-gold-hover transition-colors mt-1 font-semibold"
                  >
                    <MessageSquare className="size-3.5" />
                    <span>WhatsApp a founder</span>
                    <ArrowUpRight className="size-3" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="eyebrow text-xs tracking-[0.2em] mb-2">
                UK Office
              </h4>
              <p className="text-sm text-foreground/65 flex items-start gap-2 font-light">
                <MapPin className="size-4 text-accent shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2}, {siteConfig.contact.address.postcode}
                </span>
              </p>
              <p className="text-xs text-foreground/40 mt-1">
                Company No. {siteConfig.contact.companyNumber} • Registered in England & Wales
              </p>
            </div>
          </div>
        </div>

        {/* Statutory Regulatory Disclaimer */}
        <div className="mt-16 pt-8 border-t border-hairline">
          <p className="text-xs text-foreground/50 leading-relaxed max-w-4xl font-light">
            <strong className="text-foreground/75 font-semibold">Regulatory notice: </strong>
            {siteConfig.contact.statutoryDisclaimer}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-hairline/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground/50">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
          <p className="tracking-widest uppercase text-[0.72rem] text-accent font-semibold">
            For UK Accountancy & Audit Practices
          </p>
        </div>
      </div>
    </footer>
  );
};
