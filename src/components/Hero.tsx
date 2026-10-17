import React from 'react';
import { ArrowRight, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import { portfolioImages, statsData } from '../data/portfolioData';

interface HeroProps {
  onOpenHire: () => void;
  onScrollToProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenHire, onScrollToProjects }) => {
  return (
    <section id="home" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 z-10">
            {/* Kicker */}
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[var(--accent)]"></span>
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[var(--accent)] uppercase">
                HELLO, I'M
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
              Malik Ahtasham <span className="text-[var(--accent)] transition-colors">Javed</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-200">
              Web Developer & UI/UX Designer
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              I build modern, responsive and user-friendly digital experiences that help businesses grow.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenHire}
                style={{ background: 'var(--accent-gradient)' }}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-medium hover:opacity-95 transition-all shadow-md hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={onScrollToProjects}
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-medium border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-400 transition-all cursor-pointer shadow-sm"
              >
                View My Work
              </button>
            </div>

            {/* Social Media Row */}
            <div className="flex items-center gap-3 pt-3">
              {[
                { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
                { icon: Github, label: 'GitHub', href: 'https://github.com' },
                { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
                { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-slate-900 dark:bg-slate-800 text-white flex items-center justify-center hover:bg-[var(--accent)] dark:hover:bg-[var(--accent)] transition-all duration-200 hover:scale-105 shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Stats Row */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {statsData.map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Hero Graphic Showcase */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px]">
              
              {/* Background Arch & Lighting Accent */}
              <div className="absolute inset-0 -top-6 -bottom-6 bg-gradient-to-tr from-[#FCEEE8] to-[#FFF8F5] dark:from-[#2A1D17] dark:to-[#1E293B] rounded-[48px] -z-10 rotate-1 shadow-inner"></div>

              {/* Composition Container */}
              <div className="relative">
                
                {/* Secondary Workspace Photo Card (Behind Portrait) */}
                <div className="hidden sm:block absolute -top-8 -right-8 w-44 md:w-52 h-52 md:h-60 rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-800 rotate-6 -z-5 group transition-transform hover:rotate-3 duration-300">
                  <img
                    src={portfolioImages.deskWorkspace}
                    alt="Alex Carter Workspace"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating Hand-written note sticker */}
                  <div className="absolute top-2 right-2 bg-amber-50/95 dark:bg-slate-900/95 border border-amber-200/60 dark:border-slate-700 p-2 rounded-lg shadow-sm text-right">
                    <p className="font-script text-xs md:text-sm text-amber-900 dark:text-amber-300 font-semibold leading-tight">
                      Code<br/>Design<br/>Develop<br/>Repeat
                    </p>
                  </div>
                </div>

                {/* Main Portrait Frame with Arch Mask */}
                <div className="relative mx-auto w-64 sm:w-72 md:w-80 h-80 sm:h-96 md:h-[420px] rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-[#E8D4C8] dark:bg-[#3E291F]">
                  <img
                    src={portfolioImages.alexPortrait}
                    alt="Malik Ahtasham Javed - Web Developer and Designer"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://i.pinimg.com/736x/8e/ff/03/8eff032f266f8276929a387d1b1dd215.jpg';
                    }}
                  />
                </div>

                {/* Script Annotation: "Turning Ideas into Reality" */}
                <div className="absolute -top-3 left-4 sm:-left-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full shadow-md border border-slate-100 dark:border-slate-800 flex items-center gap-1.5 -rotate-6">
                  <span className="font-script text-base sm:text-lg text-[var(--accent)] font-bold">
                    Turning Ideas into Reality ✨
                  </span>
                </div>

                {/* Floating Availability Pill Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg border border-slate-200/80 dark:border-slate-700/80 flex items-center gap-2.5 whitespace-nowrap">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100">
                    Available for Freelance Work
                  </span>
                </div>

                {/* Floating "Good Design Builds Great Brands" Badge */}
                <div className="hidden md:block absolute bottom-8 -right-12 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 max-w-[150px] rotate-3">
                  <p className="font-script text-base text-slate-800 dark:text-slate-200 leading-snug font-semibold">
                    “Good Design Builds Great Brands.”
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
