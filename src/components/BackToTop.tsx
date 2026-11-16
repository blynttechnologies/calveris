import React, { useEffect, useState } from 'react';
import { ArrowUp, Phone, Mail, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export const BackToTop: React.FC = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <>
    <a
      href={siteConfig.contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="hidden md:flex fixed bottom-6 right-20 z-40 items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-lg hover:bg-gold-hover"
    >
      <MessageCircle className="size-5" /> Chat with us
    </a>
    <div className="md:hidden fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-hairline bg-card shadow-[0_-6px_20px_rgba(28,25,18,0.12)]">
      {[
        [`tel:${siteConfig.contact.phone}`, Phone, 'Call'],
        [siteConfig.contact.whatsapp, MessageCircle, 'WhatsApp'],
        [`mailto:${siteConfig.contact.email}`, Mail, 'Email'],
      ].map(([href, Icon, label]) => {
        const I = Icon as typeof Phone;
        return (
          <a key={label as string} href={href as string} className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-accent">
            <I className="size-5" />{label as string}
          </a>
        );
      })}
    </div>
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-20 md:bottom-6 right-6 z-40 flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg hover:bg-gold-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
        show ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <ArrowUp className="size-5" />
    </button>
    </>
  );
};
