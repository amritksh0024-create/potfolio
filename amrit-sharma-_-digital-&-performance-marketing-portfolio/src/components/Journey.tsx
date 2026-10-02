import React from 'react';
import { EXPERIENCES, EDUCATION } from '../data/portfolioData';
import { GraduationCap, Briefcase, MapPin, Calendar, CheckCircle } from 'lucide-react';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-20 bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#174B32] inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#F4B900]" />
            Career Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-2 text-balance">
            Academic & Professional Journey
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            A track record of continuous learning, rigorous analytical execution, and tangible client outcomes.
          </p>
        </div>

        {/* Two Separate Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* CARD 1: WORK EXPERIENCE */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#174B32] text-white flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-[#F4B900]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900">Work Experience</h3>
                  <p className="text-xs text-stone-500">Commercial & Agency Practicum</p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-[#174B32] border border-emerald-200/60">
                2+ Years
              </span>
            </div>

            <div className="space-y-8 relative before:absolute before:top-3 before:bottom-3 before:left-3 before:w-0.5 before:bg-stone-200">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative pl-8 group">
                  {/* Small yellow circular icon/bullet as requested */}
                  <div className="absolute left-1.5 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-3 border-[#F4B900] group-hover:scale-125 transition-transform" />

                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <h4 className="text-base font-bold text-stone-900 group-hover:text-[#174B32] transition-colors">
                        {exp.role}
                      </h4>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 tabular-nums">
                        {exp.period}
                      </span>
                    </div>

                    <div className="text-xs font-medium text-stone-600 flex items-center gap-2">
                      <span className="font-semibold text-stone-800">{exp.company}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-stone-400" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="pt-2 space-y-1.5 text-xs sm:text-sm text-stone-600">
                      {exp.highlights.slice(0, 3).map((hl, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#174B32] shrink-0 mt-0.5" />
                          <span className="leading-snug">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CARD 2: EDUCATION */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#174B32] text-white flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-[#F4B900]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900">Education & Training</h3>
                  <p className="text-xs text-stone-500">Academic & Skill Accreditations</p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/60">
                Verified
              </span>
            </div>

            <div className="space-y-8 relative before:absolute before:top-3 before:bottom-3 before:left-3 before:w-0.5 before:bg-stone-200">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="relative pl-8 group">
                  {/* Small yellow circular icon/bullet as requested */}
                  <div className="absolute left-1.5 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-3 border-[#F4B900] group-hover:scale-125 transition-transform" />

                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <h4 className="text-base font-bold text-stone-900 group-hover:text-[#174B32] transition-colors">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 tabular-nums">
                        {edu.year}
                      </span>
                    </div>

                    <div className="text-xs font-medium text-stone-600 flex items-center gap-2">
                      <span className="font-semibold text-stone-800">{edu.institution}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-stone-400" />
                        {edu.location}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 pt-1 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom summary callout */}
            <div className="mt-4 p-4 rounded-xl bg-[#F7F6F2] border border-stone-200/80 text-xs text-stone-600 flex items-center justify-between">
              <span>Continuous upskilling in algorithmic paid media & AI automation</span>
              <span className="w-2 h-2 rounded-full bg-[#174B32]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
