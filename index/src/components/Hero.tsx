import React, { useState, useRef, useEffect } from 'react';
import { ArrowDownRight, ArrowUpRight, Sparkles, CheckCircle2, Camera, Upload, RotateCcw, Check } from 'lucide-react';
import { PORTFOLIO_OWNER } from '../data/portfolioData';

interface HeroProps {
  onContactClick: () => void;
  onWorkClick: () => void;
}

const DEFAULT_PORTRAIT = '/src/assets/images/hero_amrit_portrait_photo_1790914263446.jpg';
const STORAGE_KEY = 'amrit_portfolio_hero_image';

export const Hero: React.FC<HeroProps> = ({ onContactClick, onWorkClick }) => {
  const [photoUrl, setPhotoUrl] = useState<string>(DEFAULT_PORTRAIT);
  const [isCustomPhoto, setIsCustomPhoto] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [uploadToast, setUploadToast] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    try {
      const savedPhoto = localStorage.getItem(STORAGE_KEY);
      if (savedPhoto) {
        setPhotoUrl(savedPhoto);
        setIsCustomPhoto(true);
      }
    } catch {
      // Fallback to default if localStorage is disabled or unavailable
    }
  }, []);

  const triggerToast = (msg: string) => {
    setUploadToast(msg);
    setTimeout(() => setUploadToast(null), 3500);
  };

  const processAndSaveImage = (file: File) => {
    if (!file.type.startsWith('image/')) {
      triggerToast('Please select a valid image file (PNG, JPG, WEBP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (!result) return;

      // Create an image to check dimensions and compress if needed for localStorage
      const img = new Image();
      img.onload = () => {
        const maxDimension = 1200;
        let width = img.width;
        let height = img.height;

        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.92);
          try {
            localStorage.setItem(STORAGE_KEY, compressedDataUrl);
          } catch {
            // Storage quota fallback: just keep in memory for the session
          }
          setPhotoUrl(compressedDataUrl);
          setIsCustomPhoto(true);
          triggerToast('Portrait photo updated successfully!');
        } else {
          setPhotoUrl(result);
          setIsCustomPhoto(true);
          try {
            localStorage.setItem(STORAGE_KEY, result);
          } catch {}
          triggerToast('Portrait photo updated successfully!');
        }
      };
      img.src = result;
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processAndSaveImage(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processAndSaveImage(file);
    }
  };

  const handleResetPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
    setPhotoUrl(DEFAULT_PORTRAIT);
    setIsCustomPhoto(false);
    triggerToast('Reverted to default photo');
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:py-20 lg:py-24">
      {/* Subtle background ambient accents */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-40">
        <div className="absolute top-0 right-10 w-72 h-72 rounded-full bg-[#F4B900]/15 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#174B32]/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Small eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 text-stone-800 border border-stone-200/80 text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#F4B900] animate-pulse" />
              <span>Hello, I'm</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-stone-900 tracking-tight leading-[1.08] text-balance">
                {PORTFOLIO_OWNER.name}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-[#174B32] tracking-tight">
                Performance Marketer • Social Media Strategist • Creative Professional
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl text-pretty font-normal">
              Results-driven Digital Marketing specialist with proven expertise in Social Media Intelligence, Meta & Google Paid Media, and High-Impact SEO. I help ambitious brands, NGOs, and enterprises drive measurable audience growth, lower acquisition costs, and dominate Google search rankings.
            </p>

            {/* Key Micro Proof Highlights */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-stone-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#174B32]" />
                <span>3.5x Proven ROAS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#174B32]" />
                <span>Google Page 1 SEO Results</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#174B32]" />
                <span>230K+ Influencer Campaign Scale</span>
              </div>
            </div>

            {/* Two CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onWorkClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#174B32] text-white hover:bg-[#0D2D1E] active:scale-98 transition-all font-semibold text-sm sm:text-base shadow-sm group"
              >
                <span>View My Work</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#F4B900] text-stone-900 hover:bg-[#DC9B00] active:scale-98 transition-all font-semibold text-sm sm:text-base shadow-sm group"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Creative Visual Card with In-App Photo Uploader */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer decorative card frame with soft shadow */}
              <div 
                className={`relative rounded-3xl p-3 bg-white border shadow-xl shadow-stone-200/50 transition-all ${
                  isDragging ? 'border-2 border-dashed border-[#F4B900] scale-[1.01]' : 'border-stone-200/90'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {/* Hidden File Input */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/png,image/jpeg,image/jpg,image/webp"
                  className="hidden"
                  aria-label="Upload custom portrait photo"
                />

                <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden bg-stone-100 group">
                  <img
                    src={photoUrl}
                    alt="Amrit Sharma - Performance Marketer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />

                  {/* Drag overlay cue */}
                  {isDragging && (
                    <div className="absolute inset-0 bg-[#174B32]/85 text-white flex flex-col items-center justify-center gap-2 z-20 backdrop-blur-xs p-4 text-center">
                      <Upload className="w-10 h-10 text-[#F4B900] animate-bounce" />
                      <span className="font-bold text-base">Drop Your Photo Here</span>
                      <span className="text-xs text-stone-200">PNG, JPG or WEBP</span>
                    </div>
                  )}

                  {/* Gradient Scrim for subtle framing */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />


                  {/* Bottom overlay badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-md pointer-events-none">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-[#174B32] uppercase tracking-wider">
                          Based in New Delhi
                        </div>
                        <div className="text-sm font-semibold text-stone-900">
                          Open for Strategic Projects
                        </div>
                      </div>
                      <span className="w-3 h-3 rounded-full bg-[#F4B900] ring-4 ring-[#F4B900]/25" />
                    </div>
                  </div>
                </div>

                {/* Floating Metric Badge 1 (Top Left) */}
                <div className="absolute -top-4 -left-4 sm:-left-6 px-4 py-2.5 rounded-xl bg-[#174B32] text-white shadow-lg border border-emerald-800/40 flex items-center gap-3 pointer-events-none">
                  <div className="w-8 h-8 rounded-lg bg-[#F4B900] text-stone-900 flex items-center justify-center font-bold text-xs">
                    ROI
                  </div>
                  <div>
                    <div className="text-sm font-bold leading-none tabular-nums text-white">3.5x Avg</div>
                    <div className="text-[10px] text-stone-300 font-medium mt-0.5">Meta Campaign Return</div>
                  </div>
                </div>

                {/* Floating Metric Badge 2 (Top Right) */}
                <div className="absolute -bottom-4 -right-4 sm:-right-4 px-4 py-2.5 rounded-xl bg-white text-stone-900 shadow-lg border border-stone-200 flex items-center gap-2.5 pointer-events-none">
                  <Sparkles className="w-4 h-4 text-[#F4B900]" />
                  <div className="text-xs font-bold">
                    <span>2+ Years</span>
                    <span className="text-stone-500 font-normal ml-1">Market Experience</span>
                  </div>
                </div>
              </div>

              {/* Toast Feedback */}
              {uploadToast && (
                <div className="mt-3 p-2.5 rounded-xl bg-[#174B32] text-white text-xs font-medium flex items-center justify-center gap-2 shadow-md animate-in fade-in slide-in-from-bottom-2 duration-200">
                  <Check className="w-3.5 h-3.5 text-[#F4B900]" />
                  <span>{uploadToast}</span>
                </div>
              )}

              {/* Accent yellow dot badge */}
              <div className="absolute -bottom-2 left-6 w-5 h-5 rounded-full bg-[#F4B900] -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
