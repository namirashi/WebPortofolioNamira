import React from 'react';
import { MARQUEE_ITEMS } from '../data/portfolioData';

export default function Marquee({
  items = MARQUEE_ITEMS,
  bg = 'bg-[#FFF0F3]',
  reverse = false,
  serif = false,
  className = ''
}) {
  // Duplicate items 4 times to ensure seamless infinite looping
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden py-3 md:py-4 border-y border-[#E3D5CA]/50 select-none ${bg} ${className}`}
    >
      <div className={reverse ? 'animate-marquee-reverse' : 'animate-marquee'}>
        {repeated.map((item, index) => (
          <div key={index} className="flex items-center space-x-6 mx-3 shrink-0">
            <span
              className={`text-xs md:text-sm tracking-[0.2em] font-medium text-[#292526]/80 ${
                serif ? 'font-serif text-base md:text-lg italic text-[#292526]' : 'font-sans'
              }`}
            >
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFAFCC]" />
          </div>
        ))}
      </div>
    </div>
  );
}
