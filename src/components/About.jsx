import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, MapPin, Compass, Award, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [gpaAnimated, setGpaAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setGpaAnimated(true), 300);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-36 bg-[#FFF0F3]/40 border-b border-[#E3D5CA]/50 overflow-hidden"
    >
      {/* Background soft ambient blur */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#FFAFCC]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Sticky Editorial Heading */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#292526]/50">
                01 &mdash; About
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#292526] leading-tight">
                A little <br className="hidden lg:block" />
                <span className="italic font-normal">about me.</span>
              </h2>
              <div className="w-12 h-1 bg-[#FFAFCC] rounded-full" />
              <p className="text-sm font-sans text-[#292526]/60 pt-2 leading-relaxed">
                Blending analytical systems thinking with modern, user-first frontend craftsmanship.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Data Cards */}
          <div className="lg:col-span-8 space-y-10">
            {/* Primary Bio Paragraph */}
            <div
              className={`p-6 md:p-8 rounded-2xl bg-white border border-[#E3D5CA]/60 shadow-xs transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-lg md:text-xl font-sans font-light text-[#292526] leading-relaxed">
                "{PERSONAL_INFO.aboutNarrative}"
              </p>
            </div>

            {/* Structured Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Education Card */}
              <div
                className={`p-6 rounded-2xl bg-white border border-[#E3D5CA]/60 shadow-xs space-y-4 transition-all duration-700 delay-150 ease-out transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#E3D5CA]/40">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#292526]/60">
                    <GraduationCap size={16} className="text-[#FFAFCC]" />
                    <span>Education</span>
                  </div>
                  <span className="text-xs font-mono text-[#292526]/40">{EDUCATION.period}</span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl text-[#292526] font-medium">
                    {EDUCATION.degree}
                  </h3>
                  <p className="text-sm text-[#292526]/75 mt-1">
                    {EDUCATION.institution}
                  </p>
                </div>

                {/* GPA Indicator (Animates subtly into view, NO fake progress bar) */}
                <div className="p-4 rounded-xl bg-[#FFF0F3] border border-[#FFAFCC]/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#292526]/60 block">
                      Grade Point Average
                    </span>
                    <span className="text-xs font-medium text-[#292526]">
                      Academic Distinction
                    </span>
                  </div>
                  <div className="text-right">
                    <span
                      className={`text-2xl font-serif font-bold text-[#292526] transition-all duration-700 ${
                        gpaAnimated ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                      }`}
                    >
                      {EDUCATION.gpa}
                    </span>
                    <span className="text-xs text-[#292526]/50 font-mono"> / {EDUCATION.gpaMax}</span>
                  </div>
                </div>
              </div>

              {/* Location & Focus Card */}
              <div
                className={`p-6 rounded-2xl bg-white border border-[#E3D5CA]/60 shadow-xs space-y-5 transition-all duration-700 delay-300 ease-out transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Location */}
                <div className="space-y-1.5 pb-4 border-b border-[#E3D5CA]/40">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#292526]/60">
                    <MapPin size={16} className="text-[#FFAFCC]" />
                    <span>Location</span>
                  </div>
                  <p className="font-sans text-base font-medium text-[#292526]">
                    {EDUCATION.location}
                  </p>
                  <p className="text-xs text-[#292526]/60">
                    Open to on-site, hybrid, and remote opportunities
                  </p>
                </div>

                {/* Core Focus */}
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#292526]/60">
                    <Compass size={16} className="text-[#FFAFCC]" />
                    <span>Core Focus</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {EDUCATION.focusAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sans font-medium bg-[#FFF0F3] text-[#292526] border border-[#FFAFCC]/30 hover:border-[#FFAFCC] transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFAFCC]" />
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
