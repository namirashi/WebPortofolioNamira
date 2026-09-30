import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hasGithub = PERSONAL_INFO.github && PERSONAL_INFO.github.trim() !== '' && !PERSONAL_INFO.github.includes('[EDIT THIS');

  return (
    <footer className="bg-white py-12 md:py-16 border-t border-[#E3D5CA]/50 text-[#292526]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-[#E3D5CA]/40">
          <div className="space-y-2">
            <h3 className="font-serif text-3xl md:text-4xl text-[#292526]">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-xs font-mono tracking-widest uppercase text-[#FFAFCC] font-semibold">
              {PERSONAL_INFO.role} &bull; {PERSONAL_INFO.location}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm font-sans">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#292526]/70 hover:text-[#292526] hover:underline decoration-[#FFAFCC] transition-colors"
              data-cursor="LINKEDIN"
            >
              LinkedIn
            </a>

            {hasGithub ? (
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#292526]/70 hover:text-[#292526] hover:underline decoration-[#FFAFCC] transition-colors"
                data-cursor="GITHUB"
              >
                GitHub
              </a>
            ) : (
              <span className="text-[#292526]/40 text-xs font-mono">
                GitHub: [EDIT THIS]
              </span>
            )}

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-[#292526]/70 hover:text-[#292526] hover:underline decoration-[#FFAFCC] transition-colors"
              data-cursor="EMAIL"
            >
              Email
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#292526] hover:text-[#FFAFCC] transition-colors ml-auto md:ml-4 py-1 px-3 rounded-full bg-[#FFF0F3] border border-[#E3D5CA]/60"
              data-cursor="TOP"
            >
              <span>Back to top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#292526]/50 gap-4">
          <p>© 2026 {PERSONAL_INFO.name}. All rights reserved.</p>
          <p>Crafted with Clean Code &bull; React &bull; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
