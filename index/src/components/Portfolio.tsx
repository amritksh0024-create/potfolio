import React, { useState } from 'react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { ExternalLink, ArrowUpRight, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

interface PortfolioProps {
  onProjectClick: (project: ProjectItem) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onProjectClick }) => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Non-Profit & Social Impact', label: 'Social Impact' },
    { id: 'Mobile App & Performance Marketing', label: 'App Performance' },
    { id: 'Construction & Infrastructure', label: 'Infrastructure' },
    { id: 'EdTech & Exam Preparation', label: 'EdTech & SEO' }
  ];

  const filteredProjects = 
    filter === 'all' 
      ? PROJECTS 
      : PROJECTS.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()) || filter.toLowerCase().includes(p.category.toLowerCase()));

  return (
    <section id="work" className="py-24 bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#174B32] inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#F4B900]" />
              Proven Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-2 text-balance">
              Selected Work & Client Outcomes
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Explore live commercial web platforms, viral performance funnels, and organic search campaigns.
            </p>
          </div>

          {/* Clean Segmented Filter Tabs */}
          <div className="flex items-center flex-wrap gap-1.5 p-1 bg-white rounded-2xl border border-stone-200/90 shadow-2xs">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                  filter === c.id
                    ? 'bg-[#174B32] text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Editorial Cards Grid (Image-Free) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                onClick={() => onProjectClick(project)}
                className="group cursor-pointer bg-white rounded-3xl p-7 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-stone-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Category & Client Header */}
                  <div className="flex items-center justify-between gap-2 border-b border-stone-100 pb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#174B32] bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/60">
                      {project.category}
                    </span>
                    <span className="text-xs font-medium text-stone-500">
                      {project.client}
                    </span>
                  </div>

                  {/* Primary Highlight Metrics Strip */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/70 group-hover:bg-[#174B32]/5 group-hover:border-[#174B32]/20 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-extrabold text-[#174B32] tabular-nums tracking-tight">
                          {project.metrics[0].value}
                        </div>
                        <div className="text-xs font-medium text-stone-600 mt-0.5">
                          {project.metrics[0].label}
                        </div>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-[#174B32] text-[#F4B900] flex items-center justify-center">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Secondary Metric */}
                    {project.metrics[1] && (
                      <div className="mt-3 pt-2.5 border-t border-stone-200/60 flex items-center justify-between text-xs">
                        <span className="text-stone-500">{project.metrics[1].label}:</span>
                        <span className="font-bold text-stone-800 tabular-nums">
                          {project.metrics[1].value}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-bold text-stone-900 group-hover:text-[#174B32] transition-colors tracking-tight">
                        {project.title}
                      </h3>
                      <div className="w-8 h-8 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-600 group-hover:bg-[#174B32] group-hover:text-[#F4B900] group-hover:border-[#174B32] transition-colors shrink-0 mt-0.5">
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>

                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Deliverables / Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.services.slice(0, 3).map((service, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-medium text-stone-600 bg-stone-100 px-2 py-0.5 rounded-md"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer metadata & live link */}
                <div className="pt-5 mt-6 border-t border-stone-100 flex items-center justify-between text-xs">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-stone-500 hover:text-[#174B32] font-semibold transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{project.displayUrl}</span>
                  </a>

                  <span className="font-bold text-[#174B32] group-hover:underline">
                    View Details →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
