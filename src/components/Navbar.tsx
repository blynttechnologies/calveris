import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[color-mix(in_srgb,var(--background)_95%,transparent)] backdrop-blur-md border-b border-hairline py-0 shadow-xl'
          : 'bg-[color-mix(in_srgb,var(--background)_60%,transparent)] backdrop-blur-[6px] py-1 border-b border-hairline/40'
      }`}
    >
      <div className="shell flex h-20 items-center justify-between">
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="flex items-baseline gap-2 group cursor-pointer shrink-0 mr-4"
        >
          <span className="font-display text-[1.5rem] font-medium tracking-[0.34em] text-foreground transition-opacity group-hover:opacity-90">
            {siteConfig.name}
          </span>
          <span
            aria-hidden="true"
            className="inline-block size-[7px] rotate-45 bg-accent transition-transform duration-300 group-hover:scale-125 shadow-[0_0_8px_rgba(197,168,128,0.6)]"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 2xl:gap-7 whitespace-nowrap xl:flex">
          {siteConfig.navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className={`eyebrow tracking-[0.1em] text-[0.72rem] whitespace-nowrap transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 duration-300 cursor-pointer ${
                  isActive
                    ? 'text-foreground underline underline-offset-8 decoration-accent decoration-2 font-semibold'
                    : 'text-foreground/75 hover:text-accent'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="/contact"
            onClick={(e) => handleLinkClick(e, '/contact')}
            className="hidden sm:inline-flex shrink-0 whitespace-nowrap items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] shadow-md hover:bg-gold-hover transition-all duration-300 hover:translate-y-[-1px] rounded-sm"
          >
            <span>Build Your Team</span>
            <ArrowUpRight className="size-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-foreground hover:text-accent transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-6 text-accent" /> : <Menu className="size-6 text-accent" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[color-mix(in_srgb,var(--background)_98%,transparent)] backdrop-blur-xl border-b border-hairline px-6 py-8 transition-all">
          <nav className="flex flex-col gap-5">
            {siteConfig.navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`eyebrow text-sm tracking-[0.18em] py-2 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-accent font-bold pl-2 border-l-2 border-accent'
                      : 'text-foreground/80 hover:text-accent'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-4 border-t border-hairline flex flex-col gap-3">
              <a
                href="/contact"
                onClick={(e) => handleLinkClick(e, '/contact')}
                className="w-full text-center py-3 bg-accent text-accent-foreground eyebrow text-xs tracking-[0.18em] uppercase font-bold hover:bg-gold-hover rounded-sm shadow-md"
              >
                Build Your Team
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="text-center text-xs text-foreground/60 py-2 hover:text-accent"
              >
                Direct: {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
