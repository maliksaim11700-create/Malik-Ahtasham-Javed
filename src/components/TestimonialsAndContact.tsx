import React, { useState } from 'react';
import {
  Star,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';

export const TestimonialsAndContact: React.FC = () => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // Form states
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormName('');
      setFormEmail('');
      setFormMessage('');
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  // Avatar initial color generator
  const getAvatarBg = (name: string) => {
    if (name.includes('Sarah')) return 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200';
    if (name.includes('Michael')) return 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200';
    return 'bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-200';
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('');
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Testimonials */}
          <div id="testimonials" className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[var(--accent)]"></span>
                <span className="text-sm font-bold tracking-[0.2em] text-[var(--accent)] uppercase">
                  TESTIMONIALS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
                What My Clients Say
              </h2>
            </div>

            {/* Testimonials 3 Cards Grid (Desktop & Stacked/Responsive) */}
            <div className="space-y-4">
              {testimonialsData.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => setActiveTestimonialIdx(idx)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeTestimonialIdx === idx
                      ? 'border-[var(--accent)] bg-white dark:bg-slate-900 shadow-md ring-1 ring-[var(--accent)]/20'
                      : 'border-slate-200/90 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Avatar with fallback styling */}
                    <div
                      className={`w-12 h-12 rounded-full overflow-hidden shrink-0 flex items-center justify-center font-bold text-sm shadow-inner ${getAvatarBg(
                        item.name
                      )}`}
                    >
                      <span>{getInitials(item.name)}</span>
                    </div>

                    <div className="flex-1 space-y-2">
                      {/* Star Rating */}
                      <div className="flex items-center gap-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                        "{item.quote}"
                      </p>

                      {/* Author Info */}
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">
                          {item.name}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          {item.role}, {item.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Dot Indicators matching image */}
            <div className="flex items-center justify-center gap-2 pt-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonialIdx(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeTestimonialIdx === idx
                      ? 'w-7 bg-[var(--accent)]'
                      : 'w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Contact Me */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[var(--accent)]"></span>
                <span className="text-sm font-bold tracking-[0.2em] text-[var(--accent)] uppercase">
                  CONTACT ME
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
                Let's Talk
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                Have a question or want to work together? Feel free to reach out!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Contact Info (Left sub-col) */}
              <div className="md:col-span-5 space-y-4">
                <a
                  href="mailto:malik.ahtasham@example.com"
                  className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-[var(--accent)] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-[var(--accent)] transition-colors shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium truncate">
                    malik.ahtasham@example.com
                  </span>
                </a>

                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-[var(--accent)] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-[var(--accent)] transition-colors shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium">
                    +1 (555) 123-4567
                  </span>
                </a>

                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium">
                    New York, USA
                  </span>
                </div>

                {/* Social icons row matching the image */}
                <div className="flex items-center gap-2 pt-2">
                  {[
                    { icon: Linkedin, href: 'https://linkedin.com' },
                    { icon: Github, href: 'https://github.com' },
                    { icon: Twitter, href: 'https://twitter.com' },
                    { icon: Instagram, href: 'https://instagram.com' },
                  ].map(({ icon: Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-[var(--accent)] transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Form (Right sub-col) */}
              <div className="md:col-span-7">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-3.5 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm"
                >
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={3}
                      required
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {submitted && (
                    <div className="flex items-center gap-2 p-3 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 rounded-xl text-xs font-medium">
                      <CheckCircle className="w-4 h-4 shrink-0" />
                      <span>Thank you! Your message has been sent successfully.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{ background: 'var(--accent-gradient)' }}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full text-white font-semibold text-xs tracking-wide uppercase transition-all shadow-md active:scale-98 cursor-pointer disabled:opacity-50 hover:opacity-95"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
