import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#F7F6F2] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#174B32] inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#F4B900]" />
            Client Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight text-balance">
            Trusted by Foundations, Founders & Institutes
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Real feedback from leaders whose digital presence and user acquisition grew under my execution.
          </p>
        </div>

        {/* Testimonials 3-Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-stone-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              {/* Top Quote Icon & 5 Stars */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F4B900] text-[#F4B900]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-stone-300" />
                </div>

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#174B32] text-[#F4B900] font-bold text-xs flex items-center justify-center border-2 border-white shadow-xs">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    {t.author}
                  </h4>
                  <div className="text-xs text-stone-500">
                    {t.role} · <span className="font-semibold text-stone-700">{t.organization}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
