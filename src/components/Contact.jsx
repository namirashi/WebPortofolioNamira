import React, { useState } from 'react';
import { Phone, Download, ArrowUpRight, Copy, Check, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import MagneticButton from './MagneticButton';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const hasGithub = PERSONAL_INFO.github && PERSONAL_INFO.github.trim() !== '' && !PERSONAL_INFO.github.includes('[EDIT THIS');

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#FFF0F3]/40 border-t border-[#E3D5CA]/50 relative overflow-hidden">
      {/* Subtle animated background shapes */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#FFAFCC]/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#E3D5CA]/30 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-4xl space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#FFAFCC]/40 text-xs font-mono text-[#292526]">
              <Sparkles size={12} className="text-[#FFAFCC]" />
              <span>Let's Connect &amp; Collaborate</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#292526] leading-[1.1]">
              Let's build something <br />
              <span className="italic font-normal underline decoration-[#FFAFCC] decoration-wavy decoration-2 underline-offset-8">
                meaningful.
              </span>
            </h2>

            <p className="text-lg md:text-xl text-[#292526]/75 font-light max-w-2xl pt-2 leading-relaxed">
              I'm open to opportunities where I can learn, contribute, and grow through technology and digital product development.
            </p>
          </div>

          {/* Email Card with Quick Copy & Direct Mailto */}
          <div className="p-6 md:p-8 rounded-3xl bg-white border border-[#E3D5CA] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-[#292526]/50">
                Direct Email Inquiries
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-serif text-2xl sm:text-3xl text-[#292526] hover:text-[#FFAFCC] transition-colors relative group"
                  data-cursor="EMAIL"
                >
                  <span>{PERSONAL_INFO.email}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FFAFCC] group-hover:w-full transition-all duration-300" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FFF0F3] hover:bg-[#FFAFCC] text-[#292526] text-xs font-sans font-medium transition-colors"
                data-cursor="COPY"
              >
                {copied ? <Check size={14} className="text-emerald-700" /> : <Copy size={14} />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Email'}</span>
              </button>

              <MagneticButton
                href={`mailto:${PERSONAL_INFO.email}`}
                variant="primary"
                cursorText="MAIL"
                className="text-xs px-5 py-2.5"
              >
                <span>Get In Touch</span>
                <ArrowUpRight size={14} />
              </MagneticButton>
            </div>
          </div>

          {/* Contact Details & Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white border border-[#E3D5CA] hover:border-[#FFAFCC] hover:shadow-sm transition-all duration-200 group flex items-center justify-between"
              data-cursor="VISIT"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFF0F3] group-hover:bg-[#FFAFCC] flex items-center justify-center text-[#292526] transition-colors">
                  <LinkedinIcon size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#292526]/50">Professional</p>
                  <p className="text-sm font-semibold text-[#292526]">LinkedIn Profile</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-[#292526]/40 group-hover:text-[#292526] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* GitHub */}
            {hasGithub ? (
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white border border-[#E3D5CA] hover:border-[#FFAFCC] hover:shadow-sm transition-all duration-200 group flex items-center justify-between"
                data-cursor="CODE"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF0F3] group-hover:bg-[#FFAFCC] flex items-center justify-center text-[#292526] transition-colors">
                    <GithubIcon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-[#292526]/50">Code Repos</p>
                    <p className="text-sm font-semibold text-[#292526]">GitHub</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-[#292526]/40 group-hover:text-[#292526] transition-colors" />
              </a>
            ) : (
              <div className="p-5 rounded-2xl bg-white/70 border border-[#E3D5CA]/70 flex items-center justify-between opacity-80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF0F3] flex items-center justify-center text-[#292526]/60">
                    <GithubIcon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-[#292526]/50">GitHub</p>
                    <p className="text-xs font-mono text-[#292526]/60">[EDIT THIS — ADD GITHUB URL]</p>
                  </div>
                </div>
              </div>
            )}

            {/* Phone */}
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="p-5 rounded-2xl bg-white border border-[#E3D5CA] hover:border-[#FFAFCC] hover:shadow-sm transition-all duration-200 group flex items-center justify-between"
              data-cursor="CALL"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFF0F3] group-hover:bg-[#FFAFCC] flex items-center justify-center text-[#292526] transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#292526]/50">Phone / WhatsApp</p>
                  <p className="text-sm font-semibold text-[#292526]">{PERSONAL_INFO.phone}</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-[#292526]/40 group-hover:text-[#292526] transition-colors" />
            </a>
          </div>

          {/* Download CV CTA Box (Requirement 30) */}
          <div className="p-6 rounded-2xl bg-white border border-[#E3D5CA] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-0.5">
              <h4 className="font-serif text-xl text-[#292526]">
                Looking for a comprehensive resume?
              </h4>
              <p className="text-xs text-[#292526]/70 font-light">
                Download a clean, formatted PDF copy of my curriculum vitae.
              </p>
            </div>

            <MagneticButton
              href={PERSONAL_INFO.cvFile}
              download="Namira-Shifwah-Kumandani-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              cursorText="DOWNLOAD"
              className="text-xs px-6 py-3 whitespace-nowrap"
            >
              <Download size={14} />
              <span>Download CV (PDF)</span>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
