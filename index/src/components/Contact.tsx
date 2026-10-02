import React, { useState, useEffect } from 'react';
import { PORTFOLIO_OWNER } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare, ArrowRight } from 'lucide-react';

interface ContactProps {
  initialSubject?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialSubject }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Paid Media & Performance',
    budget: '$1,000 – $2,500',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  useEffect(() => {
    if (initialSubject) {
      setFormData(prev => ({
        ...prev,
        projectType: initialSubject.includes('Starter') 
          ? 'Starter Growth Package' 
          : initialSubject.includes('Professional') 
          ? 'Professional Scale Package' 
          : initialSubject.includes('Premium') 
          ? 'Enterprise Dominance Package' 
          : 'Custom Project Inquiry',
        message: `Hello Amrit, I am interested in discussing your ${initialSubject}.`
      }));
    }
  }, [initialSubject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(text);
      setTimeout(() => setCopiedPhone(null), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#174B32] inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#F4B900]" />
            Initiate Collaboration
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight mt-2 text-balance">
            Let's Talk for Your Next Project
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3 text-pretty">
            Have an idea or project in mind? Let's create something meaningful together. Reach out via the form below or connect directly on WhatsApp or Phone.
          </p>
        </div>

        {/* 2-Column Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#F7F6F2] rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#174B32] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900">
                  Message Sent Successfully!
                </h3>
                <p className="text-stone-600 text-sm max-w-md mx-auto">
                  Thank you for reaching out, <span className="font-semibold text-stone-900">{formData.name}</span>. Amrit Sharma has received your inquiry and will respond within 24 business hours.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${PORTFOLIO_OWNER.whatsapp}?text=Hi%20Amrit,%20I%20just%20submitted%20the%20contact%20form%20for%20${encodeURIComponent(formData.projectType)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#174B32] text-white text-xs font-semibold hover:bg-[#0D2D1E] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Ping Directly on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        projectType: 'Paid Media & Performance',
                        budget: '$1,000 – $2,500',
                        message: ''
                      });
                    }}
                    className="text-xs font-semibold text-stone-600 hover:text-stone-900 underline underline-offset-4"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Verma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#174B32] focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#174B32] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#174B32] focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Brand or venture name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#174B32] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#174B32] focus:border-transparent transition-all"
                    >
                      <option value="Paid Media & Performance">Paid Media & Performance (Meta/Google)</option>
                      <option value="SEO Strategy & Google Ranking">SEO Strategy & Google Ranking</option>
                      <option value="Social Media Intelligence">Social Media Intelligence & Pages</option>
                      <option value="Starter Growth Package">Starter Growth Package ($800)</option>
                      <option value="Professional Scale Package">Professional Scale Package ($1,600)</option>
                      <option value="Enterprise Dominance Package">Enterprise Dominance Package ($2,800)</option>
                      <option value="Full Digital Retainer">Full Digital Marketing Retainer</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                      Estimated Monthly Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#174B32] focus:border-transparent transition-all"
                    >
                      <option value="₹40,000 – ₹75,000 (Under $1,000)">₹40,000 – ₹75,000 (Under $1,000)</option>
                      <option value="₹75,000 – ₹1,50,000 ($1,000 – $2,000)">₹75,000 – ₹1,50,000 ($1,000 – $2,000)</option>
                      <option value="₹1,50,000 – ₹3,00,000 ($2,000 – $4,000)">₹1,50,000 – ₹3,00,000 ($2,000 – $4,000)</option>
                      <option value="₹3,00,000+ ($4,000+ Enterprise)">₹3,00,000+ ($4,000+ Enterprise)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                    Project Goals & Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your product, your target audience, current performance hurdles, and what success looks like..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#174B32] focus:border-transparent transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-[#174B32] text-white hover:bg-[#0D2D1E] active:scale-99 transition-all font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4 text-[#F4B900]" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Card */}
            <div className="bg-[#174B32] rounded-3xl p-6 sm:p-8 text-white space-y-6 shadow-md">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F4B900]">
                  Contact Directly
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-1 text-white tracking-tight">
                  Reach Out to Amrit
                </h3>
                <p className="text-xs text-stone-300 mt-1">
                  Prompt replies guaranteed within business hours (IST).
                </p>
              </div>

              {/* Email item */}
              <div className="space-y-1.5 p-4 rounded-2xl bg-black/15 border border-emerald-800/80">
                <div className="flex items-center justify-between text-xs text-stone-300 font-medium">
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#F4B900]" />
                    <span>Email Address</span>
                  </span>
                  <button
                    onClick={() => copyToClipboard(PORTFOLIO_OWNER.email, 'email')}
                    className="hover:text-white inline-flex items-center gap-1 cursor-pointer transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#F4B900]" />
                        <span className="text-[#F4B900] text-[11px]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PORTFOLIO_OWNER.email}`}
                  className="text-sm sm:text-base font-bold text-white hover:text-[#F4B900] transition-colors block truncate"
                >
                  {PORTFOLIO_OWNER.email}
                </a>
              </div>

              {/* Phone item */}
              <div className="space-y-2 p-4 rounded-2xl bg-black/15 border border-emerald-800/80">
                <div className="text-xs text-stone-300 font-medium flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#F4B900]" />
                  <span>Phone Numbers</span>
                </div>
                <div className="space-y-2">
                  {PORTFOLIO_OWNER.phones.map((phone, pIdx) => (
                    <div key={pIdx} className="flex items-center justify-between">
                      <a
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="text-sm font-bold text-white hover:text-[#F4B900] transition-colors tabular-nums"
                      >
                        {phone}
                      </a>
                      <button
                        onClick={() => copyToClipboard(phone, 'phone')}
                        className="text-xs text-stone-400 hover:text-white inline-flex items-center gap-1 cursor-pointer"
                        title="Copy Phone"
                      >
                        {copiedPhone === phone ? (
                          <Check className="w-3 h-3 text-[#F4B900]" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location item */}
              <div className="p-4 rounded-2xl bg-black/15 border border-emerald-800/80 space-y-1">
                <div className="text-xs text-stone-300 font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#F4B900]" />
                  <span>Base Location</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  {PORTFOLIO_OWNER.location}
                </div>
              </div>

              {/* Direct WhatsApp CTA */}
              <a
                href={`https://wa.me/${PORTFOLIO_OWNER.whatsapp}?text=Hi%20Amrit,%20I%20would%20like%20to%20discuss%20a%20project`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl bg-[#F4B900] text-stone-950 hover:bg-[#DC9B00] active:scale-98 transition-all font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-stone-950" />
                <span>Instant WhatsApp Consultation</span>
              </a>
            </div>

            {/* Quick Availability Card */}
            <div className="bg-[#F7F6F2] rounded-3xl p-6 border border-stone-200 text-xs text-stone-700 space-y-2">
              <div className="flex items-center gap-2 font-bold text-stone-900">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Current Status: Accepting Select Q4 / Q1 Retainers</span>
              </div>
              <p className="text-stone-600 leading-relaxed">
                Available for high-impact Meta Ads setups, full-funnel digital audits, and enterprise performance marketing advisory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
