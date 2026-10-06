import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onStartProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Fade in minimal persistent navigation once scrolled past initial hero focus
      setScrolled(window.scrollY > 140);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '#work' },
    { name: 'STUDIO', href: '#studio' },
    { name: 'APPROACH', href: '#approach' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'opacity-100 translate-y-0 bg-[#241519]/92 backdrop-blur-md border-b border-[#77645A]/25 py-4 text-[#F1E8D8]'
          : 'opacity-0 -translate-y-3 pointer-events-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* Publication Brand Mark */}
        <a
          href="#"
          className="group flex items-center gap-3 text-current transition-opacity hover:opacity-85 pointer-events-auto"
          aria-label="Northline Studio Home"
        >
          <span className="font-sans text-[11px] sm:text-xs tracking-[0.28em] uppercase font-medium text-[#F1E8D8]">
            Northline Studio
          </span>
        </a>

        {/* Restrained Text Navigation */}
        <nav className="hidden md:flex items-center gap-9 text-[11px] font-sans font-medium tracking-[0.24em] uppercase text-[#F1E8D8]/80 pointer-events-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative py-1 transition-colors hover:text-[#F1E8D8] text-[#C8B8A6] group cursor-pointer"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#B86F5E] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Minimal Understated Text CTA */}
        <div className="hidden sm:flex items-center pointer-events-auto">
          <button
            onClick={onStartProject}
            className="group inline-flex items-center gap-1.5 text-[11px] font-sans tracking-[0.2em] uppercase text-[#F1E8D8] hover:text-[#B86F5E] py-1 border-b border-[#B86F5E]/60 hover:border-[#B86F5E] transition-all cursor-pointer"
          >
            <span>Start a Project</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden pointer-events-auto">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F1E8D8] hover:text-[#B86F5E] cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#241519] text-[#F1E8D8] border-b border-[#77645A]/30 px-8 py-8 shadow-2xl pointer-events-auto">
          <div className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-sans tracking-[0.2em] uppercase text-[#F1E8D8] hover:text-[#B86F5E] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6 border-t border-[#77645A]/30">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onStartProject();
                }}
                className="text-xs font-sans tracking-[0.22em] uppercase text-[#B86F5E] hover:text-[#F1E8D8] flex items-center gap-1.5"
              >
                <span>Start a Project →</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
