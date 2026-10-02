import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { Compass, Calendar, Palette, Rocket } from 'lucide-react';

export const Process: React.FC = () => {
  const icons = [
    <Compass className="w-5 h-5 text-[#F4B900]" />,
    <Calendar className="w-5 h-5 text-[#F4B900]" />,
    <Palette className="w-5 h-5 text-[#F4B900]" />,
    <Rocket className="w-5 h-5 text-[#F4B900]" />
  ];

  return (
    <section className="py-24 bg-white border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#174B32] inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#F4B900]" />
            Workflow Framework
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight text-balance">
            A Disciplined 4-Step Growth Process
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            From initial audience discovery to scalable campaign optimization, every stage is structured for measurable impact.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="relative bg-[#F7F6F2] rounded-3xl p-6 sm:p-7 border border-stone-200/90 hover:border-stone-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Step Number with Yellow Accent Dot */}
              <div className="flex items-center justify-between border-b border-stone-200/80 pb-4 mb-4">
                <span className="text-3xl sm:text-4xl font-black text-stone-900 font-mono tracking-tight group-hover:text-[#174B32] transition-colors">
                  {step.number}
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#174B32] flex items-center justify-center">
                  {icons[idx]}
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-2 flex-1">
                <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                  {step.title}
                </h3>
                <div className="text-xs font-semibold text-[#174B32]">
                  {step.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">
                  {step.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-4 mt-4 border-t border-stone-200/50 flex items-center justify-between text-[11px] text-stone-500 font-medium">
                <span>Phase {idx + 1} of 4</span>
                <div className="w-2 h-2 rounded-full bg-[#F4B900]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
