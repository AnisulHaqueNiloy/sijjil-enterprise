import React from 'react';
import { ArrowRight, ShieldCheck, FileCheck2, HardHat, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { PATHS } from '@/routes/paths';
import { COMPANY_INFO } from '@/data/company';

export const HeroSection: React.FC = () => {
  const trustIcons = [
    { icon: FileCheck2, label: 'Government Registered', desc: 'Valid trade, tax & enlistment' },
    { icon: ShieldCheck, label: 'Quality Work', desc: 'Tested materials & standards' },
    { icon: HardHat, label: 'Experienced Engineers', desc: 'Civil, electrical & IT experts' },
    { icon: Clock, label: 'On-Time Completion', desc: 'Reliable project scheduling' },
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-28 pb-12 lg:pt-36 lg:pb-16 bg-primary-dark text-white overflow-hidden">
      {/* Background Architectural Image with Deep Navy Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop"
          alt="Modern Architectural Engineering Background"
          className="w-full h-full object-cover object-center opacity-40 filter brightness-[0.85] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-950/80 to-primary-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-black/20" />
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      </div>

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary-light/30 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Hero Content: 2-Column Layout on Desktop */}
      <Container className="relative z-10 my-auto py-6 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Badges, Subtext, CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <div className="mb-4">
              <Badge
                variant="gold"
                className="bg-accent/15 text-accent-light border-accent/40 px-3.5 py-1.5 text-xs font-semibold tracking-wider"
              >
                Government Enlisted Contractor • Bangladesh
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
              Reliable Construction, Electrical & IT Services
            </h1>

            <p className="text-base sm:text-lg text-slate-200/90 max-w-xl leading-relaxed mb-8">
              {COMPANY_INFO.heroSubtext}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Button
                to={PATHS.services}
                variant="gold"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Our Services
              </Button>

              <Button
                to={PATHS.contact}
                variant="outline"
                size="lg"
                className="text-white border-white/30 hover:border-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </div>

            {/* Quick checkmarks */}
            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/15 w-full max-w-lg text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Class-1 Enlisted Contractor</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>PPR-2008 & CPTU Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Certified Resident Engineers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Guaranteed On-Time Handover</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Picture Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Outer Frame with Gold Border & Ambient Shadow */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Corner Offset Accent */}
              <div className="absolute -top-3 -right-3 w-full h-full rounded-brand-lg border-2 border-accent/40 -z-0 hidden sm:block" />

              <div className="relative z-10 rounded-brand-lg overflow-hidden border border-white/20 shadow-soft-xl bg-primary-950">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop"
                  alt="Sijjil Enterprise Construction and Engineering Project Site"
                  className="w-full h-[380px] sm:h-[440px] object-cover object-center filter brightness-[0.92] contrast-[1.05] hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle gradient vignette at bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-transparent to-black/20 pointer-events-none" />

                {/* Floating Badge (Top Left) */}
                <div className="absolute top-4 left-4 bg-primary-dark/90 backdrop-blur-md px-3.5 py-2 rounded-brand border border-white/20 shadow-soft flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded bg-accent/20 text-accent flex items-center justify-center">
                    <HardHat className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-white leading-tight">Civil & MEP Works</div>
                    <div className="text-[10px] text-accent">Active Project Delivery</div>
                  </div>
                </div>

                {/* Floating Badge (Bottom Overlay) */}
                <div className="absolute bottom-4 left-4 right-4 bg-primary-900/95 backdrop-blur-md p-3.5 rounded-brand border border-accent/30 shadow-soft">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">Three Specialized Divisions</div>
                      <div className="text-[11px] text-slate-300">Construction • Electro-Mechanical • Software</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-accent text-primary-dark font-extrabold flex items-center justify-center text-xs shadow-soft">
                      3+
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Bottom Trust Strip */}
      <div className="relative z-10 w-full pt-6 lg:pt-8">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-white/5 backdrop-blur-md rounded-brand-lg p-5 sm:p-6 border border-white/10 shadow-soft"
          >
            {trustIcons.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-brand bg-accent/15 text-accent flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                      {item.label}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 line-clamp-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </Container>
      </div>
    </section>
  );
};
