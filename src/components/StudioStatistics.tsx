import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const StudioStatistics: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.25 });

  const [countYears, setCountYears] = useState(0);
  const [countProjects, setCountProjects] = useState(0);
  const [countAwards, setCountAwards] = useState(0);
  const [countCities, setCountCities] = useState(0);
  const [hasCounted, setHasCounted] = useState(false);

  useEffect(() => {
    if (!isVisible || hasCounted) return;
    setHasCounted(true);

    const duration = 1800; // ms
    const startTime = performance.now();

    const animateCounts = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      setCountYears(Math.floor(12 * ease));
      setCountProjects(Math.floor(86 * ease));
      setCountAwards(Math.floor(14 * ease));
      setCountCities(Math.floor(7 * ease));

      if (progress < 1) {
        requestAnimationFrame(animateCounts);
      }
    };

    requestAnimationFrame(animateCounts);
  }, [isVisible, hasCounted]);

  const stats = [
    {
      value: countYears,
      suffix: '+',
      label: 'Years of Practice',
      context: 'Founded in Melbourne, 2014',
    },
    {
      value: countProjects,
      suffix: '',
      label: 'Projects Completed',
      context: 'Across residential & workplace',
    },
    {
      value: countAwards,
      suffix: '',
      label: 'Design Awards',
      context: 'National & Victorian AIA recognition',
    },
    {
      value: countCities,
      suffix: '',
      label: 'Cities',
      context: 'Melbourne, Sydney, Brisbane & beyond',
    },
  ];

  return (
    <section
      ref={ref}
      id="statistics"
      className="py-24 sm:py-32 lg:py-40 px-6 sm:px-10 bg-[#382329] text-[#F1E8D8] overflow-hidden border-b border-[#77645A]/25"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col pt-6 border-t border-[#77645A]/40 transition-all duration-800 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${150 + idx * 120}ms`,
              }}
            >
              {/* Number Count upward with tabular numerals */}
              <div className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-[#F1E8D8] tracking-tight leading-none mb-3 tabular-nums">
                {stat.value}
                <span className="text-[#B86F5E] font-light">{stat.suffix}</span>
              </div>

              {/* Label */}
              <h4 className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-[#F1E8D8] mb-1">
                {stat.label}
              </h4>

              {/* Context */}
              <p className="font-sans text-[11px] font-light text-[#C8B8A6] tracking-wide">
                {stat.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
