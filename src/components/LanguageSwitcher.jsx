import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

const LANGUAGES = [
  { code: 'id', label: 'ID', name: 'Bahasa Indonesia' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'ko', label: 'KO', name: '한국어' },
];

export default function LanguageSwitcher({ className = '' }) {
  const { lang, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center gap-1 p-1 rounded-full bg-[#FFF0F3]/80 border border-[#E3D5CA]/70 backdrop-blur-xs select-none ${className}`}
      role="group"
      aria-label="Language Selector"
    >
      <div className="pl-1.5 pr-0.5 text-[#292526]/50 hidden sm:block">
        <Globe size={13} />
      </div>

      {LANGUAGES.map((l) => {
        const isActive = lang === l.code;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLanguage(l.code)}
            title={l.name}
            data-cursor="LANG"
            className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium transition-all duration-200 ${
              isActive
                ? 'bg-[#292526] text-white shadow-xs'
                : 'text-[#292526]/70 hover:text-[#292526] hover:bg-white/60'
            }`}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
