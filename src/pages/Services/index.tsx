import React from 'react';
import { ArrowRight, CheckCircle2, Zap, Building2, Globe } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/common/PageHeader';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { CTABand } from '@/components/common/CTABand';
import { Reveal } from '@/components/animated/Reveal';
import { DIVISIONS } from '@/data/services';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useQuoteModal } from '@/context/QuoteModalContext';

const divisionIconMap: Record<string, React.ElementType> = {
  'electro-mechanical': Zap,
  'construction': Building2,
  'it': Globe,
};

const Services: React.FC = () => {
  usePageTitle(
    'Our Services | Sijjil Enterprise',
    'Explore Sijjil Enterprise’s three main divisions: Electro-Mechanical services, Civil Construction, and IT & Software Solutions in Bangladesh.'
  );

  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="w-full">
      <PageHeader
        badge="What We Offer"
        title="Our Contracting Divisions"
        description="We provide dependable contracting services across three main disciplines: electrical power systems, building construction, and modern software development."
        breadcrumbs={[{ label: 'Services' }]}
      />

      <section className="py-20 lg:py-28 bg-white border-b border-slate-border">
        <Container>
          <div className="space-y-24">
            {DIVISIONS.map((division, idx) => {
              const isEven = idx % 2 === 1;
              const Icon = divisionIconMap[division.id] || Zap;

              return (
                <div
                  key={division.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
                >
                  {/* Text Column */}
                  <div
                    className={`lg:col-span-7 space-y-6 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <Reveal>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-brand bg-primary text-accent flex items-center justify-center shadow-soft">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <Badge variant="gold">{division.badge}</Badge>
                          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary mt-1">
                            {division.name}
                          </h2>
                        </div>
                      </div>

                      <p className="text-base font-semibold text-accent-700 mt-2">
                        {division.subtitle}
                      </p>

                      <p className="text-base text-slate-muted leading-relaxed mt-3">
                        {division.summary}
                      </p>

                      <div className="pt-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-muted mb-3">
                          What We Provide:
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate">
                          {division.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                              <span className="font-medium">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 flex flex-wrap items-center gap-4">
                        <Button
                          to={division.path}
                          variant="primary"
                          icon={<ArrowRight className="w-4 h-4" />}
                        >
                          View {division.name}
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => openQuoteModal(division.name)}
                        >
                          Get an Estimate
                        </Button>
                      </div>
                    </Reveal>
                  </div>

                  {/* Feature Visual Box */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <Reveal delay={0.15}>
                      <div className="bg-gradient-to-br from-primary-dark via-primary to-primary-950 p-8 sm:p-10 rounded-brand-lg text-white shadow-soft-xl border border-primary-light/40 relative overflow-hidden">
                        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
                        <div className="relative z-10 space-y-4">
                          <span className="text-xs uppercase tracking-widest text-accent font-semibold block">
                            Our Commitment
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-white">
                            Reliable Execution, Every Time
                          </h3>
                          <p className="text-sm text-slate-300 leading-relaxed">
                            Our qualified engineers supervise work daily on-site. We follow government standards, use tested materials, and provide clear progress updates.
                          </p>

                          <div className="pt-4 border-t border-white/15 space-y-2 text-xs text-slate-300">
                            <div className="flex items-center justify-between">
                              <span className="text-slate-400">Quality Checks:</span>
                              <span className="text-white font-semibold">100% Tested Materials</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-slate-400">Warranty:</span>
                              <span className="text-accent font-semibold">Defects Liability Included</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CTABand onOpenQuoteModal={() => openQuoteModal()} />
    </div>
  );
};

export default Services;
