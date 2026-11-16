import React from 'react';
import { ArrowRight, ShieldCheck, FileCheck2, HardHat, Clock } from 'lucide-react';
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
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between pt-28 pb-12 lg:pt-36 lg:pb-16 bg-gradient-to-b from-primary-950 via-primary to-primary-950 text-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary-light/30 rounded-full blur-[90px] pointer-events-none" />

      {/* Main Hero Content */}
      <Container className="relative z-10 my-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          <div className="mb-4">
            <Badge
              variant="gold"
              className="bg-accent/15 text-accent-light border-accent/40 px-4 py-1.5 text-xs font-semibold tracking-wider"
            >
              Government & Public Sector Contractor • Bangladesh
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight lg:leading-[1.15]">
            Reliable Construction, Electrical & IT Services
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
            {COMPANY_INFO.heroSubtext}
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
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
        </motion.div>
      </Container>

      {/* Trust Strip */}
      <div className="relative z-10 w-full pt-8 lg:pt-12">
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
