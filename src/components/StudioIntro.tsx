import React from 'react';
import { useScrollReveal, useScrollY } from '../hooks/useScrollReveal';

export const StudioIntro: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.2 });
  const scrollY = useScrollY();

  return (
    <section
      ref={ref}
      id="studio"
      className="relative py-28 sm:py-36 lg:py-44 px-6 sm:px-10 bg-[#F1E8D8] text-[#241519] overflow-hidden border-b border-[#77645A]/20"
    >
      {/* Subtle parchment drafting grid */}
      <div className="absolute inset-0 bg-grid-parchment opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Typography with Line-by-Line Reveals */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Small Label in Muted Clay */}
            <div
              className={`mb-6 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="text-xs font-sans tracking-[0.28em] uppercase text-[#B86F5E] font-medium">
                The Studio
              </span>
            </div>

            {/* Large Heading with Line-by-Line Masked Entrance in Deep Oxblood */}
            <div className="mb-8">
              <div className="overflow-hidden mb-1">
                <h2
                  className={`font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] text-[#241519] transition-transform duration-1000 ease-out ${
                    isVisible ? 'translate-y-0' : 'translate-y-full'
                  }`}
                  style={{ transitionDelay: '150ms' }}
                >
                  Designing spaces
                </h2>
              </div>
              <div className="overflow-hidden">
                <span
                  className={`block font-serif text-4xl sm:text-6xl lg:text-7xl font-light italic tracking-tight leading-[1.08] text-[#241519] transition-transform duration-1000 ease-out ${
                    isVisible ? 'translate-y-0' : 'translate-y-full'
                  }`}
                  style={{ transitionDelay: '300ms' }}
                >
                  with intention.
                </span>
              </div>
            </div>

            {/* Supporting Paragraph */}
            <p
              className={`text-lg sm:text-xl text-[#43282F] font-sans font-light leading-relaxed max-w-xl mb-10 transition-all duration-800 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '480ms' }}
            >
              We create environments that balance architectural clarity with warmth, materiality, and everyday function.
            </p>

            {/* Studio Metadata & Editorial Philosophy */}
            <div
              className={`pt-8 border-t border-[#77645A]/25 grid grid-cols-2 gap-8 text-xs font-sans tracking-[0.14em] uppercase text-[#77645A] transition-all duration-800 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '650ms' }}
            >
              <div>
                <span className="block text-[#241519] font-medium mb-1">Location</span>
                <span>Fitzroy, Melbourne</span>
              </div>
              <div>
                <span className="block text-[#241519] font-medium mb-1">Discipline</span>
                <span>Architecture & Interiors</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Image with Clip-Path Reveal & Subtle Parallax */}
          <div className="lg:col-span-6 relative">
            <div
              className={`relative overflow-hidden aspect-[4/3] bg-[#E5DAC8] shadow-lg transition-all duration-1000 ease-out ${
                isVisible ? 'clip-reveal-visible' : 'clip-reveal-hidden'
              }`}
              style={{
                transitionDelay: '350ms',
                transform: `translateY(${scrollY * 0.04}px)`,
              }}
            >
              <img
                src="/src/assets/images/studio_intro_vignette_1791249421755.jpg"
                alt="Architectural interior vignette with travertine and sculptural curved plaster wall"
                className="w-full h-full object-cover object-center filter contrast-[1.02] hover:scale-105 transition-transform duration-1000 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Fine registration mark */}
              <div className="absolute top-4 left-4 text-[10px] font-sans tracking-[0.2em] uppercase text-[#241519] bg-[#F1E8D8]/90 backdrop-blur-sm px-3 py-1 border border-[#77645A]/20">
                Fig. 01 — Material Study
              </div>
            </div>

            {/* Subtle caption underneath */}
            <div
              className={`mt-4 flex justify-between items-center text-[11px] font-sans tracking-[0.16em] uppercase text-[#77645A] transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <span>Curved Plaster & Travertine</span>
              <span className="text-[#B86F5E]">Fitzroy Studio Archive</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
