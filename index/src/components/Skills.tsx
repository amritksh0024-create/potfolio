import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Sparkles, Layers, SlidersHorizontal } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | 'all'>('all');

  const displayedCategories = 
    activeCategoryIndex === 'all' 
      ? SKILL_CATEGORIES 
      : [SKILL_CATEGORIES[activeCategoryIndex]];

  return (
    <section id="skills" className="py-20 bg-white border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#174B32] inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#F4B900]" />
              Core Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-2 text-balance">
              Skills & Strategic Expertise
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Cross-functional execution combining analytical ad operations with persuasive visual creative assets.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center flex-wrap gap-1.5 p-1.5 bg-stone-100 rounded-2xl border border-stone-200">
            <button
              onClick={() => setActiveCategoryIndex('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                activeCategoryIndex === 'all'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Skills
            </button>
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                  activeCategoryIndex === idx
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="bg-[#F7F6F2] rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-xs space-y-6 hover:border-stone-300 transition-colors"
            >
              <div className="border-b border-stone-200/80 pb-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#174B32]" />
                    <span>{category.name}</span>
                  </h3>
                  <span className="text-xs font-medium text-stone-500">
                    {category.skills.length} Competencies
                  </span>
                </div>
                <p className="text-xs text-stone-600 mt-1">
                  {category.description}
                </p>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="font-semibold text-stone-900">{skill.name}</span>
                      <span className="text-xs font-bold text-[#174B32] tabular-nums">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Minimal Progress Bar */}
                    <div className="h-2 w-full bg-stone-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#174B32] to-[#206141] rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    {/* Unboxed clean metadata tags */}
                    <div className="text-[11px] text-stone-500 font-mono tracking-tight pt-0.5">
                      {skill.tags}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Marquee Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-stone-200/80">
          <div className="text-xs font-bold uppercase tracking-wider text-stone-500 text-center mb-4">
            Daily Execution & Production Stack
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm font-semibold text-stone-700">
            <span className="hover:text-[#174B32] transition-colors">Meta Ads Manager</span>
            <span className="text-stone-300">·</span>
            <span className="hover:text-[#174B32] transition-colors">Google Ads</span>
            <span className="text-stone-300">·</span>
            <span className="hover:text-[#174B32] transition-colors">SEMrush</span>
            <span className="text-stone-300">·</span>
            <span className="hover:text-[#174B32] transition-colors">Google Search Console</span>
            <span className="text-stone-300">·</span>
            <span className="hover:text-[#174B32] transition-colors">Google Analytics 4</span>
            <span className="text-stone-300">·</span>
            <span className="hover:text-[#174B32] transition-colors">Adobe Photoshop</span>
            <span className="text-stone-300">·</span>
            <span className="hover:text-[#174B32] transition-colors">CapCut & Premiere Pro</span>
            <span className="text-stone-300">·</span>
            <span className="hover:text-[#174B32] transition-colors">Canva Pro</span>
            <span className="text-stone-300">·</span>
            <span className="hover:text-[#174B32] transition-colors">WordPress & Yoast</span>
          </div>
        </div>
      </div>
    </section>
  );
};
