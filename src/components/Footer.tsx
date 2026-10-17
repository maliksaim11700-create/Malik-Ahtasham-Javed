import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="w-full border-t border-slate-200/90 dark:border-slate-800 bg-[#F8F9FA] dark:bg-[#0B1120] py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <a href="#home" className="flex items-center gap-2 group">
              <div
                style={{ background: 'var(--accent-gradient)' }}
                className="w-8 h-8 rounded-lg text-white flex items-center justify-center font-bold text-xs tracking-wide shadow-sm"
              >
                <span className="font-serif italic text-[11px]">MAJ</span>
              </div>
              <span className="font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-[var(--accent)] transition-colors">
                Malik Ahtasham Javed
              </span>
            </a>
            
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
            
            <span className="text-xs text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} Malik Ahtasham Javed. All rights reserved.
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-[var(--accent)] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Made with and Back to Top Button */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
              <span>for a better web</span>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-[var(--accent)] hover:text-white dark:hover:bg-[var(--accent)] transition-all flex items-center justify-center cursor-pointer shadow-sm hover:scale-105"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
