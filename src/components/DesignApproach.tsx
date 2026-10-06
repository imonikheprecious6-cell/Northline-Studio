import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ApproachPillar } from '../types';

export const DesignApproach: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  const pillars: ApproachPillar[] = [
    {
      number: '01',
      title: 'DISCOVER',
      summary: 'Understanding the people, place, and purpose.',
      expanded: 'Every project commences with deep cultural and climatic listening: analyzing orientation, shadow rhythms, context, and the intimate daily rituals of its occupants.',
    },
    {
      number: '02',
      title: 'DESIGN',
      summary: 'Developing spaces through proportion, material, light, and detail.',
      expanded: 'We interrogate every volume through rigorous physical maquettes and 1:1 material mockups, selecting stone, timber, and metal that gracefully patinate over decades.',
    },
    {
      number: '03',
      title: 'DELIVER',
      summary: 'Turning the concept into a considered physical experience.',
      expanded: 'Partnering with master builders and local Melbourne artisans, we execute each junction, recess, and shadow line with uncompromising structural precision.',
    },
  ];

  return (
    <section
      ref={ref}
      id="approach"
      className="py-28 sm:py-36 lg:py-44 px-6 sm:px-10 bg-[#F1E8D8] text-[#241519] overflow-hidden border-b border-[#77645A]/20"
    >
      {/* Subtle drafting grid */}
      <div className="absolute inset-0 bg-grid-parchment opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 sm:mb-28">
          <div
            className={`mb-4 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-xs font-sans tracking-[0.28em] uppercase text-[#B86F5E] font-medium">
              Our Approach
            </span>
          </div>

          <h2
            className={`font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] text-[#241519] transition-all duration-800 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            Less decoration.<br />
            <span className="italic font-normal text-[#B86F5E]">More intention.</span>
          </h2>
        </div>

        {/* 3 Staggered Editorial Columns with Thin Clay/Taupe Architectural Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-8 border-t border-[#77645A]/25">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.number}
              className={`flex flex-col justify-between transition-all duration-800 ease-out ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-[0.98]'
              }`}
              style={{
                transitionDelay: `${250 + idx * 200}ms`,
              }}
            >
              <div>
                {/* Number animates upward/fades into place in Muted Clay */}
                <div className="font-serif text-4xl sm:text-5xl font-light text-[#B86F5E]/70 mb-6">
                  {pillar.number}
                </div>

                {/* Pillar Title */}
                <h3 className="font-sans text-xs font-medium tracking-[0.24em] uppercase text-[#241519] mb-4">
                  {pillar.title}
                </h3>

                {/* Summary Statement */}
                <p className="font-serif text-2xl sm:text-3xl font-light text-[#241519] leading-[1.25] mb-5">
                  "{pillar.summary}"
                </p>

                {/* Expanded architectural commentary in Deep Wine / Muted Taupe */}
                <p className="text-sm font-sans font-light text-[#43282F] leading-relaxed">
                  {pillar.expanded}
                </p>
              </div>

              {/* Decorative baseline tick */}
              <div className="mt-10 pt-4 border-t border-[#77645A]/20 flex justify-between items-center text-[10px] font-sans tracking-[0.2em] uppercase text-[#77645A]">
                <span>Phase {pillar.number}</span>
                <span className="text-[#B86F5E]">Northline Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
