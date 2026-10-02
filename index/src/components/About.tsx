import React from 'react';
import { PORTFOLIO_OWNER } from '../data/portfolioData';
import { Target, TrendingUp, Users, Search, Award, Languages } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#174B32] inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#F4B900]" />
            About & Introduction
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-2 text-balance">
            Blending Data-Driven Intelligence with Impactful Creative Strategy
          </h2>
        </div>

        {/* Two-Column Clean Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Who I Am & Approach */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg text-stone-700 leading-relaxed font-normal">
              I am a results-oriented Digital Marketer with over two years of hands-on expertise in Social Media Intelligence, Performance Marketing, Paid Media, and Organic SEO. Based in New Delhi, I work at the intersection of consumer psychology, data analytics, and high-converting visual storytelling.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/70 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#174B32] text-white flex items-center justify-center">
                  <Target className="w-5 h-5 text-[#F4B900]" />
                </div>
                <h3 className="text-base font-bold text-stone-900">What I Specialize In</h3>
                <p className="text-sm text-stone-600 leading-normal">
                  Paid advertising on Meta & Google Ads, full-funnel conversion optimization, organic SEO to capture Google Page 1 positions, and social competitor intelligence.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/70 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#174B32] text-white flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#F4B900]" />
                </div>
                <h3 className="text-base font-bold text-stone-900">My Approach to Work</h3>
                <p className="text-sm text-stone-600 leading-normal">
                  Zero guesswork. Every campaign begins with deep audience research and competitor benchmarking, followed by disciplined A/B creative testing and relentless ROAS scaling.
                </p>
              </div>
            </div>

            {/* Languages & Working Style */}
            <div className="p-5 rounded-2xl bg-[#F7F6F2] border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white border border-stone-300 flex items-center justify-center text-stone-700">
                  <Languages className="w-4 h-4 text-[#174B32]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Language Fluency
                  </div>
                  <div className="text-sm font-semibold text-stone-900 mt-0.5">
                    Hindi (Native) · English (Intermediate)
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#174B32] bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200/70">
                <Award className="w-4 h-4 text-[#F4B900]" />
                <span>Verified Client Results</span>
              </div>
            </div>
          </div>

          {/* Right Column: Statistics Grid & Key Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#174B32] text-white shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b border-emerald-800/80 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F4B900]">
                  Performance Metrics
                </span>
                <span className="text-xs text-stone-300">2024 – 2026 Trajectory</span>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {PORTFOLIO_OWNER.stats.map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#F4B900] tabular-nums tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {stat.label}
                    </div>
                    <div className="text-xs text-stone-300">
                      {stat.context}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-emerald-800/80">
                <p className="text-xs text-stone-300 leading-relaxed">
                  "Measurable growth is the only benchmark that matters. Whether reducing CPL by 25% or surging YouTube subscribers by 40%, the focus remains unwavering on sustainable ROI."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
