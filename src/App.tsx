/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StudioIntro } from './components/StudioIntro';
import { SelectedWork } from './components/SelectedWork';
import { ImmersiveMoment } from './components/ImmersiveMoment';
import { DesignApproach } from './components/DesignApproach';
import { StudioStatistics } from './components/StudioStatistics';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StartProjectModal } from './components/StartProjectModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleExploreWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#241519] text-[#F1E8D8] antialiased selection:bg-[#B86F5E] selection:text-[#F1E8D8]">
      {/* Top Navigation */}
      <Navbar onStartProject={handleOpenModal} />

      {/* Main Single-Page Editorial Flow */}
      <main className="relative">
        {/* HERO SECTION */}
        <Hero
          onStartProject={handleOpenModal}
          onExploreWork={handleExploreWork}
        />

        {/* SECTION 2 — STUDIO INTRO */}
        <StudioIntro />

        {/* SECTION 3 — SELECTED WORK */}
        <SelectedWork onStartProject={handleOpenModal} />

        {/* SECTION 4 — IMMERSIVE IMAGE MOMENT */}
        <ImmersiveMoment />

        {/* SECTION 5 — DESIGN APPROACH */}
        <DesignApproach />

        {/* SECTION 6 — STATISTICS */}
        <StudioStatistics />

        {/* SECTION 7 — FINAL CINEMATIC CTA */}
        <FinalCTA onStartProject={handleOpenModal} />
      </main>

      {/* MINIMAL EDITORIAL FOOTER */}
      <Footer onStartProject={handleOpenModal} />

      {/* PROJECT INQUIRY MODAL */}
      <StartProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
