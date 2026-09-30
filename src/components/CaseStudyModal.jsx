import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Calendar, Layers, CheckCircle2, AlertCircle, Sparkles, Play, Video } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectVisual from './ProjectVisual';
import MagneticButton from './MagneticButton';

export default function CaseStudyModal({ project, isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isOpen && project) {
      document.body.style.overflow = 'hidden';
      timer = setTimeout(() => {
        setMounted(true);
        setActive(true);
      }, 0);
    } else if (mounted) {
      setActive(false);
      timer = setTimeout(() => {
        setMounted(false);
        document.body.style.overflow = '';
      }, 400);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isOpen, project, mounted]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!mounted || !project) return null;

  // Determine if valid external links exist (Requirement 35)
  const hasValidLiveDemo = project.liveDemo && project.liveDemo.trim() !== '' && !project.liveDemo.includes('[EDIT THIS');
  const hasValidGithub = project.github && project.github.trim() !== '' && !project.github.includes('[EDIT THIS');
  const hasValidVideoDemo = project.videoDemo && project.videoDemo.trim() !== '' && !project.videoDemo.includes('[ADD SCREEN RECORD');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 lg:p-12 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-[#292526]/70 backdrop-blur-md transition-opacity duration-500 ease-out ${
          active ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Case Study Container */}
      <div
        className={`relative w-full max-w-5xl bg-white md:rounded-3xl shadow-2xl border border-[#E3D5CA] overflow-hidden my-auto max-h-screen md:max-h-[92vh] overflow-y-auto transition-all duration-500 ease-out z-10 ${
          active
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-8'
        }`}
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 md:px-10 py-4 border-b border-[#E3D5CA]/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#FFAFCC]">
              PROJECT #{project.number}
            </span>
            <span className="text-xs font-mono text-[#292526]/50 uppercase tracking-widest hidden sm:inline">
              &bull; {project.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#FFF0F3] hover:bg-[#FFAFCC] text-[#292526] transition-colors focus:outline-none"
              aria-label="Close Case Study"
              data-cursor="CLOSE"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Hero / Cover Visual */}
        <div className="p-6 md:p-10 bg-[#FFF0F3]/30 border-b border-[#E3D5CA]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              {project.isFeatured && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFAFCC]/30 text-[#292526] text-xs font-mono font-medium">
                  <Sparkles size={12} /> {project.featuredLabel || 'FEATURED PROJECT'}
                </span>
              )}
              <h1 className="font-serif text-3xl md:text-5xl text-[#292526] leading-tight">
                {project.title}
              </h1>
              <p className="font-sans text-base md:text-lg text-[#292526]/75 font-light">
                {project.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-[#292526]/60">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-[#FFAFCC]" />
                  Year: {project.year}
                </span>
                <span className="flex items-center gap-1.5">
                  <Layers size={14} className="text-[#FFAFCC]" />
                  Type: {project.type}
                </span>
              </div>
            </div>

            {/* Interactive Mockup Visual */}
            <div className="lg:col-span-5">
              <ProjectVisual project={project} isDetail={true} className="shadow-md rounded-xl" />
            </div>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 md:p-10 space-y-10">
          {/* Overview & Role Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Overview */}
            <div className="md:col-span-8 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#292526]/50">
                Project Overview
              </h3>
              <p className="text-base text-[#292526] font-light leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* My Role */}
            <div className="md:col-span-4 space-y-3 p-5 rounded-2xl bg-[#FFF0F3]/40 border border-[#E3D5CA]/50">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#292526]/60">
                My Role
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {Array.isArray(project.role) ? (
                  project.role.map((r, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-xs font-sans bg-white border border-[#E3D5CA] text-[#292526]"
                    >
                      {r}
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-[#292526]">{project.role}</span>
                )}
              </div>
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#292526]/50">
              Technologies &amp; Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#FFF0F3] text-[#292526] border border-[#FFAFCC]/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#292526]/50">
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-[#E3D5CA]/70 flex items-start gap-3"
                >
                  <CheckCircle2 size={16} className="text-[#FFAFCC] mt-0.5 shrink-0" />
                  <span className="text-xs md:text-sm font-sans text-[#292526]/80">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#FFF0F3]/30 border border-[#E3D5CA]/50 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#292526]/60 flex items-center gap-1.5">
                <AlertCircle size={14} className="text-amber-600" /> Challenge
              </span>
              <p className="text-sm text-[#292526]/80 font-light leading-relaxed">
                {project.challenges}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFF0F3]/50 border border-[#FFAFCC]/30 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#292526]/60 flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-600" /> Solution &amp; Approach
              </span>
              <p className="text-sm text-[#292526]/80 font-light leading-relaxed">
                {project.solutions}
              </p>
            </div>
          </div>

          {/* Project Outcome */}
          {project.outcome && (
            <div className="p-6 rounded-2xl bg-white border border-[#E3D5CA] space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#292526]/50">
                Outcome &amp; Key Takeaways
              </span>
              <p className="text-sm text-[#292526]/80 leading-relaxed font-light">
                {project.outcome}
              </p>
            </div>
          )}

          {/* Screen Recording / Video Showcase Section */}
          {hasValidVideoDemo && (
            <div className="p-6 md:p-8 rounded-2xl bg-[#FFF0F3]/40 border border-[#FFAFCC]/50 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#292526]/70 flex items-center gap-2 font-semibold">
                  <Video size={16} className="text-[#FFAFCC]" /> Screen Recording &amp; Feature Walkthrough
                </span>
                <span className="text-[11px] font-mono text-[#FFAFCC] bg-[#292526] px-2.5 py-0.5 rounded-full font-medium">
                  Video Demo
                </span>
              </div>
              <p className="text-sm text-[#292526]/80 font-light">
                Watch a complete walkthrough demonstrating the application workflow, core features, and responsive interface interactions.
              </p>
              <div>
                <MagneticButton
                  href={project.videoDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  cursorText="PLAY"
                  className="text-xs px-6 py-3"
                >
                  <Play size={14} className="fill-current text-[#FFAFCC]" />
                  <span>Play Screen Recording &rarr;</span>
                </MagneticButton>
              </div>
            </div>
          )}

          {/* Action Links (Requirement 35 - ONLY shown if URL provided!) */}
          <div className="pt-6 border-t border-[#E3D5CA]/50 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {hasValidVideoDemo && (
                <MagneticButton
                  href={project.videoDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  cursorText="WATCH"
                  className="text-xs px-5 py-2.5"
                >
                  <Play size={13} className="fill-current text-[#FFAFCC]" />
                  <span>Screen Record</span>
                </MagneticButton>
              )}

              {hasValidLiveDemo && (
                <MagneticButton
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  cursorText="VISIT"
                  className="text-xs px-5 py-2.5"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={14} />
                </MagneticButton>
              )}

              {hasValidGithub && (
                <MagneticButton
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant={hasValidVideoDemo ? "secondary" : "primary"}
                  cursorText="CODE"
                  className="text-xs px-5 py-2.5"
                >
                  <GithubIcon size={14} />
                  <span>GitHub Repository</span>
                </MagneticButton>
              )}

              {!hasValidLiveDemo && !hasValidGithub && !hasValidVideoDemo && (
                <span className="text-xs font-mono text-[#292526]/40 italic">
                  [Repository, screen record, and demo link placeholders configured — will appear automatically upon adding URLs]
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-sans text-[#292526]/60 hover:text-[#292526] underline transition-colors"
            >
              Back to Projects &uarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
