import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { useScrollReveal, useScrollY } from '../hooks/useScrollReveal';

interface FinalCTAProps {
  onStartProject: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartProject }) => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.2 });
  const scrollY = useScrollY();

  return (
    <section
      ref={ref}
      id="contact"
      className="relative min-h-[85vh] sm:min-h-[92vh] w-full flex items-center justify-center overflow-hidden bg-[#241519] text-[#F1E8D8]"
    >
      {/* Background Architectural Twilight Image with Slow Continuous Zoom & Reveal */}
      <div
        className={`absolute inset-0 w-full h-[115%] -top-[5%] pointer-events-none transition-all duration-[1600ms] ease-out ${
          isVisible ? 'opacity-85 scale-100' : 'opacity-0 scale-106'
        }`}
        style={{
          transform: `translateY(${scrollY * 0.12}px)`,
        }}
      >
        <img
          src="/src/assets/images/cta_twilight_lounge_1791249470679.jpg"
          alt="Architectural pavilion living lounge at dusk with Melbourne skyline in distance"
          className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-[0.78]"
          referrerPolicy="no-referrer"
        />

        {/* Dynamic Film Grain Layer */}
        <div className="absolute inset-0 grain-overlay opacity-35 pointer-events-none" />

        {/* Deep Oxblood & Dark Plum Scrim */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#241519] via-[#241519]/75 to-[#382329]/60 pointer-events-none" />
      </div>

      {/* Content Container with Line-by-Line Headline Reveal in Aged Ivory */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center py-20">
        {/* Eyebrow Label in Muted Clay */}
        <div
          className={`mb-6 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#B86F5E] font-medium">
            Begin A Dialogue
          </span>
        </div>

        {/* Headline with Masked Entrance */}
        <div className="mb-6">
          <div className="overflow-hidden mb-1">
            <h2
              className={`font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#F1E8D8] leading-[1.08] transition-transform duration-1000 ease-out ${
                isVisible ? 'translate-y-0' : 'translate-y-full'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Let's create something
            </h2>
          </div>
          <div className="overflow-hidden">
            <span
              className={`block font-serif text-4xl sm:text-6xl lg:text-7xl font-light italic tracking-tight text-[#F1E8D8] leading-[1.08] transition-transform duration-1000 ease-out ${
                isVisible ? 'translate-y-0' : 'translate-y-full'
              }`}
              style={{ transitionDelay: '480ms' }}
            >
              considered.
            </span>
          </div>
        </div>

        {/* Supporting text in Warm Stone */}
        <p
          className={`text-lg sm:text-xl font-sans font-light text-[#C8B8A6] max-w-md mx-auto mb-10 transition-all duration-800 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '650ms' }}
        >
          Tell us about your next space.
        </p>

        {/* CTAs in Muted Clay and Aged Ivory */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-800 ease-out ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
          }`}
          style={{ transitionDelay: '820ms' }}
        >
          <button
            onClick={onStartProject}
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[#B86F5E] hover:bg-[#a66151] active:bg-[#945445] text-[#F1E8D8] text-xs font-sans tracking-[0.2em] uppercase font-medium transition-all duration-300 rounded-none cursor-pointer shadow-xl"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <a
            href="mailto:hello@northlinestudio.com"
            className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.16em] uppercase text-[#F1E8D8]/80 hover:text-[#F1E8D8] transition-colors py-2 border-b border-[#B86F5E]/60 hover:border-[#B86F5E]"
          >
            <Mail className="w-3.5 h-3.5 text-[#B86F5E]" />
            <span>hello@northlinestudio.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};
