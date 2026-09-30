import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar, Award, ShieldCheck } from 'lucide-react';
import { EXPERIENCES, CERTIFICATIONS } from '../data/portfolioData';

export default function Experience() {
  const [activeExp, setActiveExp] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate progress of timeline through viewport
      const offsetTop = rect.top;
      if (offsetTop < viewportHeight * 0.7 && offsetTop > -rect.height) {
        if (offsetTop < viewportHeight * 0.35) {
          setActiveExp(1);
        } else {
          setActiveExp(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="py-24 md:py-36 bg-[#FFF0F3]/30 border-y border-[#E3D5CA]/50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 space-y-3 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#292526]/50">
            03 &mdash; Practical Background
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#292526]">
            Experience &amp; <span className="italic font-normal">Credentials.</span>
          </h2>
          <p className="text-base md:text-lg text-[#292526]/70 font-light leading-relaxed">
            Professional internships, practical industry exposure, and accredited competency certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Vertical Timeline Experience (7 cols) */}
          <div className="lg:col-span-7 space-y-8" ref={timelineRef}>
            <div className="flex items-center gap-2 pb-4 border-b border-[#E3D5CA]/60 text-xs font-mono uppercase tracking-wider text-[#292526]/60">
              <Briefcase size={16} className="text-[#FFAFCC]" />
              <span>Internship &amp; Practical Work (Kerja Praktik)</span>
            </div>

            <div className="relative pl-8 md:pl-10 space-y-12">
              {/* Dynamic Animated Timeline Line */}
              <div className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-[2px] bg-[#E3D5CA]/60">
                <div
                  className="w-full bg-[#FFAFCC] transition-all duration-500 ease-out"
                  style={{
                    height: activeExp === 0 ? '50%' : '100%'
                  }}
                />
              </div>

              {EXPERIENCES.map((exp, index) => {
                const isActive = activeExp === index;
                return (
                  <div key={exp.id} className="relative group">
                    {/* Timeline Node Dot */}
                    <div
                      className={`absolute -left-[30px] md:-left-[34px] top-1.5 w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                        isActive
                          ? 'border-[#FFAFCC] bg-white ring-4 ring-[#FFAFCC]/20 scale-110'
                          : 'border-[#D6CCC2] bg-white group-hover:border-[#FFAFCC]'
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full transition-colors ${
                          isActive ? 'bg-[#FFAFCC]' : 'bg-[#D6CCC2]'
                        }`}
                      />
                    </div>

                    {/* Experience Card */}
                    <div
                      className={`p-6 md:p-8 rounded-2xl bg-white border transition-all duration-400 ${
                        isActive
                          ? 'border-[#FFAFCC] shadow-md ring-1 ring-[#FFAFCC]/30'
                          : 'border-[#E3D5CA]/70 opacity-80 hover:opacity-100 hover:border-[#D6CCC2]'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 mb-4 border-b border-[#E3D5CA]/40">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#FFAFCC] font-semibold">
                            {exp.type}
                          </span>
                          <h3 className="font-serif text-2xl text-[#292526] font-medium">
                            {exp.role}
                          </h3>
                          <p className="text-sm font-sans font-medium text-[#292526]/75">
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-xs font-mono text-[#292526]/50 flex items-center gap-1.5">
                          <Calendar size={13} className="text-[#FFAFCC]" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm font-sans text-[#292526]/80 font-light leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FFAFCC] mt-2 shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-[#E3D5CA]/60 text-xs font-mono uppercase tracking-wider text-[#292526]/60">
              <Award size={16} className="text-[#FFAFCC]" />
              <span>Certifications</span>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="group p-5 rounded-2xl bg-white border border-[#E3D5CA] hover:border-[#FFAFCC] hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-[#FFAFCC] font-semibold">
                        <ShieldCheck size={12} /> {cert.issuer}
                      </span>
                      <h4 className="font-serif text-lg md:text-xl text-[#292526] group-hover:text-[#292526] transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-mono text-[#292526]/50">
                        Accredited Year: {cert.year} &bull; {cert.code}
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-[#FFF0F3] group-hover:bg-[#FFAFCC] flex items-center justify-center text-[#292526] transition-colors shrink-0">
                      <Award size={15} />
                    </div>
                  </div>

                 {/* Certificate Image */}
{cert.image && (
  <div className="mt-4 pt-4 border-t border-[#E3D5CA]/40">
    <div className="overflow-hidden rounded-xl border border-[#E3D5CA]/60 bg-[#FFF0F3]/30">
      <img
        src={cert.image}
        alt={`${cert.title} certificate`}
        className="w-full h-auto max-h-64 object-contain transition-transform duration-500 group-hover:scale-[1.02]"
      />
    </div>

    <div className="mt-3 flex items-center justify-between text-[11px] font-mono">
      <span className="text-[#292526]/50">
        Certificate Evidence
      </span>

      <span className="text-emerald-700 font-sans font-medium flex items-center gap-1">
        <ShieldCheck size={12} />
        Verified Competency
      </span>
    </div>
  </div>
)}
                </div>
              ))}
            </div>

            {/* Quick Education Highlight Box */}
            <div className="p-6 rounded-2xl bg-white border border-[#E3D5CA] space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#292526]/50 block">
                Academic Degree
              </span>
              <p className="font-serif text-xl text-[#292526]">
                S1 Information Systems
              </p>
              <p className="text-xs text-[#292526]/70">
                Telkom University Purwokerto &bull; 2022 &mdash; 2026
              </p>
              <div className="pt-2 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#FFF0F3] text-xs font-mono font-medium text-[#292526] border border-[#FFAFCC]/40">
                  GPA: 3.92 / 4.00
                </span>
                <span className="text-[11px] text-[#292526]/50">Graduation Project Passed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
