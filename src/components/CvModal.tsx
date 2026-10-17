import React from 'react';
import { X, Printer, Mail, Phone, MapPin, Globe, CheckCircle2 } from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto print:p-0">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity print:hidden"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 z-10 my-8 print:my-0 print:border-none print:shadow-none print:rounded-none">
        
        {/* Header Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 print:hidden bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-slate-800 dark:text-slate-200">
              Malik Ahtasham Javed — Curriculum Vitae
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              style={{ background: 'var(--accent-gradient)' }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-semibold hover:opacity-95 transition-all cursor-pointer shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CV Document Content */}
        <div className="p-8 sm:p-12 space-y-8 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
          
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                Malik Ahtasham Javed
              </h1>
              <p className="text-lg font-semibold text-[var(--accent)] mt-1">
                Web Developer & UI/UX Designer
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
                Passionate digital creator specializing in building modern web apps, high-performance user interfaces, and engaging user-centered digital solutions.
              </p>
            </div>

            <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>malik.ahtasham@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>New York, NY, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>portfolio.malikahtasham.dev</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--accent)]">
              Professional Experience
            </h3>

            <div className="space-y-6">
              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <span className="font-bold text-slate-900 dark:text-white">Senior Frontend & UI Engineer</span>
                  <span className="text-xs text-slate-500">2023 — Present</span>
                </div>
                <div className="text-xs font-semibold text-[var(--accent)]">Apex Digital Interactive · New York, NY</div>
                <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside">
                  <li>Architected component design systems across 12+ enterprise SaaS clients with React and Tailwind CSS.</li>
                  <li>Improved Core Web Vitals resulting in 35% faster page load times and 42% conversion bump.</li>
                  <li>Mentored junior frontend developers and established Figma-to-code design system workflows.</li>
                </ul>
              </div>

              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <span className="font-bold text-slate-900 dark:text-white">UI/UX Designer & Web Developer</span>
                  <span className="text-xs text-slate-500">2021 — 2023</span>
                </div>
                <div className="text-xs font-semibold text-[var(--accent)]">Venture Studios · San Francisco, CA</div>
                <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside">
                  <li>Crafted mobile-first user experiences, interactive prototypes, and landing pages for tech startups.</li>
                  <li>Delivered over 30 successful client projects on schedule with 100% positive feedback.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Core Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--accent)]">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'React',
                  'TypeScript',
                  'Next.js',
                  'Tailwind CSS',
                  'Node.js',
                  'HTML5 / CSS3',
                  'Figma / UI Design',
                  'REST & GraphQL',
                  'Git & CI/CD',
                  'Responsive Design',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--accent)]">
                Education
              </h3>
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  B.S. in Computer Science
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  New York University (NYU) · 2017 — 2021
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Focus: Human-Computer Interaction & Web Systems
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
