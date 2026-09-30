import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, ExternalLink, Play, Smartphone, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS } from '../data/portfolioData';
import ProjectVisual from './ProjectVisual';
import MagneticButton from './MagneticButton';
import CaseStudyModal from './CaseStudyModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProject = PROJECTS.find((p) => p.isFeatured) || PROJECTS[0];
  const supportingProjects = PROJECTS.filter((p) => !p.isFeatured);

  const openCaseStudy = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeCaseStudy = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-24 md:py-36 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 pb-8 border-b border-[#E3D5CA]/50 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#292526]/50">
              02 &mdash; Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#292526]">
              Selected <span className="italic font-normal">Work.</span>
            </h2>
            <p className="text-base md:text-lg text-[#292526]/70 font-light leading-relaxed">
              A collection of projects I've worked on across web development, UI/UX, system analysis, and application development.
            </p>
          </div>
          <div className="text-xs font-mono text-[#292526]/40 uppercase tracking-widest">
            Showing 05 Projects
          </div>
        </div>

        {/* 01 — FEATURED PROJECT: WANDA BEAUTY SALON (Dominant Editorial Card) */}
        <div className="mb-20">
          <div
            onClick={() => openCaseStudy(featuredProject)}
            data-cursor="EXPLORE"
            className="group relative bg-[#FFF0F3]/30 border border-[#E3D5CA] rounded-3xl p-6 md:p-10 lg:p-12 hover:border-[#FFAFCC] hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden"
          >
            {/* Soft background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFAFCC]/20 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#FFAFCC] text-[#292526] text-[11px] font-mono font-semibold tracking-wider uppercase">
                    {featuredProject.featuredLabel}
                  </span>
                  <span className="text-xs font-mono text-[#292526]/50">
                    #{featuredProject.number} &bull; {featuredProject.year}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#292526] group-hover:text-[#292526] transition-colors leading-tight">
                    {featuredProject.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#292526]/75 font-sans font-light">
                    {featuredProject.subtitle}
                  </p>
                </div>

                {/* Accent line draws on hover */}
                <div className="w-12 h-0.5 bg-[#FFAFCC] group-hover:w-28 transition-all duration-500 ease-out" />

                <p className="text-sm md:text-base text-[#292526]/80 font-light leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Role and Tech Tags */}
                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {featuredProject.role.map((r, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-sans bg-white border border-[#E3D5CA]/70 text-[#292526]/80"
                      >
                        {r}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {featuredProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-[#FFF0F3] text-[#292526] border border-[#FFAFCC]/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interactive CTA buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <MagneticButton
                    onClick={(e) => {
                      e.stopPropagation();
                      openCaseStudy(featuredProject);
                    }}
                    variant="primary"
                    cursorText="VIEW"
                    className="text-xs px-6 py-3"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </MagneticButton>

                  {/* Conditional Screen Record / Video Demo */}
                  {featuredProject.videoDemo && (
                    <MagneticButton
                      href={featuredProject.videoDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      cursorText="WATCH"
                      className="text-xs px-5 py-3"
                    >
                      <Play size={13} className="fill-current text-[#FFAFCC]" />
                      <span>Screen Record</span>
                    </MagneticButton>
                  )}

                  {/* Conditional GitHub / Live Demo based on Requirement 35 */}
                  {featuredProject.liveDemo && (
                    <MagneticButton
                      href={featuredProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      cursorText="VISIT"
                      className="text-xs px-5 py-3"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} />
                    </MagneticButton>
                  )}

                  {featuredProject.github && (
                    <MagneticButton
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      cursorText="CODE"
                      className="text-xs px-5 py-3"
                    >
                      <GithubIcon size={14} />
                      <span>GitHub</span>
                    </MagneticButton>
                  )}
                </div>
              </div>

              {/* Right Visual (Interactive 3D tilt & zoom on hover) */}
              <div className="lg:col-span-6 relative group-hover:scale-[1.02] transition-transform duration-500 ease-out">
                <div className="relative rounded-2xl overflow-hidden border border-[#E3D5CA] shadow-md bg-white">
                  <ProjectVisual project={featuredProject} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 02-05 — SUPPORTING PROJECTS (Asymmetrical Editorial Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {supportingProjects.map((project, index) => {
            return (
              <div
                key={project.id}
                onClick={() => openCaseStudy(project)}
                data-cursor="EXPLORE"
                className={`group relative bg-white border border-[#E3D5CA] rounded-3xl p-6 md:p-8 hover:border-[#FFAFCC] hover:shadow-lg transition-all duration-400 cursor-pointer flex flex-col justify-between ${
                  index === 1 ? 'md:translate-y-6' : ''
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E3D5CA]/40">
                    <span className="text-xs font-mono font-bold text-[#FFAFCC]">
                      #{project.number}
                    </span>
                    <span className="text-xs font-mono text-[#292526]/50 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Visual Preview */}
                  <div className="mb-6 rounded-xl overflow-hidden border border-[#E3D5CA]/50 group-hover:scale-[1.01] transition-transform duration-300">
                    <ProjectVisual project={project} />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h4 className="text-2xl font-serif text-[#292526] group-hover:text-[#FFAFCC] transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs font-sans text-[#292526]/60">
                      {project.subtitle} &bull; {project.year}
                    </p>
                    <p className="text-sm text-[#292526]/75 font-light pt-1 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack pill tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#FFF0F3] text-[#292526] border border-[#FFAFCC]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer / CTA link */}
                <div className="pt-6 mt-6 border-t border-[#E3D5CA]/40 flex items-center justify-between">
                  <span className="text-xs font-medium text-[#292526] group-hover:text-[#FFAFCC] transition-colors flex items-center gap-1.5">
                    <span>View Case Study</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                  <div className="flex items-center gap-2">
                    {project.videoDemo && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#292526] bg-[#FFF0F3] px-2 py-0.5 rounded border border-[#FFAFCC]/40">
                        <Play size={9} className="fill-current text-[#FFAFCC]" /> Video
                      </span>
                    )}
                    {project.github && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#292526] bg-neutral-50 px-2 py-0.5 rounded border border-neutral-200">
                        <GithubIcon size={10} /> Git
                      </span>
                    )}
                    <span className="text-[11px] font-mono text-[#292526]/40 uppercase hidden sm:inline">
                      {project.type}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal System */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeCaseStudy}
      />
    </section>
  );
}
