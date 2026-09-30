import React from 'react';
import { Cpu, Wrench, HeartHandshake, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { SKILLS, ORGANIZATIONAL_EXPERIENCES } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-36 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 space-y-3 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#292526]/50">
            04 &mdash; Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#292526]">
            Skills &amp; <span className="italic font-normal">Leadership.</span>
          </h2>
          <p className="text-base md:text-lg text-[#292526]/70 font-light leading-relaxed">
            Technical competencies, engineering toolchains, and collaborative student organization contributions.
          </p>
        </div>

        {/* Skills Interactive Chips Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {/* 1. Development & Frontend Skills */}
          <div className="p-6 md:p-8 rounded-3xl bg-[#FFF0F3]/30 border border-[#E3D5CA] hover:border-[#FFAFCC] transition-all duration-300 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E3D5CA]/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#FFAFCC]/30 flex items-center justify-center text-[#292526]">
                  <Cpu size={16} />
                </div>
                <h3 className="font-serif text-xl text-[#292526]">Development Skills</h3>
              </div>
              <span className="text-[10px] font-mono text-[#292526]/40 uppercase">Frontend</span>
            </div>

            <p className="text-xs text-[#292526]/60 font-light">
              Core technologies and architectural methodologies for building robust web applications.
            </p>

            <div className="flex flex-wrap gap-2">
              {SKILLS.developmentSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group/chip inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-[#E3D5CA]/80 hover:border-[#FFAFCC] hover:bg-[#FFAFCC]/15 hover:-translate-y-0.5 transition-all duration-200 cursor-default select-none shadow-2xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFAFCC] group-hover/chip:scale-125 transition-transform" />
                  <span className="text-xs font-sans font-medium text-[#292526]">{skill}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 text-[11px] font-mono text-[#292526]/40 italic">
              [EDIT THIS — ADD YOUR FRONTEND TECHNOLOGIES IN portfolioData.js]
            </div>
          </div>

          {/* 2. Tools & Technical */}
          <div className="p-6 md:p-8 rounded-3xl bg-white border border-[#E3D5CA] hover:border-[#FFAFCC] transition-all duration-300 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E3D5CA]/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#FFF0F3] border border-[#FFAFCC]/40 flex items-center justify-center text-[#292526]">
                  <Wrench size={16} />
                </div>
                <h3 className="font-serif text-xl text-[#292526]">Tools &amp; Technical</h3>
              </div>
              <span className="text-[10px] font-mono text-[#292526]/40 uppercase">Software</span>
            </div>

            <p className="text-xs text-[#292526]/60 font-light">
              Software suites, design environments, and analytical productivity platforms.
            </p>

            <div className="flex flex-wrap gap-2">
              {SKILLS.toolsAndTechnical.map((tool, index) => (
                <div
                  key={index}
                  className="group/chip inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FFF0F3]/30 border border-[#E3D5CA]/70 hover:border-[#FFAFCC] hover:bg-white hover:-translate-y-0.5 transition-all duration-200 cursor-default select-none"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D6CCC2] group-hover/chip:bg-[#FFAFCC] transition-colors" />
                  <span className="text-xs font-sans font-medium text-[#292526]">{tool}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Personal & Collaborative Skills */}
          <div className="p-6 md:p-8 rounded-3xl bg-[#FFF0F3]/30 border border-[#E3D5CA] hover:border-[#FFAFCC] transition-all duration-300 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E3D5CA]/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#FFAFCC]/30 flex items-center justify-center text-[#292526]">
                  <HeartHandshake size={16} />
                </div>
                <h3 className="font-serif text-xl text-[#292526]">Personal Skills</h3>
              </div>
              <span className="text-[10px] font-mono text-[#292526]/40 uppercase">Mindset</span>
            </div>

            <p className="text-xs text-[#292526]/60 font-light">
              Collaborative strengths driving cross-functional project success and continuous learning.
            </p>

            <div className="flex flex-wrap gap-2">
              {SKILLS.personalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group/chip inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-[#E3D5CA]/80 hover:border-[#FFAFCC] hover:bg-[#FFAFCC]/15 hover:-translate-y-0.5 transition-all duration-200 cursor-default select-none shadow-2xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFAFCC]" />
                  <span className="text-xs font-sans font-medium text-[#292526]">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Requirement 28: Organizational Experience (Visually lighter) */}
        <div className="pt-8 border-t border-[#E3D5CA]/50">
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#292526]/50">
                Community &amp; Campus Involvement
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-[#292526]">
                Organizational <span className="italic font-normal">Experience.</span>
              </h3>
            </div>
            <span className="text-xs font-mono text-[#292526]/40 hidden sm:inline">
              HMSI &bull; Universitas Telkom Purwokerto
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ORGANIZATIONAL_EXPERIENCES.map((org, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-white border border-[#E3D5CA]/60 hover:border-[#FFAFCC] hover:bg-[#FFF0F3]/30 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-[#292526]/50 mb-1">
                  <span>0{index + 1}</span>
                  <span className="text-[#FFAFCC] font-semibold">{org.period}</span>
                </div>
                <h4 className="font-sans text-sm font-semibold text-[#292526] group-hover:text-[#292526] transition-colors">
                  {org.role}
                </h4>
                <p className="text-xs text-[#292526]/65 mt-0.5">
                  {org.organization}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
