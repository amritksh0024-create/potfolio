import React, { useState } from 'react';
import { PRICING_PLANS, PricingPlan } from '../data/portfolioData';
import { Check, Star, ArrowRight } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');

  return (
    <section id="pricing" className="py-24 bg-[#174B32] text-white relative overflow-hidden">
      {/* Subtle organic light accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4B900]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#206141]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading & Currency Toggle */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F4B900] inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#F4B900]" />
            Transparent Engagements
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white text-balance">
            My Pricing Model
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Choose the package that fits your project. Engineered for measurable ROAS, predictable scaling, and zero hidden costs.
          </p>

          {/* Currency Switcher */}
          <div className="inline-flex items-center p-1 rounded-xl bg-black/20 border border-emerald-800/80 backdrop-blur-sm mt-4">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currency === 'USD'
                  ? 'bg-[#F4B900] text-stone-900 shadow-sm'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency('INR')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currency === 'INR'
                  ? 'bg-[#F4B900] text-stone-900 shadow-sm'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              INR (₹)
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isHighlighted = !!plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isHighlighted
                    ? 'bg-[#F4B900] text-stone-950 shadow-2xl lg:-translate-y-2 ring-4 ring-[#F4B900]/30'
                    : 'bg-[#0D2D1E] text-white border border-emerald-800/60 hover:border-emerald-700 shadow-lg'
                }`}
              >
                {/* Most Popular Badge on Middle Card */}
                {isHighlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-4 py-1 rounded-full bg-[#174B32] text-white text-xs font-bold uppercase tracking-wider shadow-md">
                    <Star className="w-3.5 h-3.5 fill-[#F4B900] text-[#F4B900]" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="border-b pb-6 mb-6 border-current/15">
                    <h3 className={`text-xl font-bold tracking-tight ${isHighlighted ? 'text-stone-950' : 'text-white'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-xs mt-1.5 min-h-[32px] ${isHighlighted ? 'text-stone-800' : 'text-stone-300'}`}>
                      {plan.tagline}
                    </p>

                    {/* Price display */}
                    <div className="mt-5 flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold tracking-tight tabular-nums">
                        {currency === 'USD' ? `$${plan.priceUSD}` : `₹${plan.priceINR.toLocaleString('en-IN')}`}
                      </span>
                      <span className={`text-xs font-semibold uppercase ${isHighlighted ? 'text-stone-800' : 'text-stone-400'}`}>
                        /{plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    <div className={`text-xs font-bold uppercase tracking-wider ${isHighlighted ? 'text-stone-900' : 'text-stone-300'}`}>
                      Included Deliverables:
                    </div>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm">
                        <div
                          className={`w-4 h-4 rounded-full mt-0.5 shrink-0 flex items-center justify-center ${
                            isHighlighted ? 'bg-[#174B32] text-white' : 'bg-[#F4B900] text-stone-950'
                          }`}
                        >
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className={`leading-snug ${isHighlighted ? 'text-stone-900 font-medium' : 'text-stone-200'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-98 ${
                    isHighlighted
                      ? 'bg-[#174B32] text-white hover:bg-[#0D2D1E] shadow-md'
                      : 'bg-[#F4B900] text-stone-950 hover:bg-[#DC9B00] shadow-sm'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Custom Scope Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-stone-300">
            Need a bespoke custom retainer or one-off campaign audit?{' '}
            <button
              onClick={() => onSelectPlan('Custom Scope Request')}
              className="text-[#F4B900] font-semibold underline underline-offset-4 hover:text-[#DC9B00] cursor-pointer"
            >
              Request a custom quote
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};
