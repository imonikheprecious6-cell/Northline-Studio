import React, { useState, useEffect, useRef } from 'react';
import { useScrollY } from '../hooks/useScrollReveal';

interface HeroProps {
  onStartProject: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreWork }) => {
  const scrollY = useScrollY();
  const heroRef = useRef<HTMLDivElement>(null);

  // Initial Full-Screen #241519 Curtain Transition States
  const [curtainVisible, setCurtainVisible] = useState(true);
  const [curtainFading, setCurtainFading] = useState(false);
  const [curtainMarkVisible, setCurtainMarkVisible] = useState(false);

  // Planned Sequence Stages for Hero Components
  const [stageImage, setStageImage] = useState(false);
  const [stageHeader, setStageHeader] = useState(false);
  const [stageHotspot, setStageHotspot] = useState(false);
  const [stageEyebrow, setStageEyebrow] = useState(false);
  const [stageHeadline1, setStageHeadline1] = useState(false);
  const [stageHeadline2, setStageHeadline2] = useState(false);
  const [stageParagraph, setStageParagraph] = useState(false);
  const [stageButtons, setStageButtons] = useState(false);

  const [hotspotActive, setHotspotActive] = useState(false);

  // Orchestrate the Initial Page Load Transition Sequence
  const runSequence = () => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setCurtainVisible(false);
      setCurtainFading(true);
      setStageImage(true);
      setStageHeader(true);
      setStageHotspot(true);
      setStageEyebrow(true);
      setStageHeadline1(true);
      setStageHeadline2(true);
      setStageParagraph(true);
      setStageButtons(true);
      return () => {};
    }

    // Step 0: Ensure solid #241519 is active and reveal subtle central editorial mark
    setCurtainVisible(true);
    setCurtainFading(false);
    const tMark = setTimeout(() => setCurtainMarkVisible(true), 60);

    // Step 1: At 480ms, the solid #241519 curtain begins fading out smoothly
    const tFadeCurtain = setTimeout(() => {
      setCurtainFading(true);
    }, 480);

    // Step 2: At 550ms, Architectural Villa photography and lighting scrims emerge
    const tImage = setTimeout(() => setStageImage(true), 550);

    // Step 3: At 800ms, Monograph Top Header tracks into position
    const tHeader = setTimeout(() => setStageHeader(true), 800);

    // Step 4: At 1000ms, Interactive Balcony Hotspot reveals
    const tHotspot = setTimeout(() => setStageHotspot(true), 1000);

    // Step 5: At 1150ms, Eyebrow "ARCHITECTURE & INTERIOR DESIGN" glides up
    const tEyebrow = setTimeout(() => setStageEyebrow(true), 1150);

    // Step 6: At 1300ms, Headline Line 1 "Crafting space" rises from mask
    const tHeadline1 = setTimeout(() => setStageHeadline1(true), 1300);

    // Step 7: At 1500ms, Headline Line 2 "through light" rises from mask
    const tHeadline2 = setTimeout(() => setStageHeadline2(true), 1500);

    // Step 8: At 1700ms, Supporting narrative paragraph fades in
    const tParagraph = setTimeout(() => setStageParagraph(true), 1700);

    // Step 9: At 1900ms, Action pill buttons reveal
    const tButtons = setTimeout(() => setStageButtons(true), 1900);

    // Step 10: At 1750ms, fully unmount/disable curtain pointer events
    const tRemoveCurtain = setTimeout(() => {
      setCurtainVisible(false);
    }, 1750);

    return () => {
      clearTimeout(tMark);
      clearTimeout(tFadeCurtain);
      clearTimeout(tImage);
      clearTimeout(tHeader);
      clearTimeout(tHotspot);
      clearTimeout(tEyebrow);
      clearTimeout(tHeadline1);
      clearTimeout(tHeadline2);
      clearTimeout(tParagraph);
      clearTimeout(tButtons);
      clearTimeout(tRemoveCurtain);
    };
  };

  useEffect(() => {
    const cleanup = runSequence();
    return cleanup;
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Parallax subtle shift on scroll
  const imageTranslateY = scrollY * 0.18;
  const contentTranslateY = scrollY * -0.15;
  const contentOpacity = Math.max(1 - scrollY / 650, 0);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen min-h-[720px] max-h-[1100px] overflow-hidden bg-[#0A0D11] text-white flex flex-col justify-between select-none"
    >
      {/* ========================================================================= */}
      {/* 0. SOPHISTICATED SOLID #241519 PAGE LOAD TRANSITION OVERLAY               */}
      {/* ========================================================================= */}
      {curtainVisible && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#241519] transition-all duration-[1150ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            curtainFading
              ? 'opacity-0 pointer-events-none scale-[1.02]'
              : 'opacity-100 pointer-events-auto scale-100'
          }`}
          aria-hidden={curtainFading}
        >
          {/* Subtle Architectural Grain & Hairline Datum lines on the #241519 canvas */}
          <div className="absolute inset-0 grain-overlay opacity-35 pointer-events-none" />
          
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#77645A]/20 -translate-y-1/2 pointer-events-none" />
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#77645A]/20 -translate-x-1/2 pointer-events-none" />

          {/* Central Editorial Monograph Mark */}
          <div
            className={`relative z-10 flex flex-col items-center text-center transition-all duration-700 ease-out ${
              curtainMarkVisible
                ? 'opacity-100 scale-100 translate-y-0'
                : 'opacity-0 scale-95 translate-y-2'
            }`}
          >
            {/* Architectural registration crosshair */}
            <div className="text-[11px] font-mono text-[#77645A] mb-3 select-none">
              +
            </div>

            {/* Wordmark with delicate letter-spacing */}
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.38em] uppercase text-[#F1E8D8] font-light">
              AURELIA
            </span>

            {/* Hairline expanding datum rule */}
            <div
              className={`h-[1px] bg-[#B86F5E] my-3 transition-all duration-800 ease-out ${
                curtainMarkVisible ? 'w-16 sm:w-24 opacity-80' : 'w-0 opacity-0'
              }`}
            />

            {/* Architectural metadata caption */}
            <span className="text-[9px] sm:text-[10px] font-sans tracking-[0.3em] uppercase text-[#C8B8A6]/75">
              MILANO · ARCHITECTURE & LIGHT
            </span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 1. CINEMATIC FULL-BLEED ARCHITECTURAL BACKGROUND (STAGE 1 REVEAL)         */}
      {/* ========================================================================= */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          transform: `translate3d(0, ${imageTranslateY}px, 0)`,
        }}
      >
        <img
          src="/src/assets/images/modern_luxury_villa_hero_1791251489200.jpg"
          alt="Contemporary luxury villa with limestone facade and reflecting pool at twilight"
          className={`w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.03] transition-all duration-[1600ms] ease-out ${
            stageImage
              ? 'opacity-100 scale-100 blur-none'
              : 'opacity-0 scale-[1.08] blur-[2px]'
          }`}
          referrerPolicy="no-referrer"
        />

        {/* Multi-layered directional dark gradient scrims matching the reference image */}
        {/* Top bar vignette */}
        <div
          className={`absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/75 via-black/35 to-transparent pointer-events-none transition-opacity duration-1000 ${
            stageImage ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Left textual contrast wash */}
        <div
          className={`absolute inset-y-0 left-0 w-full sm:w-[75%] lg:w-[60%] bg-gradient-to-r from-black/85 via-black/55 to-transparent pointer-events-none transition-opacity duration-1000 ${
            stageImage ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Deep bottom reflection pool shadow */}
        <div
          className={`absolute inset-x-0 bottom-0 h-[65vh] bg-gradient-to-t from-black/92 via-black/55 to-transparent pointer-events-none transition-opacity duration-1000 ${
            stageImage ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Subtle overall architectural grade tint */}
        <div className="absolute inset-0 bg-[#0d1520]/20 mix-blend-multiply pointer-events-none" />

        {/* Fine film grain texture */}
        <div className="absolute inset-0 grain-overlay opacity-25 pointer-events-none" />
      </div>

      {/* ========================================================================= */}
      {/* 2. ARCHITECTURAL INTERACTIVE HOTSPOT (STAGE 3 REVEAL)                     */}
      {/* ========================================================================= */}
      <div
        className={`absolute top-[28%] sm:top-[29%] right-[22%] sm:right-[24%] z-20 transition-all duration-900 ease-out ${
          stageHotspot ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="relative group cursor-pointer" onClick={() => setHotspotActive(!hotspotActive)}>
          {/* Subtle pulsating outer ring */}
          <div className="absolute -inset-2 rounded-full border border-white/30 animate-ping opacity-60 pointer-events-none" />
          
          {/* Concentric glass hotspot icon */}
          <div className="relative w-7 h-7 rounded-full border border-white/60 bg-black/25 backdrop-blur-xs flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-white group-hover:bg-black/50">
            <div className="w-1.5 h-1.5 rounded-full bg-white shadow-xs" />
          </div>

          {/* Interactive callout tooltip */}
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 p-3 bg-black/85 backdrop-blur-md border border-white/20 shadow-2xl rounded-xs text-left transition-all duration-300 pointer-events-none ${
              hotspotActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0'
            }`}
          >
            <div className="text-[9px] font-sans tracking-[0.24em] text-white/50 uppercase mb-1">
              Plate 01 · Elevation
            </div>
            <div className="text-[11px] font-sans text-white/95 font-medium leading-tight">
              Frameless Low-Iron Glass & Honed Limestone Cladding
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. MINIMAL TRANSPARENT NAVIGATION HEADER (STAGE 2 REVEAL)                 */}
      {/* ========================================================================= */}
      <header className="relative z-30 w-full px-7 sm:px-14 lg:px-18 pt-8 sm:pt-10 flex items-center justify-between">
        {/* Brand Wordmark (AURELIA) */}
        <div className="overflow-hidden">
          <a
            href="#"
            className={`block font-serif text-lg sm:text-xl tracking-[0.26em] uppercase font-normal text-white transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              stageHeader
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-4'
            }`}
          >
            AURELIA
          </a>
        </div>

        {/* Editorial Text Nav Links */}
        <nav
          className={`flex items-center gap-7 sm:gap-11 text-[11px] sm:text-xs font-sans font-medium tracking-[0.26em] uppercase transition-all duration-1000 ease-out ${
            stageHeader ? 'opacity-90 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <a
            href="#"
            className="text-white hover:text-white/70 transition-colors py-1 cursor-pointer"
          >
            HOME
          </a>
          <a
            href="#work"
            onClick={(e) => handleNavClick(e, '#work')}
            className="text-white/80 hover:text-white transition-colors py-1 cursor-pointer"
          >
            WORK
          </a>
          <a
            href="#studio"
            onClick={(e) => handleNavClick(e, '#studio')}
            className="text-white/80 hover:text-white transition-colors py-1 cursor-pointer"
          >
            ABOUT
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="text-white/80 hover:text-white transition-colors py-1 cursor-pointer"
          >
            CONTACT
          </a>
        </nav>
      </header>

      {/* ========================================================================= */}
      {/* 4. HERO EDITORIAL CONTENT (STAGES 4, 5, 6, 7, 8 REVEALS)                  */}
      {/* ========================================================================= */}
      <div
        className="relative z-20 w-full px-7 sm:px-14 lg:px-18 pb-14 sm:pb-20 max-w-5xl"
        style={{
          transform: `translate3d(0, ${contentTranslateY}px, 0)`,
          opacity: contentOpacity,
        }}
      >
        {/* Eyebrow Label: "ARCHITECTURE & INTERIOR DESIGN" (STAGE 4) */}
        <div className="overflow-hidden mb-4 sm:mb-6">
          <p
            className={`text-xs sm:text-[13px] font-sans font-medium tracking-[0.24em] uppercase text-white/75 transition-all duration-900 ease-out ${
              stageEyebrow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            ARCHITECTURE & INTERIOR DESIGN
          </p>
        </div>

        {/* Large Editorial Headline: "Crafting space through light" (STAGES 5 & 6) */}
        <div className="mb-6 sm:mb-8">
          <div className="overflow-hidden">
            <h1
              className={`font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[6.6rem] xl:text-[7.4rem] font-normal tracking-[-0.02em] leading-[0.98] text-white transition-transform duration-[1250ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                stageHeadline1 ? 'translate-y-0' : 'translate-y-[115%]'
              }`}
            >
              Crafting space
            </h1>
          </div>
          <div className="overflow-hidden mt-1 sm:mt-2">
            <span
              className={`block font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[6.6rem] xl:text-[7.4rem] font-normal tracking-[-0.02em] leading-[0.98] text-white transition-transform duration-[1250ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                stageHeadline2 ? 'translate-y-0' : 'translate-y-[115%]'
              }`}
            >
              through light
            </span>
          </div>
        </div>

        {/* Supporting Narrative Paragraph (STAGE 7) */}
        <div className="max-w-xl mb-9 sm:mb-11">
          <p
            className={`text-sm sm:text-base font-sans font-light leading-relaxed text-white/80 transition-all duration-1000 ease-out ${
              stageParagraph ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            An architecture and interior design studio based in Milan. We create spaces defined by material honesty, considered light, and a quiet sense of permanence.
          </p>
        </div>

        {/* Call to Action Buttons: Outlined Pill & Solid White Pill (STAGE 8) */}
        <div
          className={`flex flex-wrap items-center gap-4 sm:gap-5 transition-all duration-1000 ease-out ${
            stageButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Button 1: VIEW WORK (Outlined Pill) */}
          <button
            onClick={onExploreWork}
            className="group inline-flex items-center justify-center px-7 sm:px-8 py-3.5 rounded-full border border-white/45 bg-black/15 backdrop-blur-xs text-xs sm:text-[11px] font-sans tracking-[0.24em] uppercase font-medium text-white hover:bg-white/15 hover:border-white transition-all cursor-pointer"
          >
            <span>VIEW WORK</span>
          </button>

          {/* Button 2: BEGIN A CONVERSATION (Solid White Pill) */}
          <button
            onClick={onStartProject}
            className="group inline-flex items-center justify-center px-7 sm:px-8 py-3.5 rounded-full bg-white text-[#111111] hover:bg-white/90 text-xs sm:text-[11px] font-sans tracking-[0.24em] uppercase font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.99] transition-all cursor-pointer"
          >
            <span>BEGIN A CONVERSATION</span>
          </button>
        </div>
      </div>
    </section>
  );
};
