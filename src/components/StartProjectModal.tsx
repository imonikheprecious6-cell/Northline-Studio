import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

interface StartProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StartProjectModal: React.FC<StartProjectModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [projectType, setProjectType] = useState('New Residential Architecture');
  const [location, setLocation] = useState('Melbourne Inner Suburbs');
  const [budget, setBudget] = useState('$1M – $2.5M AUD');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const projectTypes = [
    'New Residential Architecture',
    'Heritage Renovation & Extension',
    'Interior Architecture & Joinery',
    'Boutique Workplace / Commercial',
  ];

  const locations = [
    'Melbourne Inner Suburbs',
    'Mornington Peninsula',
    'Bayside / Coastal',
    'Yarra Valley / Regional Victoria',
    'Interstate / Other',
  ];

  const budgets = [
    '$500k – $1M AUD',
    '$1M – $2.5M AUD',
    '$2.5M – $5M AUD',
    '$5M+ AUD',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2);
    }, 700);
  };

  const handleReset = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop in Deep Oxblood with blur */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#241519]/85 backdrop-blur-md transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog Card in Aged Ivory */}
      <div className="relative w-full max-w-xl bg-[#F1E8D8] text-[#241519] border border-[#77645A]/30 p-8 sm:p-12 shadow-2xl z-10 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#77645A] hover:text-[#241519] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 ? (
          <div>
            <div className="mb-2">
              <span className="text-[11px] font-sans tracking-[0.26em] uppercase text-[#B86F5E] font-medium">
                Commission Inquiry
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#241519] mb-3">
              Start a Project
            </h3>
            <p className="text-xs sm:text-sm text-[#43282F] font-sans font-light mb-8 leading-relaxed">
              We collaborate with clients who appreciate architectural restraint, enduring craftsmanship, and tactile materiality.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Project Type */}
              <div>
                <label className="block text-xs font-sans tracking-[0.16em] uppercase text-[#241519] mb-2 font-medium">
                  Project Typology
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {projectTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setProjectType(type)}
                      className={`p-3 text-left text-xs font-sans tracking-[0.06em] border transition-colors cursor-pointer ${
                        projectType === type
                          ? 'bg-[#241519] text-[#F1E8D8] border-[#241519]'
                          : 'bg-[#FAF6EE] text-[#43282F] border-[#77645A]/25 hover:border-[#241519]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans tracking-[0.16em] uppercase text-[#241519] mb-2 font-medium">
                    Site Location
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-3 bg-[#FAF6EE] border border-[#77645A]/25 text-xs font-sans text-[#241519] focus:outline-none focus:border-[#B86F5E]"
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-sans tracking-[0.16em] uppercase text-[#241519] mb-2 font-medium">
                    Estimated Budget
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full p-3 bg-[#FAF6EE] border border-[#77645A]/25 text-xs font-sans text-[#241519] focus:outline-none focus:border-[#B86F5E]"
                  >
                    {budgets.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans tracking-[0.16em] uppercase text-[#241519] mb-2 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Julianne Ross"
                    className="w-full p-3 bg-[#FAF6EE] border border-[#77645A]/25 text-xs font-sans text-[#241519] placeholder:text-[#77645A]/60 focus:outline-none focus:border-[#B86F5E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans tracking-[0.16em] uppercase text-[#241519] mb-2 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="julianne@example.com"
                    className="w-full p-3 bg-[#FAF6EE] border border-[#77645A]/25 text-xs font-sans text-[#241519] placeholder:text-[#77645A]/60 focus:outline-none focus:border-[#B86F5E]"
                  />
                </div>
              </div>

              {/* Project Brief */}
              <div>
                <label className="block text-xs font-sans tracking-[0.16em] uppercase text-[#241519] mb-2 font-medium">
                  Brief Overview (Optional)
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share details regarding your site, timing, or architectural aspirations..."
                  className="w-full p-3 bg-[#FAF6EE] border border-[#77645A]/25 text-xs font-sans text-[#241519] placeholder:text-[#77645A]/60 focus:outline-none focus:border-[#B86F5E] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#B86F5E] hover:bg-[#a66151] active:bg-[#945445] text-[#F1E8D8] text-xs font-sans tracking-[0.2em] uppercase font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
              >
                {isSubmitting ? (
                  <span>Submitting Inquiry...</span>
                ) : (
                  <>
                    <span>Submit Project Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center">
            <div className="w-12 h-12 border border-[#B86F5E] flex items-center justify-center mx-auto mb-6 text-[#B86F5E]">
              <Check className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#241519] mb-3">
              Thank You
            </h3>

            <p className="text-sm text-[#43282F] font-sans font-light leading-relaxed max-w-sm mx-auto mb-8">
              We have received your architectural inquiry. Director Marcus Reid or our senior studio associate will be in touch within two business days.
            </p>

            <div className="p-4 bg-[#FAF6EE] border border-[#77645A]/20 text-xs font-sans text-left max-w-sm mx-auto mb-8 space-y-1 text-[#43282F]">
              <div><strong className="text-[#241519]">Scope:</strong> {projectType}</div>
              <div><strong className="text-[#241519]">Location:</strong> {location}</div>
              <div><strong className="text-[#241519]">Budget:</strong> {budget}</div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-3 border border-[#241519] text-xs font-sans tracking-[0.2em] uppercase font-medium text-[#241519] hover:bg-[#241519] hover:text-[#F1E8D8] transition-colors cursor-pointer"
            >
              Return to Studio
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
