import React, { useEffect, useState } from 'react';

function checkIsTouch() {
  if (typeof window === 'undefined') return true;
  const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return hasTouch || !mediaQuery.matches || motionQuery.matches;
}

export default function CustomCursor() {
  const [isTouch] = useState(checkIsTouch);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [targetPos, setTargetPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isTouch) return;

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Inspect target element for custom cursor triggers
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const text = target.getAttribute('data-cursor');
        setCursorText(text || '');
        setIsHovered(true);
      } else {
        const isClickable = e.target.closest('a, button, [role="button"], input, textarea, select');
        if (isClickable) {
          setCursorText('');
          setIsHovered(true);
        } else {
          setCursorText('');
          setIsHovered(false);
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isTouch]);

  // Smooth lerp for outer circle
  useEffect(() => {
    if (isTouch) return;
    let animId;
    const lerp = () => {
      setTargetPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.22,
        y: prev.y + (pos.y - prev.y) * 0.22
      }));
      animId = requestAnimationFrame(lerp);
    };
    animId = requestAnimationFrame(lerp);
    return () => cancelAnimationFrame(animId);
  }, [pos, isTouch]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Central pinpoint dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#292526] transition-opacity duration-200"
        style={{
          width: '5px',
          height: '5px',
          transform: `translate3d(${pos.x - 2.5}px, ${pos.y - 2.5}px, 0)`,
          opacity: isHovered && cursorText ? 0 : 0.8
        }}
      />

      {/* Smooth outer ring with optional text */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center rounded-full transition-[width,height,background-color,border-color] duration-300 ease-out ${
          cursorText
            ? 'bg-[#FFAFCC] text-[#292526] border border-[#292526]/20 shadow-md'
            : isHovered
            ? 'w-10 h-10 border border-[#FFAFCC] bg-[#FFAFCC]/15'
            : 'w-7 h-7 border border-[#292526]/30 bg-transparent'
        }`}
        style={{
          width: cursorText ? '64px' : undefined,
          height: cursorText ? '64px' : undefined,
          transform: `translate3d(${targetPos.x - (cursorText ? 32 : isHovered ? 20 : 14)}px, ${
            targetPos.y - (cursorText ? 32 : isHovered ? 20 : 14)
          }px, 0)`
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-sans font-semibold tracking-wider uppercase select-none">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
