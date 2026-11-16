import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-40 flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg hover:bg-gold-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
        show ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <ArrowUp className="size-5" />
    </button>
  );
};
