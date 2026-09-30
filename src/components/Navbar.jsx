import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { key: 'home', name: t('nav.home', 'Home'), href: '#home' },
    { key: 'about', name: t('nav.about', 'About'), href: '#about' },
    { key: 'projects', name: t('nav.projects', 'Projects'), href: '#projects' },
    { key: 'experience', name: t('nav.experience', 'Experience'), href: '#experience' },
    { key: 'skills', name: t('nav.skills', 'Skills'), href: '#skills' },
    { key: 'contact', name: t('nav.contact', 'Contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section tracking for active indicator
      const sections = ['home', 'about', 'projects', 'experience', 'skills', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-white/90 backdrop-blur-md shadow-xs border-b border-[#E3D5CA]/40'
            : 'py-5 md:py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2 select-none"
            data-cursor="NAMIRA"
          >
            <span className="font-serif text-2xl font-bold tracking-tight text-[#292526] group-hover:text-[#FFAFCC] transition-colors duration-200">
              Namira.
            </span>
            <span className="hidden sm:inline-block text-[11px] font-mono tracking-widest text-[#292526]/50 uppercase pl-1 border-l border-[#D6CCC2]">
              Frontend Dev
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) => {
              const isActive = activeSection === item.key;
              return (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative font-sans text-sm tracking-wide transition-colors duration-200 py-1 ${
                    isActive ? 'text-[#292526] font-medium' : 'text-[#292526]/70 hover:text-[#292526]'
                  }`}
                  data-cursor="VIEW"
                >
                  <span>{item.name}</span>

                  {/* Animated Left-to-Right Underline on Hover */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#FFAFCC] transition-all duration-300 ease-out ${
                      isActive ? 'w-full' : 'w-0 hover:w-full group-hover:w-full'
                    }`}
                  />

                  {/* Active Indicator Dot */}
                  {isActive && (
                    <span className="absolute -top-1 -right-2 w-1.5 h-1.5 rounded-full bg-[#FFAFCC] animate-pulse" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Area: Language Switcher + Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />

            <MagneticButton
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              variant="primary"
              cursorText="CONNECT"
              className="text-xs px-5 py-2.5"
            >
              <span>{t('nav.connect', "Let's Connect")}</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </MagneticButton>
          </div>

          {/* Mobile Right Controls: Language Switcher + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#292526] hover:bg-[#FFF0F3] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-white/98 backdrop-blur-xl md:hidden transition-all duration-500 flex flex-col justify-between p-8 pt-28 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-[#E3D5CA]/40">
            <p className="text-xs font-mono uppercase tracking-widest text-[#292526]/40">
              {t('nav.menu', 'Navigation Menu')}
            </p>
            <LanguageSwitcher />
          </div>

          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.key;
              return (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  style={{
                    transitionDelay: `${index * 50}ms`
                  }}
                  className={`text-2xl font-serif flex items-center justify-between border-b border-[#E3D5CA]/40 pb-3 transition-colors ${
                    isActive ? 'text-[#FFAFCC]' : 'text-[#292526]'
                  }`}
                >
                  <span>{item.name}</span>
                  <span className="text-xs font-mono text-[#292526]/40">0{index + 1}</span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="pt-6 border-t border-[#E3D5CA]/50 space-y-4">
          <MagneticButton
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            variant="primary"
            className="w-full text-center py-3.5"
          >
            <span>{t('nav.connect', "Let's Connect")}</span>
            <ArrowUpRight size={16} />
          </MagneticButton>
          <div className="flex justify-between text-xs text-[#292526]/60 pt-2 font-mono">
            <span>Purwokerto, ID</span>
            <span>Telkom University</span>
          </div>
        </div>
      </div>
    </>
  );
}
