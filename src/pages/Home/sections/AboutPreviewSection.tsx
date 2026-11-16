import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { PATHS } from '@/routes/paths';
import { COMPANY_INFO } from '@/data/company';

export const AboutPreviewSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-lightgrey/60 border-b border-slate-border overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Highlight Box */}
          <div className="lg:col-span-5 relative">
            <div className="bg-primary rounded-brand-lg p-8 sm:p-10 text-white shadow-soft-xl border border-primary-light/40 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-brand bg-accent/20 text-accent flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-accent font-semibold block">
                    Our Reputation
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    Trusted By Clients Across Bangladesh
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We work closely with government offices and private institutions to complete contracts with proper documentation, safety rules, and fair pricing.
                </p>
                <div className="pt-4 border-t border-white/15 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    <span>Certified engineers supervising on-site every day</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    <span>Warranty and repair support after handover</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Details */}
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="gold">About Our Company</Badge>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-primary">
              Built on Honesty, Skilled Work & Quality
            </h2>

            <p className="text-base text-slate leading-relaxed">
              {COMPANY_INFO.aboutStory[0]}
            </p>

            <p className="text-sm text-slate-muted leading-relaxed">
              {COMPANY_INFO.aboutStory[2]}
            </p>

            {/* Value highlights */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-brand border border-slate-border">
                <div className="font-bold text-primary text-sm sm:text-base">
                  Honest Pricing
                </div>
                <div className="text-xs text-slate-muted mt-1">
                  Clear estimates and no unexpected extra charges.
                </div>
              </div>
              <div className="p-4 bg-white rounded-brand border border-slate-border">
                <div className="font-bold text-primary text-sm sm:text-base">
                  On-Time Completion
                </div>
                <div className="text-xs text-slate-muted mt-1">
                  We respect project deadlines and schedule carefully.
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                to={PATHS.about}
                variant="primary"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
