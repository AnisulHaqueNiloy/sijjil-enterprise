import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { HorizontalScroller } from '@/components/animated/HorizontalScroller';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { APPROACH_STEPS } from '@/data/services';

export const ApproachSection: React.FC = () => {
  return (
    <section className="bg-primary-950 text-white border-b border-primary-light/20 relative">
      <HorizontalScroller
        heading={
          <SectionTitle
            badge="Simple Process"
            title="How We Deliver Your Project"
            description="A clear 4-step workflow to ensure honest planning, good materials, and on-time completion."
            inverted
          />
        }
      >
        {APPROACH_STEPS.map((step) => (
          <div
            key={step.step}
            className="w-full bg-primary rounded-brand-lg p-8 sm:p-10 border border-primary-light/40 shadow-soft-lg flex flex-col justify-between relative overflow-hidden group hover:border-accent/60 transition-colors"
          >
            {/* Background Step Number */}
            <div className="absolute top-4 right-6 text-7xl font-black text-white/5 select-none pointer-events-none group-hover:text-accent/10 transition-colors">
              {step.step}
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-full bg-accent/20 text-accent font-extrabold flex items-center justify-center text-sm border border-accent/30">
                  {step.step}
                </span>
                <span className="text-xs uppercase tracking-widest text-accent font-semibold">
                  Step {step.step}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight">
                {step.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {step.desc}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 flex items-center gap-2 text-xs font-semibold text-accent">
              <CheckCircle2 className="w-4 h-4" />
              <span>Milestone Sign-Off</span>
            </div>
          </div>
        ))}
      </HorizontalScroller>
    </section>
  );
};
