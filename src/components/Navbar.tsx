import React, { useState } from 'react';
import { Download, Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeColorPicker } from './ThemeColorPicker';
import { ColorTheme } from '../theme/colors';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  currentTheme: ColorTheme;
  onSelectTheme: (theme: ColorTheme) => void;
  onOpenCv: () => void;
  onOpenHire: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  currentTheme,
  onSelectTheme,
  onOpenCv,
  onOpenHire,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#F8F9FA]/90 dark:bg-[#0F172A]/90 border-b border-black/5 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Zone */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-lg"
        >
          {/* Stylized Logo */}
          <div
            style={{ background: 'var(--accent-gradient)' }}
            className="w-10 h-10 rounded-xl text-white flex items-center justify-center font-bold text-base tracking-wider shadow-sm group-hover:scale-105 transition-transform duration-200"
          >
            <span className="font-serif italic font-extrabold text-white">MAJ</span>
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-[var(--accent)] transition-colors">
            Malik Ahtasham Javed
          </span>
        </a>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[var(--accent)] dark:hover:text-[var(--accent)] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--accent)] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons Zone */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Color Palette Customizer */}
          <ThemeColorPicker
            currentTheme={currentTheme}
            onSelectTheme={onSelectTheme}
          />

          {/* Download CV Button */}
          <button
            onClick={onOpenCv}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-full hover:bg-slate-800 dark:hover:bg-slate-100 hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span>Download CV</span>
            <Download className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="w-10 h-10 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-[#F8F9FA] dark:bg-[#0F172A] px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-[var(--accent)] hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-md transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCv();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900"
            >
              <span>Download CV</span>
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHire();
              }}
              style={{ background: 'var(--accent-gradient)' }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-full text-white shadow"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
