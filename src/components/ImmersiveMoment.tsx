import React from 'react';
import { useScrollReveal, useScrollY } from '../hooks/useScrollReveal';

export const ImmersiveMoment: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.2 });
  const scrollY = useScrollY();

  return (
    <section
      ref={ref}
      className="relative min-h-[75vh] sm:min-h-[85vh] lg:min-h-[92vh] w-full flex items-center justify-center overflow-hidden bg-[#241519] text-[#F1E8D8]"
    >
      {/* Full-width Architectural Image with Scroll Zoom & Parallax */}
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translateY(${scrollY * 0.16}px) scale(${1.02 + (scrollY % 800) * 0.00015})`,
        }}
      >
        <img
          src="/src/assets/images/immersive_monument_moment_1791249461772.jpg"
          alt="Sculptural architectural concrete pavilion with reflecting pool at twilight"
          className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.78]"
          referrerPolicy="no-referrer"
        />

        {/* Film Grain Texture */}
        <div className="absolute inset-0 grain-overlay opacity-35 pointer-events-none" />

        {/* Deep Oxblood & Deep Wine Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#241519]/70 via-[#43282F]/30 to-[#241519]/70 pointer-events-none" />
      </div>

      {/* Dark/Warm Cinematic Overlay that subtly shifts opacity with scroll */}
      <div
        className="absolute inset-0 bg-[#241519]/45 transition-opacity duration-500 pointer-events-none"
        style={{
          opacity: 0.4 + Math.sin(scrollY * 0.002) * 0.08,
        }}
      />

      {/* Center Cinematic Typography in Aged Ivory */}
      <div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-1000 ease-out"
        style={{
          transform: `translateY(${scrollY * -0.1}px)`,
        }}
      >
        <div
          className={`mb-4 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-[11px] sm:text-xs font-sans tracking-[0.32em] uppercase text-[#B86F5E] font-medium">
            Architectural Monograph
          </span>
        </div>

        <div className="overflow-hidden py-2">
          <h2
            className={`font-serif text-5xl sm:text-7xl lg:text-9xl font-light italic tracking-tight text-[#F1E8D8] leading-none transition-transform duration-1000 ease-out ${
              isVisible ? 'translate-y-0' : 'translate-y-full'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Form follows feeling.
          </h2>
        </div>

        <div
          className={`mt-6 max-w-lg mx-auto transition-all duration-700 ease-out ${
            isVisible ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <p className="text-sm sm:text-base font-sans font-light tracking-wide text-[#C8B8A6] leading-relaxed">
            Spaces that transcend visual style to cultivate emotional resonance, quiet contemplation, and lasting permanence.
          </p>
        </div>
      </div>
    </section>
  );
};
