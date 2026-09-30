import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-white text-[#292526] selection:bg-[#FFAFCC]/40 selection:text-[#292526]">
        {/* 1. Thin Scroll Progress Indicator */}
        <ScrollProgress />

        {/* 2. Desktop Custom Tactile Cursor */}
        <CustomCursor />

        {/* 3. Minimal Sticky Navigation */}
        <Navbar />

        <main>
          {/* 4. Hero Section */}
          <Hero />

          {/* 5. Editorial Marquee Divider (Soft blush) */}
          <Marquee bg="bg-[#FFF0F3]" serif={false} />

          {/* 6. About Section (Soft background) */}
          <About />

          {/* 7. Featured & Selected Projects (White background) */}
          <Projects />

          {/* 8. Secondary Marquee Divider (Warm neutral) */}
          <Marquee
            bg="bg-[#E3D5CA]/40"
            reverse={true}
            serif={true}
            items={[
              "FRONTEND DEVELOPMENT",
              "UI/UX DESIGN",
              "WEB DEVELOPMENT",
              "SYSTEM ANALYSIS",
              "RESPONSIVE INTERFACES"
            ]}
          />

          {/* 9. Experience & Certifications (Timeline & Credential cards) */}
          <Experience />

          {/* 10. Skills & Organizational Experience (White background) */}
          <Skills />

          {/* 11. Contact Section (Soft blush background) */}
          <Contact />
        </main>

        {/* 12. Editorial Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
