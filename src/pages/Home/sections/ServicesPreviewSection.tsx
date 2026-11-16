import React from 'react';
import { ArrowRight, CheckCircle2, Zap, Building2, Globe } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { StackSection } from '@/components/animated/StackSection';
import { DIVISIONS } from '@/data/services';

const divisionIconMap: Record<string, React.ElementType> = {
  'electro-mechanical': Zap,
  'construction': Building2,
  'it': Globe,
};

export const ServicesPreviewSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-border">
      <Container>
        <SectionTitle
          badge="What We Do"
          title="Our Three Main Divisions"
          description="We deliver reliable work across three specialized areas: building construction, electrical systems, and modern software development."
        />

        {/* Clean, fluid cards */}
        <StackSection className="space-y-6 sm:space-y-8">
          {DIVISIONS.map((division, idx) => {
            const Icon = divisionIconMap[division.id] || Zap;

            return (
              <div
                key={division.id}
                className="w-full bg-lightgrey rounded-brand-lg border border-slate-border/90 p-8 sm:p-10 lg:p-12 shadow-soft hover:shadow-soft-lg transition-all duration-300 relative overflow-hidden"
              >
                {/* Numbering */}
                <div className="absolute top-6 right-8 text-6xl sm:text-7xl font-black text-slate-200/50 select-none pointer-events-none">
                  0{idx + 1}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  {/* Left Column: Information */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-brand bg-primary text-accent flex items-center justify-center shadow-soft">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <Badge variant="gold">{division.badge}</Badge>
                        <h3 className="text-xl sm:text-2xl font-bold text-primary mt-1">
                          {division.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm font-semibold text-accent-700">
                      {division.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-slate-muted leading-relaxed">
                      {division.summary}
                    </p>

                    <div className="pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-muted mb-3">
                        What We Provide:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate">
                        {division.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                            <span className="font-medium">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex items-center gap-4">
                      <Button
                        to={division.path}
                        variant="primary"
                        icon={<ArrowRight className="w-4 h-4" />}
                      >
                        View Division Details
                      </Button>
                    </div>
                  </div>

                  {/* Right Column: Key Promise Box */}
                  <div className="lg:col-span-5">
                    <div className="bg-primary-dark rounded-brand-lg p-6 sm:p-8 text-white relative overflow-hidden shadow-soft-lg border border-primary-light/40">
                      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
                      <div className="relative z-10 space-y-3">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-accent block">
                          Our Commitment
                        </span>
                        <h4 className="text-lg font-bold text-white">
                          Quality Materials & Tested Safety
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          All projects in this division are managed by qualified engineers who ensure safety on-site, compliance with local building codes, and on-time completion.
                        </p>
                        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                          <span>Quality Guarantee:</span>
                          <span className="font-semibold text-accent">100% Inspected & Tested</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </StackSection>
      </Container>
    </section>
  );
};
