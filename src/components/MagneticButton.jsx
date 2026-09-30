import React, { useRef, useState } from 'react';

export default function MagneticButton({
  children,
  onClick,
  href,
  download,
  target,
  rel,
  className = '',
  variant = 'primary', // 'primary', 'secondary', 'outline', 'text'
  cursorText = 'OPEN',
  disabled = false
}) {
  const buttonRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [textOffset, setTextOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (disabled || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    // Constrain to maximum 6-8px pull
    const pullFactor = 0.25;
    const maxPull = 8;
    const x = Math.max(-maxPull, Math.min(maxPull, deltaX * pullFactor));
    const y = Math.max(-maxPull, Math.min(maxPull, deltaY * pullFactor));

    setOffset({ x, y });
    setTextOffset({ x: x * 0.4, y: y * 0.4 });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
    setTextOffset({ x: 0, y: 0 });
  };

  const baseStyles =
    'relative inline-flex items-center justify-center font-sans text-sm font-medium transition-all duration-300 ease-out select-none active:scale-[0.98] group';

  const variantStyles = {
    primary:
      'bg-[#292526] text-white px-6 py-3 rounded-full hover:bg-[#FFAFCC] hover:text-[#292526] hover:shadow-md hover:shadow-[#FFAFCC]/20',
    secondary:
      'bg-[#FFF0F3] text-[#292526] border border-[#FFAFCC]/60 px-6 py-3 rounded-full hover:bg-[#FFAFCC] hover:text-[#292526] hover:shadow-sm',
    outline:
      'bg-transparent text-[#292526] border border-[#292526]/30 px-6 py-3 rounded-full hover:border-[#292526] hover:bg-[#FFF0F3]',
    text:
      'bg-transparent text-[#292526] p-0 hover:text-[#FFAFCC]'
  };

  const style = {
    transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
    transition: offset.x === 0 && offset.y === 0 ? 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
  };

  const innerStyle = {
    transform: `translate3d(${textOffset.x}px, ${textOffset.y}px, 0)`,
    transition: textOffset.x === 0 && textOffset.y === 0 ? 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
  };

  const content = (
    <span
      style={innerStyle}
      className="inline-flex items-center gap-2 transition-transform duration-200"
    >
      {children}
    </span>
  );

  if (href) {
    return (
      <a
        ref={buttonRef}
        href={href}
        download={download}
        target={target}
        rel={rel}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        data-cursor={cursorText}
        style={style}
        className={`${baseStyles} ${variantStyles[variant] || ''} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onClick}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor={cursorText}
      style={style}
      className={`${baseStyles} ${variantStyles[variant] || ''} ${className}`}
    >
      {content}
    </button>
  );
}
