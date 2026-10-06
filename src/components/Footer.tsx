import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onStartProject: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onStartProject }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#241519] text-[#F1E8D8] pt-16 pb-12 px-6 sm:px-10 border-t border-[#77645A]/25">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#77645A]/20">
          {/* Brand & Studio Address */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="font-serif text-2xl tracking-[0.14em] uppercase font-light text-[#F1E8D8] mb-3">
                Northline Studio
              </div>
              <p className="text-xs font-sans tracking-[0.08em] text-[#C8B8A6]/70 max-w-sm leading-relaxed mb-6 font-light">
                Contemporary architecture and interior design studio shaping considered residential and commercial environments.
              </p>
            </div>

            <div className="text-xs font-sans tracking-[0.14em] uppercase text-[#C8B8A6]/60">
              <span className="block text-[#F1E8D8] mb-0.5">Melbourne Studio</span>
              <span>Level 2, 48 Gertrude Street, Fitzroy VIC 3065</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-xs font-sans tracking-[0.18em] uppercase">
            <div>
              <span className="block text-[#B86F5E] text-[10px] tracking-[0.24em] mb-4 font-medium">
                Disciplines
              </span>
              <ul className="space-y-3 text-[#C8B8A6]">
                <li><button onClick={() => scrollTo('work')} className="hover:text-[#F1E8D8] transition-colors cursor-pointer">Architecture</button></li>
                <li><button onClick={() => scrollTo('work')} className="hover:text-[#F1E8D8] transition-colors cursor-pointer">Interiors</button></li>
                <li><button onClick={() => scrollTo('approach')} className="hover:text-[#F1E8D8] transition-colors cursor-pointer">Masterplanning</button></li>
                <li><button onClick={() => scrollTo('approach')} className="hover:text-[#F1E8D8] transition-colors cursor-pointer">Custom Joinery</button></li>
              </ul>
            </div>

            <div>
              <span className="block text-[#B86F5E] text-[10px] tracking-[0.24em] mb-4 font-medium">
                Navigation
              </span>
              <ul className="space-y-3 text-[#C8B8A6]">
                <li><button onClick={() => scrollTo('studio')} className="hover:text-[#F1E8D8] transition-colors cursor-pointer">Studio</button></li>
                <li><button onClick={() => scrollTo('work')} className="hover:text-[#F1E8D8] transition-colors cursor-pointer">Projects</button></li>
                <li><button onClick={() => scrollTo('approach')} className="hover:text-[#F1E8D8] transition-colors cursor-pointer">Approach</button></li>
                <li><button onClick={() => scrollTo('contact')} className="hover:text-[#F1E8D8] transition-colors cursor-pointer">Contact</button></li>
              </ul>
            </div>
          </div>

          {/* Direct Consultation Trigger */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <span className="block text-[#B86F5E] text-[10px] tracking-[0.24em] uppercase mb-4 font-medium">
                Inquiries
              </span>
              <p className="text-xs font-sans tracking-[0.06em] text-[#C8B8A6]/80 leading-relaxed mb-4">
                We accept a limited number of commissions annually to preserve design intimacy.
              </p>
            </div>

            <button
              onClick={onStartProject}
              className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.18em] uppercase text-[#F1E8D8] hover:text-[#B86F5E] py-2 border-b border-[#B86F5E]/60 hover:border-[#B86F5E] transition-all cursor-pointer self-start"
            >
              <span>Commission A Space</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B86F5E]" />
            </button>
          </div>
        </div>

        {/* Bottom Minimal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans tracking-[0.16em] text-[#77645A] gap-4">
          <div>
            Melbourne, Australia
          </div>

          <div>
            © 2026 Northline Studio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
