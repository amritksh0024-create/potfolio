import React from 'react';
import { PORTFOLIO_OWNER } from '../data/portfolioData';
import { ArrowUp, Mail, Phone, MessageSquare, Linkedin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F4B900]" />
              <span className="text-xl font-bold text-white tracking-tight">
                {PORTFOLIO_OWNER.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              Performance Marketer, Social Media Intelligence Specialist, and SEO Growth Practitioner based in New Delhi. Helping brands scale through data and creative execution.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`mailto:${PORTFOLIO_OWNER.email}`}
                className="w-8 h-8 rounded-full bg-stone-800 hover:bg-[#174B32] hover:text-[#F4B900] text-stone-300 flex items-center justify-center transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${PORTFOLIO_OWNER.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-stone-800 hover:bg-[#174B32] hover:text-[#F4B900] text-stone-300 flex items-center justify-center transition-colors"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://callmitraapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-stone-800 hover:bg-[#174B32] hover:text-[#F4B900] text-stone-300 flex items-center justify-center transition-colors"
                title="Client Platforms"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About & Approach</a>
              </li>
              <li>
                <a href="#journey" className="hover:text-white transition-colors">Education & Journey</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">Skills & Tooling</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Pricing Model</a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Client Portals & Contact Direct */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </div>
            <p className="text-xs text-stone-400">
              Vasant Kunj, New Delhi - 110070
            </p>
            <div className="text-xs space-y-1">
              <div>
                <a href={`mailto:${PORTFOLIO_OWNER.email}`} className="text-stone-300 hover:text-[#F4B900] transition-colors">
                  {PORTFOLIO_OWNER.email}
                </a>
              </div>
              <div>
                <a href="tel:+919289656024" className="text-stone-300 hover:text-[#F4B900] transition-colors tabular-nums">
                  +91-9289656024 / 9315063354
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-[11px] font-semibold text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4B900]" />
                Available for Q4/Q1 Projects
              </span>
            </div>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_OWNER.name}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors group cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
