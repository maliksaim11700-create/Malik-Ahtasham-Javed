import React from 'react';
import { ArrowRight } from 'lucide-react';
import { portfolioImages } from '../data/portfolioData';

interface CtaBannerProps {
  onOpenHire: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenHire }) => {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/40">
          
          {/* Panoramic Mountain Landscape Backdrop */}
          <div className="absolute inset-0">
            <img
              src={portfolioImages.mountainBanner}
              alt="Mountain panorama"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            {/* Scrim Overlay for WCAG contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60"></div>
          </div>

          {/* Banner Content Container */}
          <div className="relative z-10 px-6 py-12 sm:px-12 sm:py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Left Content */}
            <div className="space-y-4 max-w-xl text-left">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[var(--accent)]"></span>
                <span className="text-xs font-bold tracking-[0.2em] text-[var(--accent)] uppercase">
                  LET'S WORK TOGETHER
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Have a project in mind?
              </h2>

              <p className="text-sm sm:text-base text-slate-300">
                I'd love to hear from you. Let's create something amazing together.
              </p>
            </div>

            {/* Right Action & Handwritten Script Note */}
            <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-12 shrink-0">
              <button
                onClick={onOpenHire}
                style={{ background: 'var(--accent-gradient)' }}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-sm shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Decorative Handwritten text matching original */}
              <div className="hidden sm:block text-right">
                <p className="font-script text-xl sm:text-2xl text-amber-200/90 leading-tight font-bold -rotate-3 select-none">
                  Dream<br />
                  Plan<br />
                  Build<br />
                  Together
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
