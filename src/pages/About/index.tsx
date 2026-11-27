import React from 'react';
import {
  ShieldCheck, Award, HardHat, Clock, Eye, FileText, CheckCircle2,
  Compass, Target
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { PageHeader } from '@/components/common/PageHeader';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { CTABand } from '@/components/common/CTABand';
import { Reveal } from '@/components/animated/Reveal';
import { COMPANY_INFO } from '@/data/company';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useQuoteModal } from '@/context/QuoteModalContext';

const coreValueIconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Award,
  HardHat,
  Clock,
  Eye,
};

const About: React.FC = () => {
  usePageTitle(
    'About Us | Sijjil Enterprise - Company Profile',
    'Learn about Sijjil Enterprise, our engineering team, government enlistments, and our commitment to honest contracting in Bangladesh.'
  );

  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="w-full">
      <PageHeader
        badge="Company Profile"
        title="About Sijjil Enterprise"
        description="A government-enlisted contracting company delivering quality Civil Construction, Electrical Power Systems, and IT Infrastructure across Bangladesh."
        bgImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1800&auto=format&fit=crop"
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Company Story & Mission/Vision */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            {/* Story text */}
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="gold">Our Background</Badge>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-primary tracking-tight">
                Dedicated to Quality Work and Client Trust
              </h2>
              {COMPANY_INFO.aboutStory.map((paragraph, idx) => (
                <p key={idx} className="text-base text-slate-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-2 flex items-center gap-3 text-xs sm:text-sm font-semibold text-primary">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                <span>Operating under official Public Procurement Rules (PPR-2008)</span>
              </div>
            </div>

            {/* Visual Highlight Box */}
            <div className="lg:col-span-5 relative">
              <div className="bg-gradient-to-br from-primary-950 to-primary p-8 sm:p-10 rounded-brand-lg text-white shadow-soft-xl border border-primary-light/40 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <span className="text-xs uppercase tracking-widest text-accent font-bold block">
                    Our Standard
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    Inspected & Tested Materials
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    We verify structural materials, concrete strength, and electrical components through recognized engineering laboratories (such as BUET / PWD) before final site installation.
                  </p>
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                    <span>Standards Followed:</span>
                    <span className="font-semibold text-accent">BNBC • PWD Schedules</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal>
              <Card className="h-full border-l-4 border-l-accent p-8 bg-lightgrey/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-brand bg-accent/20 text-accent-700 flex items-center justify-center">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Our Mission</h3>
                </div>
                <p className="text-base text-slate leading-relaxed">
                  {COMPANY_INFO.mission}
                </p>
              </Card>
            </Reveal>

            <Reveal delay={0.15}>
              <Card className="h-full border-l-4 border-l-primary p-8 bg-lightgrey/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-brand bg-primary/10 text-primary flex items-center justify-center">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Our Vision</h3>
                </div>
                <p className="text-base text-slate leading-relaxed">
                  {COMPANY_INFO.vision}
                </p>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Executive Leadership & Management */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-border">
        <Container>
          <SectionTitle
            badge="Leadership"
            title="Executive Management"
            description="Our leadership team brings hands-on experience in public sector contracting, engineering execution, and corporate governance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {COMPANY_INFO.leadership.map((leader, idx) => (
              <Reveal key={idx} delay={idx * 0.15}>
                <Card hoverLift className="overflow-hidden border border-slate-border h-full flex flex-col p-0 bg-white shadow-soft">
                  {/* Photo Container: 4:5 aspect ratio showing full face, aligned eyelines, no cropping */}
                  <div className="relative w-full aspect-[4/5] bg-white overflow-hidden border-b border-slate-border/80 flex items-center justify-center">
                    <img
                      src={leader.image}
                      alt={`${leader.title} - ${leader.role}`}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </div>

                  {/* Executive Info Below Photo (Clean, Unobscured) */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2.5">
                        <Badge variant="gold" className="text-[11px] font-bold tracking-wider uppercase">
                          {leader.role}
                        </Badge>
                      </div>

                      <h3 className="text-2xl font-extrabold text-primary tracking-tight mb-3">
                        {leader.title}
                      </h3>

                      <p className="text-sm text-slate-muted leading-relaxed">
                        {leader.description}
                      </p>
                    </div>

                    <div className="pt-5 border-t border-slate-border">
                      <h4 className="text-xs uppercase tracking-wider font-bold text-primary mb-3">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2.5">
                        {leader.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span className="leading-snug">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Core Values Section */}
      <section className="py-20 lg:py-28 bg-lightgrey border-b border-slate-border">
        <Container>
          <SectionTitle
            badge="What We Value"
            title="Our Principles of Work"
            description="Our company culture is built on honest business, worker safety, and delivering on our commitments."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {COMPANY_INFO.coreValues.map((value, idx) => {
              const Icon = coreValueIconMap[value.iconName] || ShieldCheck;
              return (
                <Reveal key={idx} delay={idx * 0.08}>
                  <Card hoverLift className="flex flex-col justify-between h-full">
                    <div>
                      <div className="w-12 h-12 rounded-brand bg-primary/5 text-primary flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-primary mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-slate-muted leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Legal & Registrations Section */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-border">
        <Container>
          <SectionTitle
            badge="Legal Papers"
            title="Licenses & Registrations"
            description="We are officially enlisted and maintain valid documentation for government contracting and public sector tenders."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {COMPANY_INFO.registrations.map((reg, idx) => (
              <Reveal key={idx} delay={idx * 0.08}>
                <Card hoverLift className="border-l-4 border-l-primary/60">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-accent" />
                      <h3 className="text-lg font-bold text-primary">{reg.title}</h3>
                    </div>
                    <Badge variant="navy">Official</Badge>
                  </div>

                  <div className="space-y-1.5 text-xs sm:text-sm mb-4">
                    <div className="text-slate font-medium">
                      <span className="text-slate-muted">Registration Number: </span>
                      <span className="font-mono text-primary font-bold">{reg.regNumber}</span>
                    </div>
                    <div className="text-slate">
                      <span className="text-slate-muted">Authority: </span>
                      <span>{reg.authority}</span>
                    </div>
                    <div className="text-slate">
                      <span className="text-slate-muted">Validity: </span>
                      <span className="text-emerald-700 font-semibold">{reg.validity}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-muted italic bg-lightgrey/80 p-3 rounded-brand border border-slate-border/50">
                    {reg.placeholderNotice}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTABand onOpenQuoteModal={() => openQuoteModal()} />
    </div>
  );
};

export default About;
