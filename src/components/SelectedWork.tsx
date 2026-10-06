import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useScrollReveal, useScrollY } from '../hooks/useScrollReveal';
import { ArchitectureProject } from '../types';

interface SelectedWorkProps {
  onStartProject: () => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onStartProject }) => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
  const scrollY = useScrollY();

  const projects: ArchitectureProject[] = [
    {
      id: 'hawthorne',
      number: '01',
      title: 'Hawthorne Residence',
      subtitle: 'A quiet dialogue between rammed earth, blackened timber, and filtered light.',
      category: 'Residential',
      location: 'Hawthorne, Melbourne',
      year: '2026',
      description: 'Conceived as a sanctuary of stillness within Melbourne\'s leafy east, this family home balances solid earthen mass with soaring steel-framed openings that invite the landscape inward.',
      image: '/src/assets/images/project_hawthorne_residence_1791249431344.jpg',
      animationDirection: 'bottom',
      details: {
        area: '520 m²',
        materials: 'Rammed earth, charred ash timber, raw travertine',
        photography: 'Rory Gardiner',
      },
    },
    {
      id: 'northcote',
      number: '02',
      title: 'Northcote House',
      subtitle: 'Monolithic Calacatta stone and fluted oak joinery in a heritage inner-north cottage.',
      category: 'Residential',
      location: 'Northcote, Melbourne',
      year: '2025',
      description: 'A restrained architectural reimagining of an Edwardian home. A sculptural honed marble kitchen anchor connects the original timber fabric with a sun-drenched concrete living wing.',
      image: '/src/assets/images/project_northcote_house_1791249442036.jpg',
      animationDirection: 'side',
      details: {
        area: '340 m²',
        materials: 'Honed Calacatta marble, fluted oak, aged brass',
        photography: 'Derek Swalwell',
      },
    },
    {
      id: 'lumen',
      number: '03',
      title: 'Lumen Workspace',
      subtitle: 'An atmospheric commercial studio curated around tactile acoustics and diffused natural light.',
      category: 'Commercial',
      location: 'Collingwood, Melbourne',
      year: '2026',
      description: 'Designed for a leading Melbourne creative consultancy, Lumen Workspace transforms an industrial warehouse into an acoustic haven utilizing fluted reeded glass, micro-cement, and walnut plinths.',
      image: '/src/assets/images/project_lumen_workspace_1791249451841.jpg',
      animationDirection: 'scale',
      details: {
        area: '680 m²',
        materials: 'Micro-cement, fluted glass, oiled American walnut',
        photography: 'Sharyn Cairns',
      },
    },
  ];

  return (
    <section id="work" className="py-28 sm:py-36 lg:py-44 bg-[#241519] text-[#F1E8D8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mb-24 lg:mb-32">
          <div
            className={`mb-4 transition-all duration-700 ease-out ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-xs font-sans tracking-[0.28em] uppercase text-[#B86F5E] font-medium">
              Portfolio Archive
            </span>
          </div>

          <h2
            className={`font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] text-[#F1E8D8] mb-6 transition-all duration-800 ease-out ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            Selected Work
          </h2>

          <p
            className={`text-lg sm:text-xl text-[#C8B8A6] font-sans font-light leading-relaxed max-w-xl transition-all duration-800 ease-out ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            A selection of spaces shaped by material, proportion, light, and purpose.
          </p>
        </div>

        {/* 3 Large Editorial Project Showcases with Alternating Color System */}
        <div className="space-y-24 sm:space-y-32 lg:space-y-40">
          {projects.map((project, idx) => (
            <ProjectShowcaseItem
              key={project.id}
              project={project}
              index={idx}
              scrollY={scrollY}
              onStartProject={onStartProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectShowcaseItemProps {
  project: ArchitectureProject;
  index: number;
  scrollY: number;
  onStartProject: () => void;
}

const ProjectShowcaseItem: React.FC<ProjectShowcaseItemProps> = ({
  project,
  index,
  scrollY,
  onStartProject,
}) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  // Alternating palette:
  // Project 0: Deep Oxblood / Dark Plum (#382329) with Aged Ivory text and Muted Clay accents
  // Project 1: Warm Parchment (#F1E8D8) with Deep Oxblood text (#241519) and Muted Clay accents
  // Project 2: Deep Oxblood (#241519) with Aged Ivory text and subtle Mineral Blue (#667F86) accents
  const isParchment = index === 1;
  const isMineralBlueAccent = index === 2;

  // Alternate image and text layout for editorial rhythm
  const isReversed = index % 2 !== 0;

  const getImageAnimationClasses = () => {
    if (!isVisible) {
      if (project.animationDirection === 'bottom') return 'clip-reveal-hidden';
      if (project.animationDirection === 'side') return 'clip-reveal-side-hidden';
      return 'opacity-0 scale-95';
    }
    if (project.animationDirection === 'bottom') return 'clip-reveal-visible';
    if (project.animationDirection === 'side') return 'clip-reveal-side-visible';
    return 'opacity-100 scale-100 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1)';
  };

  return (
    <article
      ref={ref}
      className={`relative p-8 sm:p-12 lg:p-16 border transition-all duration-700 ${
        isParchment
          ? 'bg-[#F1E8D8] text-[#241519] border-[#77645A]/25 shadow-xl'
          : 'bg-[#382329]/60 text-[#F1E8D8] border-[#77645A]/30 backdrop-blur-sm'
      }`}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
          isReversed ? 'lg:grid-flow-dense' : ''
        }`}
      >
        {/* Editorial Content Side */}
        <div
          className={`lg:col-span-5 flex flex-col justify-between ${
            isReversed ? 'lg:col-start-8' : ''
          }`}
        >
          <div>
            {/* Project Number Moving Vertically on Scroll */}
            <div
              className={`font-serif text-5xl sm:text-6xl lg:text-7xl font-light mb-6 transition-all duration-700 ease-out ${
                isParchment ? 'text-[#77645A]/40' : 'text-[#77645A]/50'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
              style={{
                transform: `translateY(${isVisible ? scrollY * -0.03 : -24}px)`,
              }}
            >
              {project.number}
            </div>

            {/* Project Title sliding upward */}
            <div className="overflow-hidden mb-3">
              <h3
                className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.12] transition-transform duration-900 ease-out ${
                  isParchment ? 'text-[#241519]' : 'text-[#F1E8D8]'
                } ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
                style={{ transitionDelay: '200ms' }}
              >
                {project.title}
              </h3>
            </div>

            {/* Metadata with middle-dots */}
            <div
              className={`flex items-center gap-2.5 text-xs font-sans tracking-[0.18em] uppercase mb-6 transition-opacity duration-700 ${
                isMineralBlueAccent
                  ? 'text-[#667F86]'
                  : isParchment
                  ? 'text-[#B86F5E]'
                  : 'text-[#B86F5E]'
              } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '350ms' }}
            >
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.location}</span>
              <span aria-hidden="true">·</span>
              <span>{project.year}</span>
            </div>

            {/* Subtitle Quote */}
            <p
              className={`text-base sm:text-lg font-serif italic leading-relaxed mb-6 transition-all duration-800 ease-out ${
                isParchment ? 'text-[#43282F]' : 'text-[#C8B8A6]'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '450ms' }}
            >
              "{project.subtitle}"
            </p>

            {/* Description */}
            <p
              className={`text-sm font-sans font-light leading-relaxed mb-8 transition-all duration-800 ease-out ${
                isParchment ? 'text-[#77645A]' : 'text-[#C8B8A6]/80'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '550ms' }}
            >
              {project.description}
            </p>
          </div>

          {/* Project Technical Specifications */}
          <div
            className={`pt-6 border-t grid grid-cols-2 gap-4 text-xs font-sans tracking-[0.1em] transition-all duration-800 ease-out ${
              isParchment ? 'border-[#77645A]/20 text-[#77645A]' : 'border-[#77645A]/30 text-[#C8B8A6]'
            } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '680ms' }}
          >
            <div>
              <span
                className={`block uppercase text-[10px] tracking-[0.2em] font-medium mb-0.5 ${
                  isParchment ? 'text-[#241519]' : 'text-[#F1E8D8]'
                }`}
              >
                Footprint
              </span>
              <span>{project.details.area}</span>
            </div>
            <div>
              <span
                className={`block uppercase text-[10px] tracking-[0.2em] font-medium mb-0.5 ${
                  isMineralBlueAccent
                    ? 'text-[#667F86]'
                    : isParchment
                    ? 'text-[#241519]'
                    : 'text-[#F1E8D8]'
                }`}
              >
                Key Palette
              </span>
              <span className="truncate block">{project.details.materials}</span>
            </div>
          </div>
        </div>

        {/* Large Image Side with Whitespace & Specific Motion Direction */}
        <div
          className={`lg:col-span-7 relative ${
            isReversed ? 'lg:col-start-1' : ''
          }`}
        >
          <div
            className={`relative overflow-hidden aspect-[16/10] shadow-xl ${getImageAnimationClasses()} ${
              isParchment ? 'bg-[#E5DAC8]' : 'bg-[#241519]'
            }`}
            style={{
              transform: `translateY(${scrollY * (index % 2 === 0 ? 0.03 : -0.03)}px)`,
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
              referrerPolicy="no-referrer"
            />

            {/* Registration tag on corner */}
            <div
              className={`absolute top-4 right-4 backdrop-blur-sm px-3.5 py-1.5 text-[10px] font-sans tracking-[0.22em] uppercase font-light border ${
                isMineralBlueAccent
                  ? 'bg-[#241519]/90 text-[#F1E8D8] border-[#667F86]/60'
                  : isParchment
                  ? 'bg-[#F1E8D8]/90 text-[#241519] border-[#77645A]/30'
                  : 'bg-[#241519]/90 text-[#F1E8D8] border-[#B86F5E]/40'
              }`}
            >
              Project {project.number} — {project.year}
            </div>
          </div>

          {/* Under-image caption */}
          <div
            className={`mt-4 flex justify-between items-center text-[10px] font-sans tracking-[0.2em] uppercase transition-opacity duration-700 ${
              isParchment ? 'text-[#77645A]' : 'text-[#C8B8A6]/70'
            } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '700ms' }}
          >
            <span>Photo: {project.details.photography}</span>
            <button
              onClick={onStartProject}
              className={`inline-flex items-center gap-1 transition-colors cursor-pointer ${
                isMineralBlueAccent
                  ? 'text-[#667F86] hover:text-[#F1E8D8]'
                  : isParchment
                  ? 'text-[#241519] hover:text-[#B86F5E]'
                  : 'text-[#B86F5E] hover:text-[#F1E8D8]'
              }`}
            >
              <span>Inquire About Similar Architecture</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
