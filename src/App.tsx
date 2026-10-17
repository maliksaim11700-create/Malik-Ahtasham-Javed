import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { AboutSection } from './components/AboutSection';
import { CtaBanner } from './components/CtaBanner';
import { TestimonialsAndContact } from './components/TestimonialsAndContact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CvModal } from './components/CvModal';
import { HireModal } from './components/HireModal';
import { AllProjectsModal } from './components/AllProjectsModal';
import { Project } from './types';
import { MessageSquarePlus } from 'lucide-react';
import { colorThemes, ColorTheme, defaultTheme } from './theme/colors';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [currentTheme, setCurrentTheme] = useState<ColorTheme>(() => {
    if (typeof window !== 'undefined') {
      const savedThemeId = localStorage.getItem('accent-theme');
      if (savedThemeId) {
        const found = colorThemes.find((t) => t.id === savedThemeId);
        if (found) return found;
      }
    }
    return defaultTheme;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCvOpen, setIsCvOpen] = useState<boolean>(false);
  const [isHireOpen, setIsHireOpen] = useState<boolean>(false);
  const [hireService, setHireService] = useState<string>('Web Development');
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', currentTheme.primary);
    root.style.setProperty('--accent-hover', currentTheme.hover);
    root.style.setProperty('--accent-gradient', currentTheme.gradient);
    root.style.setProperty('--accent-soft', currentTheme.soft);
    root.style.setProperty('--accent-ring', currentTheme.ring);
    localStorage.setItem('accent-theme', currentTheme.id);
  }, [currentTheme]);

  const handleOpenHireWithService = (serviceName: string) => {
    setHireService(serviceName);
    setIsHireOpen(true);
  };

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-[#0B1120] text-slate-900 dark:text-slate-100 selection:bg-[var(--accent)] selection:text-white transition-colors duration-300">
      
      {/* Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        currentTheme={currentTheme}
        onSelectTheme={setCurrentTheme}
        onOpenCv={() => setIsCvOpen(true)}
        onOpenHire={() => setIsHireOpen(true)}
      />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenHire={() => setIsHireOpen(true)}
          onScrollToProjects={handleScrollToProjects}
        />

        {/* Featured Projects Grid */}
        <FeaturedProjects
          onSelectProject={(project) => setSelectedProject(project)}
          onViewAllProjects={() => setIsAllProjectsOpen(true)}
        />

        {/* 3-Column Section: About Me, My Skills, My Services */}
        <AboutSection
          onSelectService={(service) => handleOpenHireWithService(service)}
        />

        {/* Panoramic Mountain Sunset CTA Banner */}
        <CtaBanner onOpenHire={() => setIsHireOpen(true)} />

        {/* Testimonials & Contact Section */}
        <TestimonialsAndContact />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Floating Action Button (Quick Contact / Hire Trigger) */}
      <button
        onClick={() => setIsHireOpen(true)}
        style={{ background: 'var(--accent-gradient)' }}
        aria-label="Quick Hire or Message"
        className="fixed bottom-6 right-6 z-30 p-3.5 rounded-full text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer group"
      >
        <MessageSquarePlus className="w-5 h-5 group-hover:rotate-12 transition-transform" />
      </button>

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenHire={() => setIsHireOpen(true)}
      />

      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
      />

      <HireModal
        isOpen={isHireOpen}
        onClose={() => setIsHireOpen(false)}
        defaultService={hireService}
      />

      <AllProjectsModal
        isOpen={isAllProjectsOpen}
        onClose={() => setIsAllProjectsOpen(false)}
        onSelectProject={(project) => setSelectedProject(project)}
      />

    </div>
  );
}
