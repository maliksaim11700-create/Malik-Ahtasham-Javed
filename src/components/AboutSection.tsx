import React from 'react';
import {
  Laptop,
  PenTool,
  Smartphone,
  Wrench,
  ChevronRight,
  Quote,
} from 'lucide-react';
import { portfolioImages, skillsData, servicesData } from '../data/portfolioData';

interface AboutSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onSelectService }) => {
  // Service Icon mapping
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'laptop':
        return <Laptop className="w-5 h-5 text-[var(--accent)]" />;
      case 'pen':
        return <PenTool className="w-5 h-5 text-[var(--accent)]" />;
      case 'phone':
        return <Smartphone className="w-5 h-5 text-[var(--accent)]" />;
      case 'settings':
        return <Wrench className="w-5 h-5 text-[var(--accent)]" />;
      default:
        return <Laptop className="w-5 h-5 text-[var(--accent)]" />;
    }
  };

  // Tech Skill SVG Icons
  const renderSkillIcon = (type: string) => {
    switch (type) {
      case 'html':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#E34F26]/10 text-[#E34F26] flex items-center justify-center font-bold text-xs">
            <span className="font-mono font-black">5</span>
          </div>
        );
      case 'css':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#1572B6]/10 text-[#1572B6] flex items-center justify-center font-bold text-xs">
            <span className="font-mono font-black">3</span>
          </div>
        );
      case 'js':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#F7DF1E]/20 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-xs">
            <span className="font-mono font-black">JS</span>
          </div>
        );
      case 'react':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#61DAFB]/15 text-[#0088cc] dark:text-[#61DAFB] flex items-center justify-center font-bold text-xs">
            <span className="text-sm">⚛</span>
          </div>
        );
      case 'node':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#339933]/15 text-[#339933] flex items-center justify-center font-bold text-xs">
            <span className="font-mono font-black text-xs">N</span>
          </div>
        );
      case 'figma':
        return (
          <div className="w-8 h-8 rounded-lg bg-pink-500/15 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold text-xs">
            <span className="font-mono font-black text-xs">F</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3 Columns Grid (About Me / My Skills / My Services) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Column 1: About Me */}
          <div id="about-me" className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[var(--accent)]"></span>
              <h2 className="text-sm font-bold tracking-[0.2em] text-[var(--accent)] uppercase">
                ABOUT ME
              </h2>
            </div>

            <div className="flex gap-5 items-start">
              {/* Photo with Experience Badge */}
              <div className="relative shrink-0 w-28 sm:w-32 h-36 sm:h-40 rounded-2xl overflow-hidden shadow-md border-2 border-white dark:border-slate-800 bg-[#E8D4C8]">
                <img
                  src={portfolioImages.alexPortrait}
                  alt="Malik Ahtasham Javed"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://i.pinimg.com/736x/8e/ff/03/8eff032f266f8276929a387d1b1dd215.jpg';
                  }}
                />
                {/* 5+ Years Badge */}
                <div className="absolute top-2 right-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-lg px-2 py-1 shadow text-center border border-black/5 dark:border-white/10">
                  <div className="text-xs font-extrabold text-[var(--accent)] leading-tight">5+</div>
                  <div className="text-[9px] font-semibold text-slate-600 dark:text-slate-400 leading-tight">
                    Years<br/>Experience
                  </div>
                </div>
              </div>

              {/* Bio summary */}
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                I'm Malik Ahtasham Javed, a passionate web developer and UI/UX designer based in New York, USA. 
                I love transforming ideas into beautiful and functional digital products. 
                My goal is to create impactful solutions that help businesses grow and make a difference.
              </p>
            </div>

            {/* Steve Jobs Quote Card */}
            <div className="relative p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
              <div className="flex gap-3">
                <Quote className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5 fill-[var(--accent)]/20" />
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm italic text-slate-700 dark:text-slate-300">
                    “Design is not just what it looks like, but how it works.”
                  </p>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    — Steve Jobs
                  </p>
                </div>
              </div>
            </div>

            {/* Handwritten Signature */}
            <div className="pt-2 pl-2">
              <div className="font-script text-3xl sm:text-4xl text-slate-800 dark:text-slate-200 -rotate-3 select-none">
                Malik Ahtasham
              </div>
            </div>
          </div>

          {/* Column 2: My Skills */}
          <div id="skills" className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[var(--accent)]"></span>
              <h2 className="text-sm font-bold tracking-[0.2em] text-[var(--accent)] uppercase">
                MY SKILLS
              </h2>
            </div>

            <div className="space-y-5 pt-2">
              {skillsData.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {renderSkillIcon(skill.iconType)}
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 tabular-nums">
                      {skill.percentage}%
                    </span>
                  </div>

                  {/* Progress Bar with dynamic accent gradient */}
                  <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.percentage}%`,
                        background: 'var(--accent-gradient)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: My Services */}
          <div id="services" className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[var(--accent)]"></span>
              <h2 className="text-sm font-bold tracking-[0.2em] text-[var(--accent)] uppercase">
                MY SERVICES
              </h2>
            </div>

            <div className="space-y-3 pt-2">
              {servicesData.map((service) => (
                <div
                  key={service.id}
                  onClick={() => onSelectService?.(service.title)}
                  className="group p-4 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:border-[var(--accent)]/50 hover:shadow-md transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-[var(--accent)]/10 group-hover:bg-[var(--accent)]/20 transition-colors shrink-0">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[var(--accent)] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-slate-400 group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
