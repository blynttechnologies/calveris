import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

import { HomePage } from './pages/HomePage';
import { AuditTeamPage } from './pages/AuditTeamPage';
import { AccountingTeamPage } from './pages/AccountingTeamPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { WhyCalverisPage } from './pages/WhyCalverisPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

const BASE = import.meta.env.BASE_URL;
const stripBase = (p: string) => '/' + p.slice(BASE.length).replace(/^\//, '');

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return stripBase(window.location.pathname);
  });

  const [currentTheme, setCurrentTheme] = useState<string>('mayfair-heritage');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'mayfair-heritage');
    const handlePopState = () => {
      setCurrentPath(stripBase(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Fade-up reveal for section content as it scrolls into view
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    const t = setTimeout(() => {
      document.querySelectorAll('main section .shell > *').forEach((el) => {
        el.classList.add('reveal');
        io.observe(el);
      });
    }, 50);
    return () => {
      clearTimeout(t);
      io.disconnect();
    };
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', BASE + path.replace(/^\//, ''));
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    if (theme === 'default') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  };

  // Render the current page
  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage onNavigate={handleNavigate} />;
      case '/audit-team':
        return <AuditTeamPage onNavigate={handleNavigate} />;
      case '/accounting-team':
        return <AccountingTeamPage onNavigate={handleNavigate} />;
      case '/how-it-works':
        return <HowItWorksPage onNavigate={handleNavigate} />;
      case '/why-calveris':
        return <WhyCalverisPage onNavigate={handleNavigate} />;
      case '/about':
        return <AboutPage onNavigate={handleNavigate} />;
      case '/contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-accent selection:text-accent-foreground transition-colors duration-300">
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />
      <div className="flex-1">{renderPage()}</div>
      <Footer onNavigate={handleNavigate} />
      <BackToTop />

    </div>
  );
};

export default App;
