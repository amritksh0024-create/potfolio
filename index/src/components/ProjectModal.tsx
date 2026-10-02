import React, { useEffect } from 'react';
import { ProjectItem } from '../data/portfolioData';
import { X, ExternalLink, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Clean Editorial Header (No Image) */}
        <div className="relative p-6 sm:p-8 bg-[#174B32] text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B900]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-1.5 pr-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F4B900] inline-block">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm">
              Client: <span className="font-semibold text-white">{project.client}</span>
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Key Metrics Strip */}
          <div className="grid grid-cols-3 gap-3 p-4 bg-stone-50 rounded-2xl border border-stone-200/80">
            {project.metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-[#174B32] tabular-nums">
                  {metric.value}
                </div>
                <div className="text-xs font-medium text-stone-600 mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Project Overview & Strategy
            </h4>
            <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
              {project.fullOverview}
            </p>
          </div>

          {/* Deliverables & Services */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Deliverables & Core Focus
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.services.map((service, i) => (
                <div 
                  key={i} 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-[#174B32] text-xs font-medium border border-emerald-200/60"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#174B32]" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#174B32] hover:text-[#0D2D1E] hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Visit Live Website ({project.displayUrl})</span>
            </a>

            <button
              onClick={() => {
                onInquire(project.title);
                onClose();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#174B32] text-white hover:bg-[#0D2D1E] transition-colors font-medium text-sm shadow-sm"
            >
              <span>Discuss Similar Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
