import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Download, Sparkles, Layers, Terminal } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { useLanguage } from '../context/LanguageContext';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const { t } = useLanguage();

  // Short initial reveal sequence (600–900ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  // Subtle mouse parallax (desktop only)
  const handleMouseMove = (e) => {
    if (window.innerWidth < 1024) return;
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    setMouseOffset({
      x: (clientX - centerX) / 45,
      y: (clientY - centerY) / 45
    });
  };

  const handleResetMouse = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleResetMouse}
      className="relative min-h-[92vh] flex items-center justify-center pt-24 md:pt-32 pb-16 overflow-hidden bg-white"
    >
      {/* Subtle Editorial Background Elements */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#FFF0F3]/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#E3D5CA]/30 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Decorative vertical lines */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pointer-events-none -z-10 flex justify-between opacity-30">
        <div className="w-[1px] h-full bg-[#E3D5CA]/40" />
        <div className="w-[1px] h-full bg-[#E3D5CA]/20 hidden md:block" />
        <div className="w-[1px] h-full bg-[#E3D5CA]/40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          {/* Label Pill */}
          <div
            className={`transition-all duration-700 ease-out transform ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0F3] border border-[#FFAFCC]/40 text-[#292526] text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-[#FFAFCC] animate-ping" />
              <span>{t('hero.available', 'Available for Frontend & Web Developer Roles')}</span>
            </div>
          </div>

          {/* Main Editorial Headings */}
          <div className="space-y-2">
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-light tracking-tight text-[#292526] transition-all duration-700 delay-150 ease-out transform ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {t('hero.greeting', "Hi, I'm")}{' '}
              <span className="font-serif italic font-normal text-[#292526] underline decoration-[#FFAFCC] decoration-wavy decoration-2 underline-offset-8">
                {PERSONAL_INFO.nickname || 'Namira'}
              </span>
              .
            </h1>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#292526]/90 transition-all duration-700 delay-300 ease-out transform leading-[1.15] ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {t('hero.subheadingStart', 'I build')}{' '}
              <span className="italic font-normal">
                {t('hero.subheadingEmphasis', 'thoughtful digital experiences.')}
              </span>
            </h2>
          </div>

          {/* Supporting Text */}
          <p
            className={`max-w-xl text-base md:text-lg text-[#292526]/75 font-light leading-relaxed transition-all duration-700 delay-450 ease-out transform ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {t('hero.bio', PERSONAL_INFO.profileSummary)}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap items-center gap-4 pt-2 transition-all duration-700 delay-600 ease-out transform ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <MagneticButton
              href="#projects"
              onClick={scrollToProjects}
              variant="primary"
              cursorText="EXPLORE"
              className="text-sm px-7 py-3.5"
            >
              <span>{t('hero.viewWork', 'View My Work')}</span>
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
            </MagneticButton>

            <MagneticButton
              href={PERSONAL_INFO.cvFile}
              download="Namira-Shifwah-Kumandani-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              cursorText="DOWNLOAD"
              className="text-sm px-6 py-3.5"
            >
              <Download size={15} className="group-hover:-translate-y-0.5 transition-transform" />
              <span>{t('hero.downloadCv', 'Download CV')}</span>
            </MagneticButton>
          </div>

          {/* Mini Metadata info */}
          <div
            className={`pt-4 flex items-center gap-6 text-xs text-[#292526]/50 font-mono transition-all duration-700 delay-700 ease-out transform ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span>{t('hero.location', 'BASED IN: PURWOKERTO, ID')}</span>
            <span>&bull;</span>
            <span>{t('hero.campus', "TELKOM UNIV '26")}</span>
            <span>&bull;</span>
            <span>{t('hero.gpa', 'GPA 3.92 / 4.00')}</span>
          </div>
        </div>

        {/* Right Column: Editorial Visual Composition & Floating Elements */}
        <div
          className={`lg:col-span-5 relative flex items-center justify-center transition-all duration-1000 delay-500 ease-out transform ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Main Visual Card */}
          <div
            className="relative w-full max-w-md bg-[#FFF0F3]/40 border border-[#E3D5CA] rounded-2xl p-6 md:p-8 shadow-sm transition-transform duration-300 ease-out"
            style={{
              transform: `translate3d(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px, 0)`
            }}
          >
            {/* Visual Header */}
            <div className="flex items-center justify-between border-b border-[#E3D5CA]/60 pb-4 mb-6">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#FFAFCC]" />
                <span className="w-3 h-3 rounded-full bg-[#E3D5CA]" />
                <span className="w-3 h-3 rounded-full bg-[#D6CCC2]" />
              </div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#292526]/50">
                Namira &bull; Dev Canvas
              </span>
            </div>

            {/* Profile Avatar / Editorial Silhouette Composition */}
            <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-gradient-to-br from-white via-[#FFF0F3] to-[#E3D5CA]/40 border border-[#E3D5CA]/40 p-5 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#292526]/50">
                    {t('hero.candidateProfile', 'Candidate Profile')}
                  </span>
                  <p className="font-serif text-2xl text-[#292526] font-medium leading-tight">
                    {PERSONAL_INFO.name}
                  </p>
                  <p className="text-xs text-[#292526]/70">
                    Frontend &amp; UI/UX Focus
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#FFAFCC]/30 border border-[#FFAFCC] flex items-center justify-center text-[#292526] font-serif text-lg font-bold">
                  NSK
                </div>
              </div>

              {/* Profile Image */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#E3D5CA]/40 group my-2">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#292526]/60 pt-2 border-t border-[#E3D5CA]/30">
                <span className="text-[#FFAFCC] font-medium font-mono">{t('hero.readyForImpact', 'Ready for Impact')}</span>
                <span className="text-[10px] font-mono text-[#292526]/50">Telkom Univ</span>
              </div>
            </div>

            {/* Micro details bar */}
            <div className="mt-5 grid grid-cols-2 gap-3 text-left">
              <div className="p-3 rounded-lg bg-white/80 border border-[#E3D5CA]/50">
                <p className="text-[10px] font-mono text-[#292526]/50 uppercase">{t('hero.primaryFocus', 'Primary Focus')}</p>
                <p className="text-xs font-medium text-[#292526] mt-0.5">{t('hero.primaryFocusVal', 'Frontend Development')}</p>
              </div>
              <div className="p-3 rounded-lg bg-white/80 border border-[#E3D5CA]/50">
                <p className="text-[10px] font-mono text-[#292526]/50 uppercase">{t('hero.academicHonor', 'Academic Honor')}</p>
                <p className="text-xs font-medium text-[#292526] mt-0.5">GPA: 3.92 / 4.00</p>
              </div>
            </div>
          </div>

          {/* Floating UI Element 1: Browser Card (moves on parallax) */}
          <div
            className="absolute -top-6 -right-4 md:-right-8 bg-white border border-[#E3D5CA] rounded-xl p-3 shadow-lg flex items-center gap-3 transition-transform duration-500 ease-out select-none hidden sm:flex"
            style={{
              transform: `translate3d(${mouseOffset.x * -0.8}px, ${mouseOffset.y * -0.8}px, 0)`,
              animation: 'float 5s ease-in-out infinite'
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-[#FFAFCC]/30 flex items-center justify-center text-[#292526]">
              <Sparkles size={16} className="text-[#292526]" />
            </div>
            <div>
              <p className="text-[11px] font-medium text-[#292526]">{t('hero.creativeDev', 'Creative Developer')}</p>
              <p className="text-[9px] text-[#292526]/50">{t('hero.creativeDevSub', 'Modern & Editorial Web')}</p>
            </div>
          </div>

          {/* Floating UI Element 2: Code Tag */}
          <div
            className="absolute -bottom-6 -left-4 md:-left-8 bg-white border border-[#E3D5CA] rounded-xl p-3 shadow-lg flex items-center gap-3 transition-transform duration-500 ease-out select-none"
            style={{
              transform: `translate3d(${mouseOffset.x * 1.1}px, ${mouseOffset.y * 1.1}px, 0)`,
              animation: 'float 6.5s ease-in-out infinite 1s'
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-[#FFF0F3] border border-[#FFAFCC]/50 flex items-center justify-center text-[#292526]">
              <Layers size={16} className="text-[#292526]" />
            </div>
            <div>
              <p className="text-[11px] font-medium text-[#292526]">{t('hero.infoSystems', 'Information Systems')}</p>
              <p className="text-[9px] text-[#292526]/50">{t('hero.infoSystemsSub', 'Tech • UI/UX • Analysis')}</p>
          </div>
        </div>
      </div>
      </div>

      {/* Floating Keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}