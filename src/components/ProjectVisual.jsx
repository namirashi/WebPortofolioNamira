import React, { useState } from 'react';
import { Calendar, Sparkles, Activity, ShieldCheck, BarChart3, Car, MapPin, Eye } from 'lucide-react';

export default function ProjectVisual({ project, className = '' }) {
  const [hasImageError, setHasImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Check if project has a coverImage specified
  const imageSrc = project.coverImage || '';
  const canShowImage = Boolean(imageSrc) && !hasImageError;

  return (
    <div className={`relative w-full h-full min-h-[260px] md:min-h-[340px] overflow-hidden rounded-xl select-none group/visual ${className}`}>
      {/* 1. REAL USER IMAGE (If provided and loads successfully) */}
      {canShowImage && (
        <div className="relative w-full h-full min-h-[260px] md:min-h-[340px] bg-neutral-100 flex items-center justify-center overflow-hidden">
          {/* Subtle browser mockup header for desktop web apps */}
          {project.deviceType !== 'mobile' && (
            <div className="absolute top-0 left-0 right-0 z-10 bg-white/90 backdrop-blur-xs px-3 py-2 border-b border-neutral-200/80 flex items-center justify-between">
              <div className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFAFCC]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#E3D5CA]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#D6CCC2]"></span>
                <span className="ml-2 text-[10px] font-mono text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded truncate max-w-[200px]">
                  {project.title.toLowerCase().replace(/\s+/g, '')}.app
                </span>
              </div>
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest hidden sm:inline">
                {project.category}
              </span>
            </div>
          )}

          {/* Actual Image with smooth transition and zoom */}
          <img
            src={imageSrc}
            alt={project.title}
            onLoad={() => setImageLoaded(true)}
            onError={() => setHasImageError(true)}
            className={`w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover/visual:scale-105 ${
              project.deviceType !== 'mobile' ? 'pt-8' : ''
            } ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-98'}`}
          />

          {/* Subtle dark gradient overlay at bottom for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none opacity-0 group-hover/visual:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* 2. BESPOKE EDITORIAL WIREFRAME MOCKUP (Fallback if image not uploaded yet or loading error) */}
      {(!canShowImage || !imageLoaded) && (
        <div
          className={`w-full h-full min-h-[260px] md:min-h-[340px] flex flex-col bg-[#FFF0F3]/30 border border-[#E3D5CA]/50 rounded-xl p-4 md:p-6 transition-transform duration-500 ${
            canShowImage ? 'absolute inset-0 z-0' : 'relative'
          }`}
        >
          {project.id === 'wanda-beauty-salon' && (
            <div className="w-full h-full flex flex-col justify-between bg-white rounded-lg p-4 md:p-6 shadow-sm border border-[#FFAFCC]/30">
              {/* Browser top bar */}
              <div className="flex items-center justify-between border-b border-[#E3D5CA]/40 pb-3 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFAFCC]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E3D5CA]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D6CCC2]"></span>
                  <span className="ml-3 text-[11px] font-mono text-[#292526]/50 bg-[#FFF0F3] px-2 py-0.5 rounded">
                    wandasalon.app/booking
                  </span>
                </div>
                <span className="text-[10px] tracking-widest uppercase font-medium text-[#292526]/40">
                  Thesis System
                </span>
              </div>

              {/* Mockup Content */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 flex-1">
                <div className="md:col-span-7 space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FFF0F3] text-[11px] font-medium text-[#292526]">
                    <Sparkles size={12} className="text-[#FFAFCC]" />
                    <span>Salon Booking &amp; CRM</span>
                  </div>
                  <h4 className="font-serif text-xl md:text-2xl text-[#292526]">
                    Elevating Salon Management with Seamless Digital Experience
                  </h4>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="p-2.5 rounded-lg bg-[#FFF0F3]/50 border border-[#FFAFCC]/20">
                      <p className="text-[10px] text-[#292526]/60">Treatment Schedule</p>
                      <p className="text-xs font-medium text-[#292526] mt-0.5">Automated Slots</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#FFF0F3]/50 border border-[#FFAFCC]/20">
                      <p className="text-[10px] text-[#292526]/60">Customer Database</p>
                      <p className="text-xs font-medium text-[#292526] mt-0.5">Profile & History</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5 bg-[#FFF0F3]/40 rounded-lg p-3 flex flex-col justify-between border border-[#E3D5CA]/50">
                  <div className="flex items-center justify-between text-xs text-[#292526]/70 pb-2 border-b border-[#E3D5CA]/30">
                    <span className="flex items-center gap-1 font-medium"><Calendar size={13} /> Select Date</span>
                    <span className="text-[10px] text-[#FFAFCC] font-bold">2026</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5 py-2">
                    {['09:00', '11:00', '14:00', '16:30'].map((time, idx) => (
                      <span
                        key={idx}
                        className={`text-[10px] text-center py-1 rounded transition-colors ${
                          idx === 1
                            ? 'bg-[#FFAFCC] text-white font-medium shadow-xs'
                            : 'bg-white text-[#292526]/70 border border-[#E3D5CA]/30'
                        }`}
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                  <div className="text-[11px] text-center font-medium bg-[#292526] text-white py-1.5 rounded mt-2">
                    Confirm Booking →
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E3D5CA]/40 flex items-center justify-between text-[11px] text-[#292526]/60">
                <span>UI/UX &bull; UML &bull; Web Architecture</span>
                <span className="font-mono text-[#FFAFCC] font-semibold">[01 / THESIS]</span>
              </div>
            </div>
          )}

          {project.id === 'medicaly' && (
            <div className="w-full h-full flex flex-col justify-between bg-white rounded-lg p-4 md:p-6 shadow-sm border border-[#E3D5CA]/60">
              <div className="flex items-center justify-between border-b border-[#E3D5CA]/40 pb-3 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E3D5CA]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D6CCC2]"></span>
                  <span className="ml-3 text-[11px] font-mono text-[#292526]/50 bg-slate-50 px-2 py-0.5 rounded">
                    medicaly.portal/patients
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] uppercase font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  <ShieldCheck size={11} /> BNSP Certified Project
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-xl text-[#292526]">Medical Records &amp; Consultation</h4>
                    <p className="text-xs text-[#292526]/60">Healthcare web application structure</p>
                  </div>
                  <Activity size={24} className="text-emerald-500 opacity-80" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-slate-50 p-2.5 rounded border border-slate-100">
                    <span className="text-[10px] text-slate-500 block">Patient Vitals</span>
                    <span className="text-sm font-semibold text-[#292526]">Normal / 98%</span>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded border border-slate-100">
                    <span className="text-[10px] text-slate-500 block">Consultation</span>
                    <span className="text-sm font-semibold text-[#292526]">Dr. Sp.A</span>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded border border-slate-100">
                    <span className="text-[10px] text-slate-500 block">E-Prescription</span>
                    <span className="text-sm font-semibold text-emerald-600">Verified</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E3D5CA]/40 flex items-center justify-between text-[11px] text-[#292526]/60">
                <span>Web Standards &bull; Data Security &bull; BNSP</span>
                <span className="font-mono text-[#292526]/40">[02 / HEALTHCARE]</span>
              </div>
            </div>
          )}

          {project.id === 'thera-art' && (
            <div className="w-full h-full flex flex-col justify-between bg-white rounded-lg p-4 md:p-6 shadow-sm border border-[#E3D5CA]/60">
              <div className="flex items-center justify-between border-b border-[#E3D5CA]/40 pb-3 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFAFCC]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E3D5CA]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D6CCC2]"></span>
                  <span className="ml-3 text-[11px] font-mono text-[#292526]/50 bg-stone-50 px-2 py-0.5 rounded">
                    thera-art.admin/analytics
                  </span>
                </div>
                <span className="text-[10px] tracking-wider uppercase font-medium text-[#292526]/50">
                  Capstone Dashboard
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-xl text-[#292526]">Thera Art Studio Console</h4>
                    <p className="text-xs text-[#292526]/60">Art therapy inventory &amp; order metrics</p>
                  </div>
                  <BarChart3 size={24} className="text-[#292526]/40" />
                </div>
                <div className="h-14 w-full bg-[#FFF0F3]/30 rounded flex items-end gap-2 px-3 py-2 border border-[#E3D5CA]/30">
                  <div className="w-1/6 bg-[#E3D5CA] h-4 rounded-t"></div>
                  <div className="w-1/6 bg-[#E3D5CA] h-7 rounded-t"></div>
                  <div className="w-1/6 bg-[#FFAFCC] h-10 rounded-t"></div>
                  <div className="w-1/6 bg-[#E3D5CA] h-6 rounded-t"></div>
                  <div className="w-1/6 bg-[#FFAFCC] h-11 rounded-t"></div>
                  <div className="w-1/6 bg-[#292526] h-9 rounded-t"></div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E3D5CA]/40 flex items-center justify-between text-[11px] text-[#292526]/60">
                <span>Admin Dashboard &bull; Analytics &bull; Course Project</span>
                <span className="font-mono text-[#292526]/40">[03 / CAPSTONE]</span>
              </div>
            </div>
          )}

          {project.id === 'drivvy' && (
            <div className="w-full h-full flex flex-col justify-between bg-white rounded-lg p-4 md:p-6 shadow-sm border border-[#E3D5CA]/60">
              <div className="flex items-center justify-between border-b border-[#E3D5CA]/40 pb-3 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFAFCC]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E3D5CA]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D6CCC2]"></span>
                  <span className="ml-3 text-[11px] font-mono text-[#292526]/50 bg-amber-50/50 px-2 py-0.5 rounded">
                    drivvy.app/fleet
                  </span>
                </div>
                <span className="text-[10px] tracking-wider uppercase font-medium text-[#292526]/50">
                  Web Programming Course
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-xl text-[#292526]">Drivvy &mdash; Smart Vehicle Rental</h4>
                    <p className="text-xs text-[#292526]/60">Interactive fleet filtering &amp; reservation system</p>
                  </div>
                  <Car size={24} className="text-[#292526]/40" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#FFF0F3]/40 p-2.5 rounded border border-[#FFAFCC]/20">
                    <span className="text-[10px] text-neutral-500 block">Fleet Availability</span>
                    <span className="text-xs font-medium text-[#292526]">Real-time Filter</span>
                  </div>
                  <div className="bg-[#FFF0F3]/40 p-2.5 rounded border border-[#FFAFCC]/20">
                    <span className="text-[10px] text-neutral-500 block">Pricing Matrix</span>
                    <span className="text-xs font-medium text-[#292526]">Dynamic Calculation</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E3D5CA]/40 flex items-center justify-between text-[11px] text-[#292526]/60">
                <span>Web Programming &bull; Responsive Design</span>
                <span className="font-mono text-[#292526]/40">[05 / DRIVVY]</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Decorative Editorial Watermark */}
      <div className="absolute bottom-2 right-2 text-[10px] font-mono tracking-widest text-[#292526]/40 uppercase pointer-events-none bg-white/70 px-2 py-0.5 rounded">
        {project.type}
      </div>
    </div>
  );
}
